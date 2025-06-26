import { useState, useEffect } from 'react';
import SongCard from './SongCard';


function Spotify() {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
    fetch(`${baseUrl}/api/songs`)
        .then((response) => response.json())
        .then((data) => { setTracks(data); })
    }, []);

    return (
        <div className="flex flex-col items-center rounded-md p-5">
            <p className="font-bold text-xl">My Recent Favorites</p>
            <div className="flex flex-wrap justify-center mt-8 gap-x-2">
            {tracks.map((track, index) => (
                <SongCard key={index} title={track.title} artist={track.artist} url={track.albumImg} album={track.albumTitle} spotifyUrl={track.spotifyUrl}/>
            ))}
            </div>
            <div className="flex space-x-3 items-center mt-8">
                <p className="whitespace-nowrap text-gray-400">Data from</p>
                <img src="spotify.svg" className="min-w-[70px] h-auto"/>
            </div>
        </div>
    );
}
export default Spotify;