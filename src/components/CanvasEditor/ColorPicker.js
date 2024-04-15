import React, { useState, useRef, useEffect } from 'react';

const ColorPicker = ({
  backgroundColor,
  recentColors,
  onColorChange,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
        setShowColorPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [colorPickerRef]);

  const handleColorPickerMouseEnter = () => {
    setShowColorPicker(true);
  };

  const handleColorPickerMouseLeave = () => {
    setShowColorPicker(false);
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    onColorChange({ hex: color });
    setShowColorPicker(false);
  };

  return (
    <div
      ref={colorPickerRef}
      className="relative inline-block"
      onMouseEnter={handleColorPickerMouseEnter}
      onMouseLeave={handleColorPickerMouseLeave}
    >
      <input
        type="color"
        value={backgroundColor}
        className="w-12 h-12 rounded-full cursor-pointer focus:outline-none"
        onChange={handleColorChange}
      />
      
      {showColorPicker && (
        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="grid grid-cols-7 gap-2 p-2">
            {recentColors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => onColorChange({ hex: color })}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
