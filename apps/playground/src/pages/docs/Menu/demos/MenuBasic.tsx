import { Menu } from '@beast-ui/core';

export default function MenuBasic() {
  return (
    <div>
      <Menu trigger={<button>Open</button>}>
        <Menu.Item>Item 1</Menu.Item>
      </Menu>
    </div>
  );
}
