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

**Design Language**:
Beast UI's visual identity: bold, expressive, vibrant default palette, confident spacing, mix of radii, playful but professional motion. Not minimal, not material.
_Avoid_: Material Design, flat design

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

