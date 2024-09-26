import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

export const Checkbox = ({ label, ...props }: { label: string } & RadixCheckbox.CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex gap-1 items-center">
      <p className="text-sm text-muted-foreground">{label}</p>
      <RadixCheckbox.Root
        checked={checked}
        onCheckedChange={() => setChecked(!checked)}
        {...props}
        className={`w-4 h-4 border shadow border-muted-foreground/50 rounded-sm bg-${
          checked ? 'primary' : 'card'
        } transition-colors ${!checked && 'hover:bg-muted hover:border-primary'}`}
      >
        <RadixCheckbox.Indicator>{checked === true && <CheckIcon color="white" />}</RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </div>
  );
};
