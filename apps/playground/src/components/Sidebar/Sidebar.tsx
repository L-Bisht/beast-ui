import { Divider } from '@beast-ui/core';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export function Sidebar() {
  return (
    <aside className="docs-sidebar">
      <div className="docs-sidebar-logo">Beast UI</div>
      <Divider style={{ margin: 0 }} />
      
      <div className="docs-sidebar-section">
        <div className="docs-sidebar-heading">Getting Started</div>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Introduction
        </NavLink>
      </div>

      <div className="docs-sidebar-section">
        <div className="docs-sidebar-heading">Components</div>
        <NavLink 
          to="/components/alert" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Alert
        </NavLink>
        <NavLink 
          to="/components/avatar" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Avatar
        </NavLink>
        <NavLink 
          to="/components/badge" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Badge
        </NavLink>
        <NavLink 
          to="/components/beastprovider" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          BeastProvider
        </NavLink>
        <NavLink 
          to="/components/breadcrumb" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Breadcrumb
        </NavLink>
        <NavLink 
          to="/components/button" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Button
        </NavLink>
        <NavLink 
          to="/components/card" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Card
        </NavLink>
        <NavLink 
          to="/components/checkbox" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Checkbox
        </NavLink>
        <NavLink 
          to="/components/collapsible" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Collapsible
        </NavLink>
        <NavLink 
          to="/components/container" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Container
        </NavLink>
        <NavLink 
          to="/components/dialog" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Dialog
        </NavLink>
        <NavLink 
          to="/components/divider" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Divider
        </NavLink>
        <NavLink 
          to="/components/drawer" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Drawer
        </NavLink>
        <NavLink 
          to="/components/flex" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Flex
        </NavLink>
        <NavLink 
          to="/components/frame" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Frame
        </NavLink>
        <NavLink 
          to="/components/input" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Input
        </NavLink>
        <NavLink 
          to="/components/lattice" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Lattice
        </NavLink>
        <NavLink 
          to="/components/link" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Link
        </NavLink>
        <NavLink 
          to="/components/menu" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Menu
        </NavLink>
        <NavLink 
          to="/components/progress" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Progress
        </NavLink>
        <NavLink 
          to="/components/radio" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Radio
        </NavLink>
        <NavLink 
          to="/components/select" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Select
        </NavLink>
        <NavLink 
          to="/components/skeleton" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Skeleton
        </NavLink>
        <NavLink 
          to="/components/spinner" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Spinner
        </NavLink>
        <NavLink 
          to="/components/surface" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Surface
        </NavLink>
        <NavLink 
          to="/components/switch" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Switch
        </NavLink>
        <NavLink 
          to="/components/tabs" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Tabs
        </NavLink>
        <NavLink 
          to="/components/tag" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Tag
        </NavLink>
        <NavLink 
          to="/components/text" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Text
        </NavLink>
        <NavLink 
          to="/components/toast" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Toast
        </NavLink>
        <NavLink 
          to="/components/tooltip" 
          className={({ isActive }) => isActive ? 'docs-sidebar-link active' : 'docs-sidebar-link'}
        >
          Tooltip
        </NavLink>
      </div>
    </aside>
  );
}
