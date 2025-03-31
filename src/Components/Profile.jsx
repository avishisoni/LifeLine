import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return; // Do nothing if no token

    fetch("http://192.168.1.4:8001/profile", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      });
  }, [token]);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      {!token || !user ? (
        <div>
          <p className="mb-4 text-gray-600">You are not logged in.</p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition cursor-pointer mr-4"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-green-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-green-600 transition cursor-pointer"
          >
            Register
          </button>
        </div>
      ) : (
        <div>
          <p className="text-gray-700"><strong>Username:</strong> {user.username}</p>
          <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-700"><strong>Hearts:</strong> {user.hearts} ❤️</p>
          <p className="text-gray-700"><strong>Donations:</strong> {user.donations}</p>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              setUser(null);
              navigate("/");
            }}
            className="mt-4 bg-gray-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-gray-600 transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
