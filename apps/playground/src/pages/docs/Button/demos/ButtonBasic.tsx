import { Button, Flex } from '@beast-ui/core';

export default function ButtonBasic() {
  return (
    <Flex gap="4">
      <Button variant="filled" color="primary">Primary</Button>
      <Button variant="outlined" color="primary">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
    </Flex>
  );
}
