import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import './DocsLayout.css';

export function DocsLayout() {
  return (
    <div className="docs-layout">
      {/* Sidebar Navigation */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="docs-main">
        <div className="docs-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
