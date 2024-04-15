import React, { useRef, useState } from "react";

const FileSelect = () => {
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />
      <button
        className="w-[400px] h-[60px] text-[16px] font-medium flex flex-col items-center justify-center gap-[15px] text-gray-500 bg-white border-[1.5px] border-black rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out hover:text-[#8A3FFC] hover:bg-white"
        onClick={onChooseFile}
      >
        <span>
          Change the ad creative image.
          <span className="pl-[19px] hover:underline cursor-pointer text-blue-700">
            select File
          </span>
        </span>
      </button>
      {selectedFile && (
        <div className="flex items-center justify-between bg-[#f3ecff] border border-[#e8d9fe] rounded-[20px] mt-[20px]">
          <p>{selectedFile.name}</p>
          <button onClick={removeFile}>
            <span className="material-symbols-rounded">delete</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FileSelect;

