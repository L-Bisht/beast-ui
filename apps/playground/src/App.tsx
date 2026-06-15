import { useState, useEffect } from 'react';
import { 
  Button, 
  Input, 
  Flex, 
  Container, 
  Text, 
  Divider, 
  Checkbox, 
  RadioGroup, 
  Radio, 
  Switch, 
  Select, 
  Avatar, 
  Badge, 
  Tag, 
  Tooltip 
} from '@beast-ui/core';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [radioVal, setRadioVal] = useState('a');
  const [selectVal, setSelectVal] = useState('us');

  // Toggle dark mode by adding/removing a class on the body
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('beast-dark');
      document.body.style.backgroundColor = 'var(--beast-color-background)';
      document.body.style.color = 'var(--beast-color-on-background)';
    } else {
      document.body.classList.remove('beast-dark');
      document.body.style.backgroundColor = 'var(--beast-color-background)';
      document.body.style.color = 'var(--beast-color-on-background)';
    }
  }, [isDark]);

  return (
    <Container maxWidth="md" style={{ padding: 'var(--beast-space-8) 0' }}>
      <Flex justify="space-between" align="center" style={{ marginBottom: 'var(--beast-space-8)' }}>
        <Text as="h1" size="2xl" weight="bold">Beast UI Playground</Text>
        <Flex gap="4" align="center">
          <Text>Dark Mode</Text>
          <Switch checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
        </Flex>
      </Flex>

      <Flex direction="column" gap="8">
        
        {/* Buttons & Tags */}
        <section>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: 'var(--beast-space-4)' }}>Actions & Tags</Text>
          <Flex gap="4" wrap="wrap" align="center">
            <Button variant="filled" color="primary">Primary</Button>
            <Button variant="outlined" color="primary">Outlined</Button>
            <Button variant="soft" color="danger">Danger Soft</Button>
            <Button variant="ghost">Ghost</Button>
            <Button loading>Loading</Button>
            <Divider orientation="vertical" style={{ height: '32px' }} />
            <Tag variant="filled" color="primary">New Feature</Tag>
            <Tag variant="soft" color="success">Success</Tag>
            <Tag variant="outlined" color="danger" onDelete={() => alert('Deleted!')}>Deletable</Tag>
          </Flex>
        </section>

        <Divider />

        {/* Inputs */}
        <section>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: 'var(--beast-space-4)' }}>Form Inputs</Text>
          <Flex gap="6" wrap="wrap">
            <Flex direction="column" gap="4" style={{ flex: 1, minWidth: '250px' }}>
              <Input label="Email address" placeholder="you@example.com" />
              <Input label="Password" type="password" error="Password is too short" />
            </Flex>
            <Flex direction="column" gap="4" style={{ flex: 1, minWidth: '250px' }}>
              <Select 
                label="Country (Props API)" 
                value={selectVal}
                onChange={setSelectVal}
                options={[
                  { value: 'us', label: 'United States' },
                  { value: 'ca', label: 'Canada' },
                  { value: 'mx', label: 'Mexico', disabled: true },
                  { value: 'uk', label: 'United Kingdom' }
                ]}
              />

              <Select.Root label="Favorite Fruit (Compound API)">
                <Select.Trigger>
                  <Select.Value placeholder="Select a fruit" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Group label="Citrus">
                    <Select.Item value="orange">Orange</Select.Item>
                    <Select.Item value="lemon">Lemon</Select.Item>
                  </Select.Group>
                  <Select.Separator />
                  <Select.Group label="Berries">
                    <Select.Item value="strawberry">Strawberry</Select.Item>
                    <Select.Item value="blueberry">Blueberry</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
          </Flex>
        </section>

        <Divider />

        {/* Selection Controls */}
        <section>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: 'var(--beast-space-4)' }}>Selection Controls</Text>
          <Flex gap="8" wrap="wrap">
            <Flex direction="column" gap="2">
              <Text weight="medium">Checkboxes</Text>
              <Checkbox label="Accept terms and conditions" />
              <Checkbox label="Subscribe to newsletter" defaultChecked />
              <Checkbox label="Indeterminate state" indeterminate />
              <Checkbox label="Disabled option" disabled />
            </Flex>

            <Flex direction="column" gap="2">
              <RadioGroup label="Delivery method" value={radioVal} onChange={(e) => setRadioVal(e.target.value)}>
                <Radio value="a" label="Standard (3-5 days)" />
                <Radio value="b" label="Express (1-2 days)" />
                <Radio value="c" label="Overnight" disabled />
              </RadioGroup>
            </Flex>
            
            <Flex direction="column" gap="2">
              <Text weight="medium">Switches</Text>
              <Switch label="Enable notifications" defaultChecked />
              <Switch label="Auto-update" size="sm" color="success" />
              <Switch label="Sync contacts" disabled />
            </Flex>
          </Flex>
        </section>

        <Divider />

        {/* Display & Overlays */}
        <section>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: 'var(--beast-space-4)' }}>Display & Overlays</Text>
          <Flex gap="6" align="center">
            <Badge content="3" color="danger">
              <Avatar fallback="U" size="md" />
            </Badge>
            
            <Badge content="99+" color="primary">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="lg" variant="rounded" />
            </Badge>

            <Tooltip content="This is a tooltip">
              <Button variant="outlined">Hover me</Button>
            </Tooltip>
          </Flex>
        </section>

      </Flex>
    </Container>
  );
}

export default App;
