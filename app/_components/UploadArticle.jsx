"use client";
import { useState } from "react";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
// import ImageUploading from "react-images-uploading";

export default function UploadArticle() {
  //   const [images, setImages] = useState([]);
  //   const maxNumber = 69;

  //   const onChange = (imageList, addUpdateIndex) => {
  //     // data for submit
  //     console.log('imageList, addUpdateIndex');
  //     setImages(imageList);
  //   };
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  function getImageFileObject(imageFile) {
    console.log({ imageFile });
  }

  function runAfterImageDelete(file) {
    console.log({ file });
    setImage("");
  }

  return (
    <form className=" flex flex-col gap-y-5">
      <div>
        <label
          htmlFor="title"
          className=" font-semibold tracking-wider uppercase"
        >
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" outline-none block px-2 w-full h-[40px] rounded-md mt-1 bg-transparent border border-dark"
          type="text"
          id="title"
        />
      </div>
      <div>
        <label
          htmlFor="title"
          className=" font-semibold tracking-wider uppercase"
        >
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="cars"
          id="article-category"
          className=" block px-2 w-full h-[40px] rounded-md mt-1 bg-transparent border border-dark"
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="new tokens">New Tokens</option>
          <option value="top projects">Top Projects</option>
          <option value="new crypto">New Crypto</option>
          <option value="politics and crypto">Politics and Crypto</option>
          <option value="new tech">New Tech</option>
          <option value="defi">Defi</option>
          <option value="Events">Events</option>
        </select>
      </div>
      <div>
        <label className=" font-semibold tracking-wider uppercase">
          Add Image
        </label>
        <ImageUploader
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: "transparent",
            border: "1px solid black",
            borderRadius: "10px",
            marginTop: "4px",
          }}
          onFileAdded={(img) => getImageFileObject(img)}
          onFileRemoved={(img) => runAfterImageDelete(img)}

          //   deleteIcon={<button>remove</button>}
        />
      </div>
      <div>
        <label
          htmlFor="content"
          className=" font-semibold tracking-wider uppercase"
        >
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className=" outline-none py-3 block px-2 w-full h-[200px] rounded-md mt-1 bg-transparent border border-dark"
          type="text"
          id="content"
        ></textarea>
      </div>
      <div>
        <button className=" bg-primary w-full text-white h-[50px] rounded-lg">
          Post Article
        </button>
      </div>

      {/* <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={() => console.log("clicked")}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img
                    src={image["data_url"]}
                    alt="image"
                    className=" w-24 h-24"
                  />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div> */}
    </form>
  );
}
