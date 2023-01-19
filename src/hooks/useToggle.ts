import { useState } from "react";

export default function useToggle(
  defaultValue: boolean
): [boolean, (val?: boolean) => void] {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(val?: boolean) {
    if (typeof val === "boolean") {
      setValue(val);
    } else {
      setValue((pre) => !pre);
    }
  }

  return [value, toggleValue];
}
