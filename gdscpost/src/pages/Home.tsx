import { MdOutlineAddBox } from "react-icons/md";
import PostCard from "../components/PostCard";
import { useState } from "react";
import PostForm from "../components/PostForm";

function Home() {
  // state
  const [isDisplayingAddPostForm, setIsDisplayingAddPostForm] = useState(false);
  const [posts, setPosts] = useState([]);

  return (
    <>
      {isDisplayingAddPostForm && (
        <PostForm
          setPosts={setPosts}
          setIsDisplayingPostForm={setIsDisplayingAddPostForm}
        />
      )}

      <main className="container mx-auto p-4 max-w-[500px]">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Feed</h1>
          <button onClick={() => setIsDisplayingAddPostForm(true)}>
            <MdOutlineAddBox className="text-blue-600 text-2xl cursor-pointer" />
          </button>
        </div>
        <div>
          {posts.map(({ id, name, profilePicture, content, time }) => (
            <PostCard
              id={id}
              name={name}
              profilePicture={profilePicture}
              content={content}
              time={time}
              key={id}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
