// import React, { useState } from 'react';

// const TemplateData = ({ initialData }) => {
//   const [templateData, setTemplateData] = useState(initialData);

//   const updateCaptionText = (newText) => {
//     setTemplateData((prevData) => ({
//       ...prevData,
//       caption: { ...prevData.caption, text: newText },
//     }));
//   };

//   const updateCTAText = (newText) => {
//     setTemplateData((prevData) => ({
//       ...prevData,
//       cta: { ...prevData.cta, text: newText },
//     }));
//   };

//   const updateBackgroundColor = (newColor) => {
//     setTemplateData((prevData) => ({
//       ...prevData,
//       backgroundColor: newColor,
//     }));
//   };

//   return (
//     <div>
//       {/* Use templateData here for displaying initial values or passing to other components */}
//       <input
//         type="text"
//         placeholder="Caption Text"
//         value={templateData.caption.text}
//         onChange={(e) => updateCaptionText(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="CTA Text"
//         value={templateData.cta.text}
//         onChange={(e) => updateCTAText(e.target.value)}
//       />
//       <input
//         type="color"
//         value={templateData.backgroundColor || '#0369A1'}
//         onChange={(e) => updateBackgroundColor(e.target.value)}
//       />
//     </div>
//   );
// };

// export default TemplateData;
