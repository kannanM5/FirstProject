import React, { useState } from "react";
import Switch from "react-switch";

export default function ToggleSwitch() {
  const [active, inActive] = useState(false);

  const handleChange = () => {
    inActive(!active);
  };
  return (
    <div>
      <label>
        <Switch
          onChange={handleChange}
          checked={active}
          checkedIcon={<div>Active</div>}
          uncheckedIcon={<div>InActive</div>}
        />
      </label>
    </div>
  );
}
