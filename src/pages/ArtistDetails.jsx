// useParams gives access to song id in Url bar when clicking on a song/artist
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
// song detail data
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

// creates a details component with song information such as title, artist, and lyrics when clicking on a specific song
const ArtistDetails = () => {
    const {id: artistId} = useParams();
    const { activeSong, isPlaying } = useSelector(( state) => state.player);
    // using artist details query from shazamCore.js
    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

    // loading and error handling while retreiving song/artist query data
    if (isFetchingArtistDetails) return 
    <Loader title="Searching for song details../>"/>;

    if (error) return <Error/>;

    return (
        <div className="flex flex-col">    
            {/*Renders the details header component, then the song lyrics, followed by the related songs component*/}        
            <DetailsHeader 
            artistId={artistId} 
            artistData={artistData}/>

            <RelatedSongs
            data={Object.values(artistData?.songs)}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            />
        </div>
    )

}

export default ArtistDetails;
