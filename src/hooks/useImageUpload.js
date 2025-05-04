import { useState, useEffect } from "react";

const useImageUpload = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const setImageFile = (index, file) => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);

    const newPreviews = [...previews];
    newPreviews[index] = URL.createObjectURL(file);
    setPreviews(newPreviews);
  };

  const resetImageFile = (index) => {
    const newFiles = [...files];
    const newPreviews = [...previews];
    URL.revokeObjectURL(newPreviews[index]);
    newFiles[index] = null;
    newPreviews[index] = null;
    setFiles(newFiles);
    setPreviews(newPreviews);
  };

  useEffect(() => {
    return () => previews.forEach((url) => url && URL.revokeObjectURL(url));
  }, [previews]);

  return {
    files,
    previews,
    setImageFile,
    resetImageFile,
  };
};

export default useImageUpload;
