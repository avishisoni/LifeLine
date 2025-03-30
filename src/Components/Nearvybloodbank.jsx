import React, { useState } from 'react';

function Nearbybloodbanks() {
const [latitude, setLatitude] = useState('');
const [longitude, setLongitude] = useState('');
const [nearbyBanks, setNearbyBanks] = useState([]);
const [error, setError] = useState('');

const handleGetNearby = async () => {
   setError('');
   setNearbyBanks([]);

   if (!latitude || !longitude) {
     setError('Please enter latitude and longitude.');
     return;
   }

   try {
     const response = await fetch('http://localhost:8000/nearby', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) }),
     });

     if (!response.ok) {
       const errorData = await response.json();
       setError(`Error fetching nearby banks: ${errorData.detail || response.status}`);
       return;
     }

     const data = await response.json();
     setNearbyBanks(data);
   } catch (err) {
     setError(`An unexpected error occurred: ${err.message}`);
   }
 };

 return (
   <div>
     <h2>Find Nearby Blood Banks</h2>
     <div>
       <label>Latitude:</label>
       <input type="number" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
     </div>
     <div>
       <label>Longitude:</label>
       <input type="number" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
     </div>
     <button onClick={handleGetNearby}>Get Nearby Blood Banks</button>

     {error && <p style={{ color: 'red' }}>{error}</p>}

     {nearbyBanks.length > 0 && (
       <div>
         <h3>Nearby Blood Banks:</h3>
         <ul>
           {nearbyBanks.map((bank) => (
             <li key={bank.id}>
               <strong>{bank.name}</strong> ({bank.distance?.toFixed(2)} km)
               <p>{bank.address}, {bank.city}, {bank.state}</p>
             </li>
           ))}
         </ul>
       </div>
     )}
   </div>
 );

};

export default Nearbybloodbanks