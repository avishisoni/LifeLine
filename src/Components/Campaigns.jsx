import React, { useEffect, useState } from "react";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.4:8001/campaigns") 
      .then(response => response.json())
      .then(data => setCampaigns(data))
      .catch(error => console.error("Error fetching campaigns:", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blood Donation Campaigns</h2>
      {campaigns.length > 0 ? (
        <ul>
          {campaigns.map((campaign, index) => (
            <li key={index} className="mb-2 p-4 border rounded-lg shadow-md">
              <strong>{campaign.name}</strong> - {campaign.location} <br />
              Time: {campaign.time} <br />
              Status: <span className="font-semibold">{campaign.status}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading campaigns...</p>
      )}
    </div>
  );
};

export default Campaigns;
