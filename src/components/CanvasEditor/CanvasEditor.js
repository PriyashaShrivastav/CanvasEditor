import React, { useState, useRef } from 'react';
import Canvas from './Canvas';
import ColorPicker from './ColorPicker';
import TextInput from './TextInput';

const CanvasEditor = () => {
  const [templateData, setTemplateData] = useState(JSON.parse(templateDataJSON));
  const [backgroundColor, setBackgroundColor] = useState('#0369A1');
  const [caption, setCaption] = useState(templateData.caption.text);
  const [cta, setCTA] = useState(templateData.cta.text);
  const [recentColors, setRecentColors] = useState([]);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleCaptionChange = (newCaption) => {
    setCaption(newCaption);
  };

  const handleCTAChange = (newCTA) => {
    setCTA(newCTA);
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex);
    setRecentColors((prevColors) => [color.hex, ...prevColors.slice(0, 4)]);
    setShowColorPicker(false);
  };

  const toggleColorPicker = () => {
    setShowColorPicker((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
  <div className=" bg-white shadow-md rounded-lg p-8 w-full max-w-md">
    <Canvas
      templateData={templateData}
      backgroundColor={backgroundColor}
      caption={caption}
      cta={cta}
    />
    <div className="mt-4">
      <TextInput
        caption={caption}
        cta={cta}
        onCaptionChange={handleCaptionChange}
        onCTAChange={handleCTAChange}
      />
    </div>
    <div className="mt-4">
      <ColorPicker
        backgroundColor={backgroundColor}
        recentColors={recentColors}
        showColorPicker={showColorPicker}
        onColorChange={handleColorChange}
        toggleColorPicker={toggleColorPicker}
      />
    </div>
  </div>
</div>
  );
};

const templateDataJSON = `{
  "caption": {
    "text": "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
    "position": {
      "x": 50,
      "y": 50
    },
    "max_characters_per_line": 31,
    "font_size": 44,
    "alignment": "left",
    "text_color": "#FFFFFF"
  },
  "cta": {
    "text": "Shop Now",
    "position": {
      "x": 190,
      "y": 320
    },
    "text_color": "#FFFFFF",
    "background_color": "#000000"
  },
  "image_mask": {
    "x": 56,
    "y": 442,
    "width": 970,
    "height": 600
  },
  "urls": {
    "mask": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png",
    "stroke": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png",
    "design_pattern": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png"
  }
}`;

export default CanvasEditor;