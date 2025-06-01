import { useState } from "react";
import EditProfileForm from "../components/EditProfileForm";

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

  return (
    <main>
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
      <div className="mt-20 p-8 max-w-[50%] mx-auto rounded-md border border-gray-300 text-center bg-white shadow-sm">
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
    </main>
  );
};

export default Profile;
