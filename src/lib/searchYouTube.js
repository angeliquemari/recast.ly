var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video',
      videoEmbeddable: 'true'
    },
    contentType: 'application/json',
    success: function (data) {
      console.log('Successfully got videos');
      callback(data.items);
    },
    error: function (data) {
      console.error('Failed to get videos', data);
    }
  });
};

export default searchYouTube;
