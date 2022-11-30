# Project Lyrics

Live demo available at: https://lyrics-discover-music.netlify.app/

An elegant React.js Music Application built using React Redux, Shazam Core API from RapidAPI, Vite, and Tailwind CSS.

Features Include:
- Viewing the top charting songs and artists around the world or specific to your region.
- The ability to filter songs by genre and view similar music related to your selection.
- Search bar that allows you to search for both songs and artists.
- A fully functional music player built into the app that allows you to listen to any song found.
- Custom song pages with full lyrics and artist pages with albums.
- A fully responsive app viewable on both desktop and mobile devices.

## System Requirements

To get started with development, you need to install few tools

1. git 
   
   `git` version 2.13.1 or higher. Download [git](https://git-scm.com/downloads) if you don't have it already.

   To check your version of git, run:

   ```shell
    git --version
   ```

2. node 
   
   `node` version 16.15.1 or higher. Download [node](https://nodejs.org/en/download/) if you don't have it already.

   To check your version of node, run:

   ```shell
    node --version
   ```

3. npm
  
   `npm` version 5.6.1 or higher. You will have it after you install node.

   To check your version of npm, run:

   ```shell
    npm --version
   ```

## Setup

To set up a development environment, please follow these steps:

1. Clone the repo

   ```shell
    git clone https://github.com/connorpaps/LyricsMusicApp.git
   ```

2. Change directory to the project directory

    ```shell
    cd LyricsMusicApp
    ```

3. Install the dependencies
   
    ```shell
     npm install
    ```

    If you get an error, please check the console for more information.

    If you don't get an error, you are ready to start development.

4. Run the app
   
    ```shell
    npm run dev
    ```

    Project will be running in the browser.

    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
    
4. Update .env api key
   
    - Create a .env file at the root if not already there.
    - Add VITE_SHAZAM_CORE_RAPID_API_KEY=your_shazam_core_rapid_api_key
    - API key obtained through https://rapidapi.com/apidojo/api/shazam
    - Restart the local server by closing it and running npm run dev in the terminal again.
  
