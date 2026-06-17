import { useToast, Button } from '@beast-ui/core';

export default function ToastBasic() {
  const toast = useToast();
  return (
    <div>
      <Button onClick={() => toast('Hello')}>Show Toast</Button>
    </div>
  );
}
