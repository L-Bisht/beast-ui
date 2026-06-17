import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { RadioGroup, Radio } from './Radio.js';

const meta = {
  title: 'Inputs/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;

export const Default = () => {
  const [val, setVal] = useState('1');
  return (
    <RadioGroup label="Select an option" value={val} onChange={(e) => { setVal(e.target.value); }}>
      <Radio value="1" label="Option 1" />
      <Radio value="2" label="Option 2" />
      <Radio value="3" label="Disabled Option" disabled />
    </RadioGroup>
  );
};

export const Glassmorphism = () => {
  const [val, setVal] = useState('1');
  return (
    <div style={{ padding: '40px', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', borderRadius: '16px' }}>
      <RadioGroup label="Glass Options" value={val} onChange={(e) => { setVal(e.target.value); }}>
        <Radio variant="glass" value="1" label="Glass Option 1" />
        <Radio variant="glass" value="2" label="Glass Option 2" />
      </RadioGroup>
    </div>
  );
};
