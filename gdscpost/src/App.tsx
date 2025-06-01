import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";

interface ProfileData {
  name: string;
  bio: string;
  profilePicture: string;
}

const App = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Michael Salam",
    bio: "200lvl Computer science student at the University of Lagos. Passionate about software development and open source.",
    profilePicture: "/profile-picture.jpg",
  });

  return (
    <Router>
      <div className="min-h-screen">
        <Header profilePicture={profileData.profilePicture} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <Profile
                profileData={profileData}
                setProfileData={setProfileData}
              />
            }
          />
          <Route path="*" element={<div>Not found!</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
