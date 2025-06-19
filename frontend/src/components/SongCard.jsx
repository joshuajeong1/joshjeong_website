function SongCard({title, artist, url, album, spotifyUrl}) {
    return (
        <a className="w-1/5 min-w-[100px]" href={spotifyUrl} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center cursor-pointer">
                <img className="sm:rounded-[2px] md:rounded-[2px] lg:rounded-[4px] w-full h-auto" src={url} />
                <h1 className="truncate whitespace-nowrap overflow-hidden text-ellipsis text-white mt-4 w-full text-center font-bold">{title}</h1>
                <p className="truncate whitespace-nowrap overflow-hidden text-ellipsis text-gray-400 ">{artist}</p>
                <p className="truncate whitespace-nowrap overflow-hidden text-ellipsis text-gray-500">{album}</p>
            </div>
        </a>
    );
}
export default SongCard;