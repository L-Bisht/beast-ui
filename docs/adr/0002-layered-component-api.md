# Layered component API — props-first with compound component escape hatch

Complex components expose two API surfaces: a high-level props-based API for the common case (`<Select label="Pick" options={opts} />`), and compound sub-components on the same namespace for full structural control (`<Select.Root>`, `<Select.Trigger>`, etc.). Simple components (Button, Badge, Avatar) only ship the props API.

We considered props-only (MUI/Ant Design style), which scales poorly when consumers need to customize internal structure — it leads to prop explosion (`renderOption`, `slotProps`, `components`). We also considered composition-only (Radix/Headless UI style), which is too verbose for simple use cases and creates adoption friction. The layered approach gives us fast onboarding with the props API and full power via compound components, at the cost of maintaining two surfaces for complex widgets.
