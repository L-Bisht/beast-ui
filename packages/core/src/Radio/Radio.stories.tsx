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
