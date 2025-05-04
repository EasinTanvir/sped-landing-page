"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImageDropZone = ({ handleFileChange }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      handleFileChange(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".png", ".jpg"] },
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-slate-400 p-4 border-dashed cursor-pointer text-sm text-slate-400 flex justify-center items-center"
    >
      <input {...getInputProps()} type="file" name="" id="" />
      {isDragActive ? <p>Drop the image here...</p> : <p>Drag and Drop Here</p>}
    </div>
  );
};

export default ImageDropZone;
