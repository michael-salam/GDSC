import { useState} from "react";

const PostForm = ({
  setIsDisplayingPostForm,
  setPosts,
  edit=false
}: any) => {
    const [postContent, setPostContent] = useState("");

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if(edit){
    alert("Edit functionality is not implemented yet.");
    setPostContent("");
    setIsDisplayingPostForm(false);
  }

    if (!postContent) {
        alert("Please enter some content for your post.");
        return
    }

    const newPost = {
        id: Date.now(), // Unique ID based on current timestamp
      name: "John Doe",
      profilePicture: "/profile-picture.jpg",
      time: Date.now(),
      content: postContent,
    }
    
    setPosts((prevPosts:any) => [...prevPosts, newPost]);
    setPostContent(""); // Clear the input field
    setIsDisplayingPostForm(false); // Close the form
}
  return (
    <>
      <div
        onClick={() => setIsDisplayingPostForm(false)}
        className="fixed inset-0 bg-black/80"
      />
      
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">{ edit ? "Edit Post" : "Add New Post" }</h2>
            <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="What's on your mind?"
              rows={4}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded mr-2 cursor-pointer"
              >
                {edit ? "Edit" : "Post"}
              </button>
              <button
                onClick={() => setIsDisplayingPostForm(false)}
                type="button"
                className="bg-gray-300 cursor-pointer text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PostForm;
