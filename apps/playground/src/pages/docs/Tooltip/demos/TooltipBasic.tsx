import { Tooltip, Button } from '@beast-ui/core';

export default function TooltipBasic() {
  return (
    <div>
      <Tooltip content="Basic Tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
}
