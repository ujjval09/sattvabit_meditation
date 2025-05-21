import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaSignOutAlt, FaBell, FaLock } from "react-icons/fa";
import axios from "axios"; // ✅ Import axios

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    profilePic: "/profile.jpg",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin"); // Redirect if not logged in
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5001/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(response.data);
      setUpdatedName(response.data.name);
      setUpdatedEmail(response.data.email);

      localStorage.setItem("userName", response.data.name);
      localStorage.setItem("userEmail", response.data.email);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "http://localhost:5001/api/profile",
        { name: updatedName, email: updatedEmail },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Profile updated successfully!");
      setIsEditing(false);
      fetchUserProfile();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Update failed!");
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return; // Do nothing if no file is selected

    setSelectedFile(file);

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("profilePic", file);

      const response = await axios.put(
        `http://localhost:5001/api/profile/${user._id}/photo`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser((prevUser) => ({
        ...prevUser,
        profilePic: response.data.profilePic,
      }));
      alert("Profile picture uploaded successfully!");
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      alert("Profile picture upload failed!");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen px-4"
      style={{
        backgroundImage: `url("/new.png")`, // Path to new.png placed in public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>

      {/* Profile Picture */}
      <label htmlFor="file-input">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full shadow-md mb-3 cursor-pointer"
        />
      </label>
      <input
        id="file-input"
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* User Info */}
      {isEditing ? (
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="border p-2 rounded w-64 mb-2"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="email"
            className="border p-2 rounded w-64 mb-2"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            onClick={handleUpdateProfile}
          >
            Save Changes
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-gray-700">{user.name}</h3>
          <p className="text-gray-500">{user.email}</p>
        </>
      )}

      {/* Settings Options */}
      <div className="mt-6 w-80 bg-white p-4 rounded-xl shadow-md space-y-4">
        <button
          className="w-full flex items-center p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
          onClick={() => setIsEditing(true)}
        >
          <FaUserEdit className="mr-3" /> Edit Profile
        </button>
        <button className="w-full flex items-center p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
          <FaLock className="mr-3" /> Change Password
        </button>
        <button className="w-full flex items-center p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
          <FaBell className="mr-3" /> Notification Settings
        </button>
      </div>

      {/* Logout Button */}
      <button
        className="mt-6 w-80 bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 flex items-center justify-center"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="mr-2" /> Logout
      </button>
    </div>
  );
};

export default Profile;
