export const posts = [
    {
      id: 1,
      name: "John Doe",
      profilePicture: "/profile-picture.jpg",
      time: Date.now() + 1000 * 60 * 60, // 1 hour later
      content: "This is a sample post content.",
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePicture: "/profile-picture.jpg",
      time: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
      content: "Another post with some interesting content.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      profilePicture: "/profile-picture.jpg",
      time: Date.now() - 1000 * 60 * 60 * 24 * 7, // 1 week ago
      content: "Here's a third post to showcase the feed.",
    },
  ];