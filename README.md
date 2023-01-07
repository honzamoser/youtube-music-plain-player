# youtube-music-plain-player

Plays the raw stream youtube provides.
Uses youtube-dlp (npm pkg youtube-dl-exec) to get format info, which is passed into the frontend, sorted and filtered, and then uses the stream url.
You need to provide a ?v arg for it to work
