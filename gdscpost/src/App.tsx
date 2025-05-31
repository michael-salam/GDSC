import { MdOutlineAddBox } from "react-icons/md";
import Header from "./components/Header";
import PostCard from "./components/PostCard";

function App() {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      profilePicture: "/profile-picture.jpg",
      time: Date.now() + 1000 * 60 * 60, // 1 hour later
      content: "This is a sample post content."
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePicture: "/profile-picture.jpg",
      time: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
      content: "Another post with some interesting content."
    },
    {
      id: 3,
      name: "Alice Johnson",
      profilePicture: "/profile-picture.jpg",
      time: Date.now() - 1000 * 60 * 60 * 24 * 7, // 1 week ago
      content: "Here's a third post to showcase the feed."
    }
  ]
  return (
    <div className="min-h-screen bg-slate-200">
      <Header />
      <main className="container mx-auto p-4 max-w-[500px]">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Feed</h1>
          <button>
            <MdOutlineAddBox className="text-blue-600 text-2xl cursor-pointer" />
          </button>
        </div>
        <div>
          {
            posts.map(({ id, name, profilePicture, content, time }) => (
              <PostCard id={id} name={name} profilePicture={profilePicture} content={content} time={time} key={id} />
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;
