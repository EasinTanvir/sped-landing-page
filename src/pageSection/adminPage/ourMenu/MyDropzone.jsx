import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const MyDropzone = ({ index, setImageFile }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setImageFile(index, acceptedFiles[0]);
      }
    },
    [index, setImageFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-400 p-2 text-center cursor-pointer rounded-md"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here...</p>
      ) : (
        <p>Drag & drop an image here, or click to select</p>
      )}
    </div>
  );
};

export default MyDropzone;
