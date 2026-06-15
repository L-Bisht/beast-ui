# React Aria for complex components, manual a11y for simple ones

Complex interactive components (Select, Autocomplete, Dialog, Menu, DatePicker, Drawer) use React Aria hooks as their behavioral/accessibility foundation. Simple components (Button, Card, Badge, Text, Tag) implement ARIA attributes and keyboard handling manually.

Building a11y from scratch for complex widgets like comboboxes and modals would take weeks and produce inferior results — these require `aria-activedescendant`, focus traps, live region announcements, and edge cases that Adobe's team has spent years getting right. Simple components don't need a library dependency — a `<button>` with `aria-disabled` is trivial. This split minimizes the React Aria footprint while being honest about where real a11y complexity lives.
