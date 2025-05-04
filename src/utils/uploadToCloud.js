const uploadToCloud = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "your_upload_preset"); // Replace with Cloudinary preset

  //   const res = await fetch(
  //     "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   );

  //if (!res.ok) throw new Error("Image upload failed");

  //const data = await res.json();
  //return data.secure_url; // Return the image URL
  return "test";
};

export default uploadToCloud;
