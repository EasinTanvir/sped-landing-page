import { useState, useEffect } from "react";

const useImagePreview = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (newFile) => {
    setFile(newFile);

    if (newFile) {
      const url = URL.createObjectURL(newFile);
      setPreviewUrl(url);
    }
  };

  const resetImage = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return { file, previewUrl, handleFileChange, resetImage };
};

export default useImagePreview;
