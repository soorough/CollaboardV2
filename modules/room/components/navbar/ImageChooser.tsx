import React, { useEffect } from "react";
import useMoveImage from "../../hooks/useMoveImage";
import optimizeImage from "../../../../common/lib/optimizeImage";

const ImageChooser = () => {
  const { setMoveImage } = useMoveImage();

    useEffect(() => {
      const handlePaste = (e: ClipboardEvent) => {
        const items = e.clipboardData?.items

        if(items){
            for(const item of items){
                if(item.type.includes("image")){
                    const file = item.getAsFile();
                    if (file) optimizeImage(file, (uri) => setMoveImage(uri));
                }
            }
        }
      }
    
      document.addEventListener('paste', handlePaste)
      return () => {
        document.removeEventListener('paste', handlePaste)
      }
    }, [setMoveImage])
    

  const handleImageInput = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.click();

    fileInput.addEventListener("change", () => {
      if (fileInput && fileInput.files) {
        const file = fileInput.files[0];
        optimizeImage(file, (uri) => setMoveImage(uri));
      }
    });
  };
  return (
    <>
      <button className="cursor-pointer hover:20" onClick={handleImageInput}>
        <img
          className="h-[21.1px] w-[24.4px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/addimagesbutton.svg"
        />
      </button>
    </>
  );
};

export default ImageChooser;
