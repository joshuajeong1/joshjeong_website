import { useState, useEffect } from 'react';

function Spotify() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
    fetch('/api/songs')
        .then((response) => response.json())
        .then((data) => { setTracks(data); })
    }, []);

    return (
        <div className="flex flex-col items-center rounded-md p-3">
            <p className="font-bold text-xl">My Spotify Favorites</p>
            <ul>
                {tracks.map((track, index) => (
                <li key={index}>
                    <strong>{track.title}</strong> by {track.artist}
                </li>
                ))}
            </ul>
        </div>
    );
}
export default Spotify;