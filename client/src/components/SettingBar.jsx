import React from "react";
import toolState from "../store/toolState";

const SettingBar = () => {
  return (
    <div className="setting-bar">
      <label htmlFor="line-width">Line thickness</label>
      <input 
        onChange={(e) => toolState.setLineWidth(e.target.value)}
        id="line-width" 
        type="number" 
        min={1} 
        max={50} 
        defaultValue={1} 
        style={{margin: '0 10px'}}/>
      <label htmlFor="stroke-color">stroke color</label>
      <input 
        onChange={(e) => toolState.setStrokeColor(e.target.value)}
        id="stroke-color" 
        type="color" />
    </div>
  );
}

export default SettingBar;
