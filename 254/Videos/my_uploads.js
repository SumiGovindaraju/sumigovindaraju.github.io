// Define some variables used to remember state.
var playlistId, playlistName, nextPageToken, prevPageToken;
var data = {};

// After the API loads, call a function to get the uploads playlist ID.
function handleAPILoaded() {
    requestUserUploadsPlaylistId();
}

// Call the Data API to retrieve the playlist ID that uniquely identifies the
// list of videos uploaded to the currently authenticated user's channel.
function requestUserUploadsPlaylistId() {
    // See https://developers.google.com/youtube/v3/docs/channels/list
    var request = gapi.client.youtube.playlists.list({
        mine: true,
        part: 'snippet,contentDetails'
    });
    request.execute(function(response) {
        for (var i = 0; i < response.result.items.length; i++) {
            playlistId = response.result.items[i].id;
            playlistName = response.result.items[i].snippet.title;
            data[playlistName] = [];
            requestVideoPlaylist(playlistId, playlistName);
        }
        console.log(data);
    });
}

// Retrieve the list of videos in the specified playlist.
function requestVideoPlaylist(playlistId, playlistName) {
    var requestOptions = {
        playlistId: playlistId,
        part: 'snippet',
        maxResults: 10
    };
    var request = gapi.client.youtube.playlistItems.list(requestOptions);
    request.execute(function(response) {
        if (response.result.items) {
            $.each(response.result.items, function(index, item) {
                data[playlistName][index] = {
                    "youtube_code": item.snippet.resourceId.videoId,
                    "thumbnail_url": item.snippet.thumbnails.default.url,
                    "name": item.snippet.title,
                    "description": item.snippet.description
                };
            });
        }
    });
}