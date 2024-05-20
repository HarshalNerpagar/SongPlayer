import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://api.jiosaavn.com/api/v1/albums');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Albums:', data);  // Log the API response
        setAlbums(data.albums);
      } catch (error) {
        setError('Error fetching albums');
        console.error('Error fetching albums:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Music Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <div key={album.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={album.image} alt={album.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{album.title}</h2>
              <p className="text-gray-600">{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
