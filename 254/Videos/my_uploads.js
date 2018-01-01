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
        console.log(response.result);
        for (var i = 0; i < response.result.items.length; i++) {
            playlistId = response.result.items[i].id;
            playlistName = response.result.items[i].snippet.title;
            data[playlistName] = []
            requestVideoPlaylist(playlistId);
        }
        console.log(data);
    });
}

// Retrieve the list of videos in the specified playlist.
function requestVideoPlaylist(playlistId, pageToken) {
    $('#video-container').html('');
    var requestOptions = {
        playlistId: playlistId,
        part: 'snippet',
        maxResults: 10
    };
    if (pageToken) {
        requestOptions.pageToken = pageToken;
    }
    var request = gapi.client.youtube.playlistItems.list(requestOptions);
    request.execute(function(response) {
        var playlistItems = response.result.items;
        if (playlistItems) {
            $.each(playlistItems, function(index, item) {
                var title = item.snippet.title;
                var videoId = item.snippet.resourceId.videoId;
                var description = item.snippet.description;
                data[playlistName][index] = {
                    "youtube_code": videoId,
                    "name": title,
                    "description": description
                };
            });
        } else {
            $('#video-container').html('Sorry you have no uploaded videos');
        }
    });
}