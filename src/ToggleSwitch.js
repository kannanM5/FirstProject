import React, { useState } from "react";
import Switch from "react-switch";

export default function ToggleSwitch() {
  const [active, inActive] = useState(true);

  const handleChange = () => {
    inActive(!active);
  };
  return (
    <div>
      <label>
        <Switch
          onChange={handleChange}
          checked={active}
          checkedIcon={<div>On</div>}
          uncheckedIcon={<div>Off</div>}
        />
      </label>
    </div>
  );
}
