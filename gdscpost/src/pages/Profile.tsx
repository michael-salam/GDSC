import { useState } from "react";
import EditProfileForm from "../components/EditProfileForm";
import PostCard from "../components/PostCard";

interface ProfileData {
  name: string;
  bio: string;
  profilePicture: string;
}

interface ProfileProps {
  profileData: ProfileData;
  setProfileData: (data: ProfileData) => void;
}

const Profile = ({ profileData, setProfileData }: ProfileProps) => {
  const [isShowingEditForm, setIsShowingEditForm] = useState(false);

  const userPosts = [
    {
      id: 1,
      name: profileData.name,
      time: Date.now() - 1000 * 60 * 60,
      content: "This is the content of post 1.",
      profilePicture: profileData.profilePicture
    },
    {
      id: 2,
      name: profileData.name,
      time: Date.now() - 1000 * 60 * 60 * 2,
      content: "This is the content of post 2.",
      profilePicture: profileData.profilePicture
    },
    {
      id: 3,
      name: profileData.name,
      time: Date.now() - 1000 * 60 * 60 * 3,
      content: "This is the content of post 3.",
      profilePicture: profileData.profilePicture
    }
  ]

  return (
    <main className="container flex gap-10 h-full">
      {isShowingEditForm && (
        <EditProfileForm
          profileData={profileData}
          setProfileData={setProfileData}
          setIsShowingEditForm={setIsShowingEditForm}
        />
      )}
      <head>
        <title>Profile</title>
      </head>
      <div className="mt-4 p-8 max-w-[50%] h-full rounded-md border border-gray-300 text-center bg-white shadow-sm">
        <img
          className="size-20 mb-2 rounded-full mx-auto"
          src={profileData.profilePicture}
          alt="Profile picture"
        />
        <p className="font-semibold">{profileData.name}</p>
        <p className="text-sm text-gray-700 max-w-[50ch] mx-auto">
          {profileData.bio}
        </p>
        <button
          onClick={() => setIsShowingEditForm(true)}
          className="bg-blue-700 mt-4 rounded-md text-white font-medium px-4 py-2"
        >
          Edit profile
        </button>
      </div>
      <div className="mt-4 w-full h-full">
        <h1 className="text-2xl font-bold">Posts</h1>
        {userPosts.map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            name={post.name}
            time={post.time}
            content={post.content}
            profilePicture={post.profilePicture}
            owner={true}
          />
        ))}
      </div>
    </main>
  );
};

export default Profile;
