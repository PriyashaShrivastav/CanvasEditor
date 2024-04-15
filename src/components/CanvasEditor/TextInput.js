import React from 'react';

const TextInput = ({ caption, cta, onCaptionChange, onCTAChange }) => {
  const handleCaptionChange = (e) => {
    onCaptionChange(e.target.value);
  };

  const handleCTAChange = (e) => {
    onCTAChange(e.target.value);
  };

  return (
    <div>
      
    <div className="mt-4">
  <label className="block">
    <span className="font-bold">Caption:</span>
    <input
      type="text"
      value={caption}
      onChange={handleCaptionChange}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
    />
  </label>
</div>
<div className="mt-4">
  <label className="block">
    <span className="font-bold">CTA:</span>
    <input
      type="text"
      value={cta}
      onChange={handleCTAChange}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
    />
  </label>
</div>
    </div>
  );
};

export default TextInput;

