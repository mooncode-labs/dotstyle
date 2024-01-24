'use client'
import React, { useState } from 'react';

const FileSelectComponent = ({disabled}) => {
  const [selectedFileName, setSelectedFileName] = useState('Select File');

  const updateSelectedFileName = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedFileName(selectedFile ? selectedFile.name : 'Select File');
  };

  return (
    <div className={`input !w-60`} >
      <div className='flex justify-between w-full' id="selectedFileName">{selectedFileName}
      <button
        role="button"
        onClick={() => document.getElementById('fileInput').click()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="w-5 h-5 hover:-translate-y-1 duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
          />
        </svg>
      </button></div>
    
      <label htmlFor="fileInput" className="sr-only">
        Choose a file
      </label>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        disabled={disabled}
        onChange={updateSelectedFileName}
      />

      
    </div>
  );
};

export default FileSelectComponent;

