import React, { useState } from 'react';

function Booking() {
const [latitude, setLatitude] = useState('');
const [longitude, setLongitude] = useState('');
const [radius, setRadius] = useState(5);
const [ambulances, setAmbulances] = useState([]);
const [error, setError] = useState(null);

const fetchNearbyAmbulances = async () => {
    setError(null);
    setAmbulances([]);

    if (!latitude || !longitude) {
        setError("Please enter latitude and longitude.");
        return;
    }

    const apiUrl = `http://localhost:8000/ambulances/nearby?lat=${latitude}&lng=${longitude}&radius_km=${radius}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData)
            throw new Error(errorData.detail || 'Failed to fetch nearby ambulances.');
        }
        const data = await response.json();
        setAmbulances(data);
    } catch (err) {
        setError(err.message);
    }
};

return (
    <div>
        <h2>Find Nearby Ambulances</h2>
        <div>
            <label>Latitude:</label>
            <input
                type="number"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
            />
        </div>
        <div>
            <label>Longitude:</label>
            <input
                type="number"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
            />
        </div>
        <div>
            <label>Radius (km):</label>
            <input
                type="number"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
            />
        </div>
        <button onClick={fetchNearbyAmbulances}>Find Ambulances</button>

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {ambulances.length > 0 && (
            <div>
                <h3>Nearby Ambulances:</h3>
                <ul>
                    {ambulances.map(ambulance => (
                        <li key={ambulance.id}>
                            <strong>{ambulance.name}</strong>
                            <p>Contact: {ambulance.contact}</p>
                            <p>Location: Lat: {ambulance.latitude}, Lng: {ambulance.longitude}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);}
export default Booking