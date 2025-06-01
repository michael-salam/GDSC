import { useState, type ChangeEvent } from "react";
import { FaX } from "react-icons/fa6";

interface ProfileData {
  name: string;
  bio: string;
  profilePicture: string;
}

interface EditProfileFormProps {
  profileData: ProfileData;
  setProfileData: (data: ProfileData) => void;
  setIsShowingEditForm: (show: boolean) => void;
}

const EditProfileForm = ({
  profileData,
  setProfileData,
  setIsShowingEditForm,
}: EditProfileFormProps) => {
  const [formData, setFormData] = useState({
    name: profileData.name,
    bio: profileData.bio,
    profilePicture: profileData.profilePicture,
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Create a preview URL for the image
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profilePicture: imageUrl });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.bio) {
      alert("Please fill in all fields.");
      return;
    }

    // Update the profile data in the parent component
    setProfileData(formData);
    setIsShowingEditForm(false);
  };

  return (
    <>
      <div
        onClick={() => setIsShowingEditForm(false)}
        className="fixed inset-0 bg-black/80"
      />


      <form className="fixed tra bg-white" onSubmit={handleSubmit}>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="border-b-[.4px] px-4 py-2">
                <FaX onClick={() => setIsShowingEditForm(false)} className="ml-auto cursor-pointer"/>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border border-gray-300 w-full rounded-sm p-2"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="bio"
              >
                Bio
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                className="border border-gray-300 w-full rounded-sm p-2"
                name="bio"
                id="bio"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="profile_picture"
              >
                Profile picture
              </label>
              {formData.profilePicture && (
                <div className="mb-4">
                  <img
                    src={formData.profilePicture}
                    alt="Profile Preview"
                    className="w-32 h-32 object-cover rounded-full mb-2"
                  />
                </div>
              )}
              <input
                onChange={handleFileChange}
                className="border border-gray-300 w-full rounded-sm p-2"
                type="file"
                accept="image/*"
                name="profile_picture"
                id="profile_picture"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
              >
                Submit
              </button>
              {/* <button
                onClick={() => setIsShowingEditForm(false)}
                type="button"
                className="bg-gray-300 cursor-pointer text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfileForm;
