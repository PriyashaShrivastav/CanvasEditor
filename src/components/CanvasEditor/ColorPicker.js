import React from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({
  backgroundColor,
  recentColors,
  showColorPicker,
  onColorChange,
  toggleColorPicker,
}) => {
  return (
    <div className="mt-4">
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={toggleColorPicker}
  >
    {showColorPicker ? 'Close Color Picker' : 'Open Color Picker'}
  </button>
  {showColorPicker && (
    <div className="mt-4">
      <ChromePicker color={backgroundColor} onChange={onColorChange} />
    </div>
  )}
  <div className="mt-4 flex flex-wrap">
    {recentColors.map((color, index) => (
      <div
        key={index}
        className="w-8 h-8 mx-1 my-1 rounded-full cursor-pointer"
        style={{ backgroundColor: color }}
        onClick={() => onColorChange({ hex: color })}
      />
    ))}
  </div>
</div>
  );
};

export default ColorPicker;

