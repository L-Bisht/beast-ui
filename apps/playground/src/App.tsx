import TooltipDocs from './pages/docs/Tooltip/Tooltip.mdx';
import ToastDocs from './pages/docs/Toast/Toast.mdx';
import TextDocs from './pages/docs/Text/Text.mdx';
import TagDocs from './pages/docs/Tag/Tag.mdx';
import TabsDocs from './pages/docs/Tabs/Tabs.mdx';
import SwitchDocs from './pages/docs/Switch/Switch.mdx';
import SurfaceDocs from './pages/docs/Surface/Surface.mdx';
import SpinnerDocs from './pages/docs/Spinner/Spinner.mdx';
import SkeletonDocs from './pages/docs/Skeleton/Skeleton.mdx';
import SelectDocs from './pages/docs/Select/Select.mdx';
import RadioDocs from './pages/docs/Radio/Radio.mdx';
import ProgressDocs from './pages/docs/Progress/Progress.mdx';
import MenuDocs from './pages/docs/Menu/Menu.mdx';
import LinkDocs from './pages/docs/Link/Link.mdx';
import LatticeDocs from './pages/docs/Lattice/Lattice.mdx';
import InputDocs from './pages/docs/Input/Input.mdx';
import FrameDocs from './pages/docs/Frame/Frame.mdx';
import FlexDocs from './pages/docs/Flex/Flex.mdx';
import DrawerDocs from './pages/docs/Drawer/Drawer.mdx';
import DividerDocs from './pages/docs/Divider/Divider.mdx';
import DialogDocs from './pages/docs/Dialog/Dialog.mdx';
import ContainerDocs from './pages/docs/Container/Container.mdx';
import CollapsibleDocs from './pages/docs/Collapsible/Collapsible.mdx';
import CheckboxDocs from './pages/docs/Checkbox/Checkbox.mdx';
import CardDocs from './pages/docs/Card/Card.mdx';
import BreadcrumbDocs from './pages/docs/Breadcrumb/Breadcrumb.mdx';
import BeastProviderDocs from './pages/docs/BeastProvider/BeastProvider.mdx';
import BadgeDocs from './pages/docs/Badge/Badge.mdx';
import AvatarDocs from './pages/docs/Avatar/Avatar.mdx';
import AlertDocs from './pages/docs/Alert/Alert.mdx';
import { Routes, Route } from 'react-router-dom';
import { Flex, Text } from '@beast-ui/core';
import { DocsLayout } from './components/Layout/DocsLayout';
import ButtonDocs from './pages/docs/Button/Button.mdx';

function Home() {
  return (
    <Flex direction="column" gap="4" align="flex-start" style={{ paddingTop: 'var(--beast-space-12)' }}>
      <Text as="h1" size="2xl" weight="bold">Beast UI Documentation</Text>
      <Text size="lg" style={{ color: 'var(--beast-color-text-secondary)' }}>
        Welcome to the beautiful new documentation site. Select a component from the sidebar to get started.
      </Text>
    </Flex>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<DocsLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/components/button" element={<ButtonDocs />} />
        <Route path="/components/alert" element={<AlertDocs />} />
        <Route path="/components/avatar" element={<AvatarDocs />} />
        <Route path="/components/badge" element={<BadgeDocs />} />
        <Route path="/components/beastprovider" element={<BeastProviderDocs />} />
        <Route path="/components/breadcrumb" element={<BreadcrumbDocs />} />
        <Route path="/components/card" element={<CardDocs />} />
        <Route path="/components/checkbox" element={<CheckboxDocs />} />
        <Route path="/components/collapsible" element={<CollapsibleDocs />} />
        <Route path="/components/container" element={<ContainerDocs />} />
        <Route path="/components/dialog" element={<DialogDocs />} />
        <Route path="/components/divider" element={<DividerDocs />} />
        <Route path="/components/drawer" element={<DrawerDocs />} />
        <Route path="/components/flex" element={<FlexDocs />} />
        <Route path="/components/frame" element={<FrameDocs />} />
        <Route path="/components/input" element={<InputDocs />} />
        <Route path="/components/lattice" element={<LatticeDocs />} />
        <Route path="/components/link" element={<LinkDocs />} />
        <Route path="/components/menu" element={<MenuDocs />} />
        <Route path="/components/progress" element={<ProgressDocs />} />
        <Route path="/components/radio" element={<RadioDocs />} />
        <Route path="/components/select" element={<SelectDocs />} />
        <Route path="/components/skeleton" element={<SkeletonDocs />} />
        <Route path="/components/spinner" element={<SpinnerDocs />} />
        <Route path="/components/surface" element={<SurfaceDocs />} />
        <Route path="/components/switch" element={<SwitchDocs />} />
        <Route path="/components/tabs" element={<TabsDocs />} />
        <Route path="/components/tag" element={<TagDocs />} />
        <Route path="/components/text" element={<TextDocs />} />
        <Route path="/components/toast" element={<ToastDocs />} />
        <Route path="/components/tooltip" element={<TooltipDocs />} />
      </Route>
    </Routes>
  );
}

export default App;
