const fs = require('fs');
const path = require('path');

const coreDir = path.join(__dirname, 'packages', 'core', 'src');
const docsDir = path.join(__dirname, 'apps', 'playground', 'src', 'pages', 'docs');
const appTsxPath = path.join(__dirname, 'apps', 'playground', 'src', 'App.tsx');
const sidebarTsxPath = path.join(__dirname, 'apps', 'playground', 'src', 'components', 'Sidebar', 'Sidebar.tsx');

// Get all component directories
const components = fs.readdirSync(coreDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name[0] === dirent.name[0].toUpperCase() && dirent.name !== '__tests__')
  .map(dirent => dirent.name);

// Generate files for each component
components.forEach(comp => {
  const compDir = path.join(docsDir, comp);
  const demosDir = path.join(compDir, 'demos');

  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }
  if (!fs.existsSync(demosDir)) {
    fs.mkdirSync(demosDir, { recursive: true });
  }

  // Generate basic demo
  const demoPath = path.join(demosDir, `${comp}Basic.tsx`);
  if (!fs.existsSync(demoPath)) {
    fs.writeFileSync(demoPath, `import { ${comp} } from '@beast-ui/core';

export default function ${comp}Basic() {
  return (
    <div>
      {/* TODO: Add basic usage for ${comp} */}
      <${comp === 'BeastProvider' ? 'div' : comp}>Basic ${comp}</${comp === 'BeastProvider' ? 'div' : comp}>
    </div>
  );
}
`);
  }

  // Generate MDX
  const mdxPath = path.join(compDir, `${comp}.mdx`);
  if (!fs.existsSync(mdxPath)) {
    fs.writeFileSync(mdxPath, `import { CodeDemo } from '../../../components/CodeDemo/CodeDemo';
import ${comp}Basic from './demos/${comp}Basic';
import ${comp}BasicCode from './demos/${comp}Basic?raw';

# ${comp}

Documentation for the ${comp} component.

## Basic Usage

<CodeDemo code={${comp}BasicCode}>
  <${comp}Basic />
</CodeDemo>
`);
  }
});

// Update App.tsx imports and routes
let appTsx = fs.readFileSync(appTsxPath, 'utf8');

components.forEach(comp => {
  const importStr = `import ${comp}Docs from './pages/docs/${comp}/${comp}.mdx';`;
  if (!appTsx.includes(importStr)) {
    appTsx = importStr + '\n' + appTsx;
  }
  
  const routeStr = `<Route path="/components/${comp.toLowerCase()}" element={<${comp}Docs />} />`;
  if (!appTsx.includes(routeStr)) {
    // Insert before </Route>
    appTsx = appTsx.replace('      </Route>', `        ${routeStr}\n      </Route>`);
  }
});

fs.writeFileSync(appTsxPath, appTsx);

// Update Sidebar.tsx links
let sidebarTsx = fs.readFileSync(sidebarTsxPath, 'utf8');

const navLinks = components.map(comp => `        <NavLink 
          to="/components/${comp.toLowerCase()}" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          ${comp}
        </NavLink>`).join('\n');

// Find the components section and replace its content
const componentsSectionRegex = /<div className="docs-sidebar-heading">Components<\/div>[\s\S]*?<\/div>/;
sidebarTsx = sidebarTsx.replace(componentsSectionRegex, `<div className="docs-sidebar-heading">Components</div>\n${navLinks}\n      </div>`);

fs.writeFileSync(sidebarTsxPath, sidebarTsx);

console.log('Successfully generated docs for all components!');
