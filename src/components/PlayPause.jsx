import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';


// if active song title matches current song card title, we are actively playing the selected song so display play, else display pause.
const PlayPause = ( { isPlaying, activeSong, song, handlePause, handlePlay}) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    size={35}
    className="text-gray-300"
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={35}
    className="text-gray-300"
    onClick={handlePlay}
  />
));

export default PlayPause;
