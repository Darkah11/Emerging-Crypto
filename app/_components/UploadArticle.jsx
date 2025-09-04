"use client";
import { useState, useEffect } from "react";
import Loader from "./Loader";

import {
  getAllPosts,
  deletePost,
  createPost,
  updatePost,
} from "../../utils/supabase";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
// import ImageUploading from "react-images-uploading";

export default function UploadArticle() {

   const [posts, setPosts] = useState([]);

   const [isEditing, setIsEditing] = useState(false);
   const [currentPostId, setCurrentPostId] = useState(null);
   const [loading, setLoading] = useState(true);
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [category, setCategory] = useState([]);
   const [selectedImage, setSelectedImage] = useState(null);
   const [imagePreview, setImagePreview] = useState("");
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [postToDelete, setPostToDelete] = useState(null);

   useEffect(() => {
     const fetchPosts = async () => {
       try {
         const posts = await getAllPosts();
         setPosts(posts);
       } catch (err) {
         console.error("Error fetching posts:", err);
       } finally {
         setLoading(false);
       }
     };

     fetchPosts();
   }, []);

   const handlePhotoChange = (e) => {
     setImagePreview(URL.createObjectURL(e.target.files[0]));
     setSelectedImage(e.target.files[0]); // Store File object directly
   };

   const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);
     try {
     const postData = { title, body, categories: category };


       if (isEditing) {
         await updatePost(currentPostId, {
           ...postData,
           imageFile: selectedImage,
         });
       } else {
         await createPost({
           ...postData,
           imageFile: selectedImage,
         });
       }

       setPosts(await getAllPosts());
       setLoading(false);
       resetForm();
     } catch (err) {
       console.error("Error saving post:", err.response?.data || err.message);
       alert(err.response?.data?.message || "Error saving post");
     }
   };
   const handleEdit = (post) => {
     setTitle(post.title), setBody(post.body), setCategory(post.category || []);


       setSelectedImage(null);

     setImagePreview(post.image_url || "");
     setCurrentPostId(post.id);
     setIsEditing(true);
   };

   const confirmDelete = (id) => {
     setPostToDelete(id);
     setShowDeleteModal(true);
   };

   const handleConfirmDelete = async () => {
     try {
       await deletePost(postToDelete);
       setPosts(posts.filter((post) => post.id !== postToDelete));
       setShowDeleteModal(false);
     } catch (err) {
       console.error("Error deleting post:", err);
     }
   };
   const resetForm = () => {
     setTitle("");
     setBody("");
     setCategory([]);
     setSelectedImage(null);
     setImagePreview("");
     setIsEditing(false);
     setCurrentPostId(null);
   };

   if (loading) return <Loader />;

  return (
    <div className="">
      <h2 className="text-xl font-bold text-eco-green mb-4">
        {isEditing ? "Edit Post" : "Create New Post"}
      </h2>

      <section className=" bg-gray-200   max-w-[370px] mx-auto px-5 py-7">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-y-5">
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
              name="title"
              required
            />
          </div>
          
          <div>
            <label className="font-semibold tracking-wider uppercase">
              Categories
            </label>
            <div className="flex flex-col gap-2 mt-2">
              {[
                "new tokens",
                "top projects",
                "new crypto",
                "politics and crypto",
                "new tech",
                "defi",
                "Events",
              ].map((cat) => (
                <label key={cat} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={category.includes(cat)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory([...category, cat]);
                      } else {
                        setCategory(category.filter((c) => c !== cat));
                      }
                    }}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className=" font-semibold tracking-wider uppercase">
              Add Image
            </label>
            {/*<ImageUploader
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
          /> */}

            <div className="flex flex-col items-center gap-4 w-full">
              <input
                type="file"
                name="image"
                id="postImage"
                className="hidden"
                onChange={handlePhotoChange}
                accept="image/jpg, image/png, image/jpeg"
              />
              <label
                htmlFor="postImage"
                className={`flex w-full max-w-xs cursor-pointer flex-col items-center gap-2 rounded-xl bg-gray-100 dark:bg-gray-700 bg-cover bg-center p-4 ${
                  imagePreview ? "h-48" : "h-32"
                }`}
                style={{
                  backgroundImage: imagePreview
                    ? `linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url(${imagePreview})`
                    : "",
                }}
              >
                {!imagePreview && (
                  <span className="text-sm font-semibold text-eco-green">
                    + Upload Image
                  </span>
                )}
              </label>
              <p className="text-xs text-gray-500  text-center max-w-xs">
                Image must be below 20MB. Use PNG or JPG format.
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor="content"
              className=" font-semibold tracking-wider uppercase"
            >
              Content
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className=" outline-none py-3 block px-2 w-full h-[200px] rounded-md mt-1 bg-transparent border border-dark"
              type="text"
              id="content"
              name="content"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className=" bg-primary w-full text-white h-[50px] rounded-lg"
            >
              {isEditing ? "Update Post" : "Publish Post"}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            )}
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
      </section>
      <section>
        <div className=" max-w-[370px] bg-blue-200 px-5 py-10 mx-auto mt-24">
          <h2 className=" text-2xl text-dark font-semibold">Your Posts</h2>
          {posts.length === 0 ? (
            <p className="text-gray-900 ">
              No posts yet. Create your first post!
            </p>
          ) : (
            <div className=" mt-5 flex flex-col gap-y-10">
              {posts.map((post, index) => (
                <div key={index} className=" border-b border-gray-900 pb-5">
                  <h3 className=" text-black font-medium text-lg">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {post.category?.join(", ")} •{" "}
                    {new Date(post.created_at).toLocaleDateString()}
                  </p>

                  <div className=" flex flex-row gap-x-5 mt-3">
                    <button
                      onClick={() => handleEdit(post)}
                      className=" px-7 py-[5px] bg-primary rounded-md text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => confirmDelete(post.id)}
                      className=" px-7 py-[5px] bg-red-600 rounded-md text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-700 opacity-90  flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
            <p className="text-gray-600 mb-6">
              Do you really want to delete this post? This action cannot be
              undone.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
