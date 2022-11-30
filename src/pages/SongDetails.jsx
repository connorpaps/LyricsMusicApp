// useParams gives access to song id in Url bar when clicking on a song/artist
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
// song detail data
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

// creates a details component with song information such as title, artist, and lyrics when clicking on a specific song
const SongDetails = () => {
    const {songid} = useParams();
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector(( state) => state.player);
    // using song details query from shazamCore.js
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({songid});
    // related songs query from shazamCore.js
    const { data, isFetching: isFetchingRelatedSongs, error} = useGetSongRelatedQuery({songid});

    // play/pause handlers for related songs
    const handlePauseClick = () => {
        dispatch(playPause(false));
    };
    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i}));
        dispatch(playPause(true));
    };

    // loading and error handling while retreiving song/artist query data
    if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title="Searching for song details../>"/>;
    if (error) return <Error/>;

    return (
        <div className="flex flex-col">    
            {/*Renders the details header component, then the song lyrics, followed by the related songs component*/}        
            <DetailsHeader artistId="" songData={songData}/>
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1]?.text.map((Line, i) => (
                        <p key={`lyrics-${Line}-${i}`} className="text-gray-400 text-base my-1">{Line}</p>
                    )) : <p className="text-gray-400 text-base my-1">Sorry, no lyrics are available.</p>}
                </div>
            </div>

            <RelatedSongs
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            />
        </div>
    )

}

export default SongDetails;
