import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";
import { compressImage } from "@/lib/image-compressor/image-compressor";

// type FileUploaderProps = {
//   fieldChange: (FILES: File[]) => void;
//   mediaUrl: string;
// };

const FileUploader = () => {
  // const [file, setFile] = useState<File[]>([]);
  // const [fileUrl, setfileUrl] = useState(mediaUrl);

  // const onDrop = useCallback(
  //   (acceptedFiles: FileWithPath[]) => {
  //     setFile(acceptedFiles);
  //     fieldChange(acceptedFiles);
  //     setfileUrl(URL.createObjectURL(acceptedFiles[0]));
  //   },
  //   [file]
  // );

  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   accept: {
  //     "image/*": [".png", ".jpeg", ".jpg"],
  //   },
  // });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      try {
        const compressedFile = await compressImage(file);
        setSelectedFile(compressedFile);
        // Now you can upload the compressedFile to your server or handle it as needed
      } catch (error) {
        console.error("Error compressing the image:", error);
      }
    }
  };

  return (
    <div className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer">
      <input
        type="file"
        onChange={handleFileChange}
        className="cursor-pointer"
      />
      {selectedFile ? (
        <>
          <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
            <img
              src={selectedFile.name}
              alt="image"
              className="file_uploader-img"
            />
          </div>
          <p className="file_uploader-label">Click or drag photo to replace</p>
        </>
      ) : (
        <div className="file_uploader-box">
          <img
            src="/assets/icons/file-upload.svg"
            width={96}
            height={77}
            alt="file-upload"
          />
          <h3 className="base-medium text-light-2 mb-2 mt-6">
            Drag photo here
          </h3>
          <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>

          <Button className="shad-button_dark_4">Select from computer</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
