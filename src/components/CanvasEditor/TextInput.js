import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ caption, cta, onCaptionChange, onCTAChange }) => {
  const handleCaptionChange = (e) => {
    onCaptionChange(e.target.value);
  };

  const handleCTAChange = (e) => {
    onCTAChange(e.target.value);
  };

  return (
    <div>
       <div className="flex items-center my-4">
           <div className="flex-1 h-0.5 bg-gray-300"></div>
           <div className="flex mx-4 text-gray-500">Edit Contents</div>
           <div className="flex-1 h-0.5 bg-gray-300"></div>
         </div>
         <div>
         <TextField 
         id="standard-basic" 
         type="text"
         value={caption}
         onChange={handleCaptionChange} 
         label="Ad Content" 
         variant="standard" 
         style={{width: '380px'}}/>
         </div>

         <div className="pt-[20px]">
         <TextField 
         id="standard-basic" 
         type="text"
         value={cta}
         onChange={handleCTAChange}
         label="CTA" 
         variant="standard" 
         style={{width: '380px'}}/>
         </div>

    {/* <div className="mt-4">
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
</div> */}
    </div>
  );
};

export default TextInput;

