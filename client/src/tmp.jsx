import React             from "react";
import SittingBar        from "./components/SettingBar"
import Toolbar           from "./components/Toolbar"
import Canvas            from "./components/Canvas"

const Temp = () => {
  return (
    <div>
      <Toolbar/>
      <SittingBar/>
      <Canvas/>
    </div>
  );
}

export default Temp;