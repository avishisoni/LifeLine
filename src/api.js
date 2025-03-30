// api.jsx
import axios from 'axios';

export const fetchNearbyAmbulances = async (latitude, longitude) => {
  try {
    const response = await axios.get('http://localhost:8000/ambulances/nearby', {
      params: { lat: latitude, lng: longitude },
    });
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};
