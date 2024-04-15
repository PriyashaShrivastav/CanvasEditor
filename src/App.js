// import FileSelect from "./components/FileSelect";
// import TextField from '@material-ui/core/TextField';
// import React, { useState } from 'react';
// import ColorPicker from 'react-color'; 
// import TemplateData from './TemplateData';
// import CanvasEditor from './components/CanvasEditor';
// function App() {

//   return (
//     <div className="flex justify-center items-center h-screen">
//     <div>
//       <CanvasEditor />
//     </div>
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//         <div>
//           <h1 className="text-2xl font-bold mb-4">Ad Customization</h1>
//           <h4 className="text-gray-500 mb-4">Customize your ad and get the templates accordingly</h4>
//         </div>
//         <div>
//           <FileSelect />
//         </div>+
//         <div className="flex items-center my-4">
//           <div className="flex-1 h-0.5 bg-gray-300"></div>
//           <div className="flex mx-4 text-gray-500">Edit Contents</div>
//           <div className="flex-1 h-0.5 bg-gray-300"></div>
//         </div>
//         <div>
//         <TextField id="standard-basic" label="Ad Content" variant="standard" style={{width: '380px'}}/>
//         </div>
//         <div className="pt-[20px]">
//         <TextField id="standard-basic" label="CTA" variant="standard" style={{width: '380px'}}/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import CanvasEditor from './components/CanvasEditor/CanvasEditor';

const App = () => {
  return (
    <div>
      <CanvasEditor />
    </div>
  );
};

export default App;