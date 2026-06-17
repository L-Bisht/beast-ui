# Beast UI

A React component library published as scoped npm packages (`@beast-ui/*`), taking architectural cues from MUI's package structure but with its own visual identity and implementation.

## Language

**Component**:
A reusable, styled React element exported by the library for consumption by end users.
_Avoid_: Widget, element, block

**Consumer**:
A developer who installs and uses Beast UI in their application.
_Avoid_: User (ambiguous with end-user), client

**Design Token**:
A named value (color, spacing, radius, shadow, etc.) that encodes a design decision and is consumed by the theme engine.
_Avoid_: Variable, constant, CSS variable (too implementation-specific)

**Theme**:
A complete set of design tokens expressed as CSS custom properties. Ships as a CSS file; optionally set via a JS object through BeastProvider.
_Avoid_: Skin, style config

**BeastProvider**:
An optional React wrapper that converts a JS theme object into CSS custom properties on a container element. A convenience layer — components never read from it directly.
_Avoid_: ThemeProvider (MUI term), ThemeContext

**Theme Override**:
A consumer-supplied value that replaces a default design token, applied via CSS or BeastProvider.
_Avoid_: Customization, tweak

**Variant**:
The primary visual style of a component. Glassmorphism is treated as a mutually exclusive variant (`variant="glass"`) rather than a boolean modifier (`glass={true}`). This consistent API applies to both interactive controls (like Button) and structural elements (like Surface).
_Avoid_: `glass={true}` as a boolean modifier, treating glass as orthogonal to solid/outlined

**Design Language**:
Beast UI's visual identity: "Tactile Calm" (Botanical/Moss palettes, low eye-strain, organic, and physically grounded). Components use distinct 1px structural borders rather than relying entirely on muddy drop shadows, and interactions feature a "Magnetic Press" where elements physically depress. Not vibrant, not minimal, not material.
_Avoid_: Material Design, flat design, excessively vibrant/bold palettes

### Component Names (where they differ from industry defaults)

**Frame**:
A generic styled container element. The lowest-level layout primitive.
_Avoid_: Box, Div, Wrapper

**Flex**:
A flex container with direction and gap. Lays out children in a single axis.
_Avoid_: Stack, VStack, HStack

**Lattice**:
A CSS grid-based layout component for two-dimensional arrangements.
_Avoid_: Grid, Layout, Matrix

**Text**:
A component for rendering styled text with semantic HTML elements.
_Avoid_: Typography, Heading, Paragraph

**Input**:
A text input field with label, helper text, and validation support.
_Avoid_: TextField, TextInput

**Spinner**:
A loading indicator, circular by default.
_Avoid_: CircularProgress, Loader

**Progress**:
A bar indicating completion or progress of a task.
_Avoid_: LinearProgress, ProgressBar

**Surface**:
An elevated container with background and shadow. The base for cards and panels.
_Avoid_: Paper, Panel

**Tag**:
A compact element for labels, filters, or selections.
_Avoid_: Chip, Badge (Badge is a separate overlay indicator)

**Toast**:
A brief, auto-dismissing notification that appears at a screen edge.
_Avoid_: Snackbar, Notification (Notification implies system-level)

**Collapsible**:
A single expand/collapse unit. Compose multiples for accordion behavior.
_Avoid_: Accordion, Expander

**Breadcrumb**:
A navigation component showing the current page's location in a hierarchy.
_Avoid_: Breadcrumbs (plural)

**Tabs**:
A set of interactive controls that swap the content displayed in a related panel.
_Avoid_: TabContainer, TabBar

**Docs Site**:
The official, comprehensive documentation and interactive demonstration environment for Beast UI, built as a Vite SPA in `apps/playground`.
_Avoid_: Playground (deprecated term), Docs App

**Glaze**:
The configuration prop for customizing the glassmorphism effect (blur and tint) on surface-level components.
_Avoid_: GlassProps, GlassConfig, blur settings

**Frost**:
The degree of blur applied to the backdrop in a glassmorphic element, defining how opaque or transparent the glass appears physically.
_Avoid_: Blur, backdrop-filter

**Tint**:
The color mix and opacity applied to the background of a glassmorphic element, simulating light passing through colored glass.
_Avoid_: Opacity, background-color transparency

