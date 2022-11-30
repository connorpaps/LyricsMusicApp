import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Shazan Core API request using RapidAPI to fetch top chart music data
export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // top chart music data
        getTopCharts: builder.query({ query: () => '/charts/world'}),
        // get songs based on specific genre selected
        getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        // song detail music data
        getSongDetails: builder.query({ query: ({songid}) => `/tracks/details?track_id=${songid}`}),
        // artist data based on a specific song selected - to help find related songs
        getSongRelated: builder.query({ query: ({songid}) => `/tracks/related?track_id=${songid}`}),
        // information about a specific artist
        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
        // get list of songs based on search query
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    }),
});

export const {
    // these queries can be used within other components to grab the data
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi;
