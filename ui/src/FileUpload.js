import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setPreviewUrl(URL.createObjectURL(e.target.files[0]));
  };

  const fileUploadHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    try {
      const response = await axios.post('/upload', formData);
      console.log(response);
      alert('File uploaded successfully');
    } catch (error) {
      console.error(error);
      alert('File upload failed');
    }
  };

  return (
    <div>
      <form onSubmit={fileUploadHandler}>
        <input type="file" onChange={fileSelectedHandler} />
        {previewUrl && <img src={previewUrl} alt="Preview" />}
        <button type="submit" disabled={!selectedFile}>
          Upload
        </button>
      </form>
    </div>
  );
};



export default FileUpload

