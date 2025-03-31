import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.4:8001/leaderboard")
      .then(response => response.json())
      .then(data => setLeaders(data))
      .catch(error => console.error("Error fetching leaderboard:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      {leaders.length > 0 ? (
        <ul className="border rounded-lg shadow-md p-4">
          {leaders.map((user, index) => (
            <li key={index} className="p-2 border-b">
              <span className="font-bold">{index + 1}. {user.username}</span> - {user.hearts} ❤️ | {user.donations} Donations
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading leaderboard...</p>
      )}
    </div>
  );
};

export default Leaderboard;
