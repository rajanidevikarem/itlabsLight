import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here you can send the file to your server using fetch or any other method
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {selectedFile && (
        <div>
          <h3>Uploaded File</h3>
          <p>Filename: {selectedFile.name}</p>
          <a href={URL.createObjectURL(selectedFile)} download>
            Download File
          </a>
        </div>
      )}
    </div>
  );
}

export default FileUpload;