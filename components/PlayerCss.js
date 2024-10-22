import "videojs-youtube";

const PlayerCSS = () => {
  return (
    <>
      <h1>The implementation below is without react functions</h1>
      <div data-vjs-player>
        <video
          id="my-video"
          className="video-js vjs-theme-city"
          playsInline
          controls
          preload="auto"
          data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=ZS_kXvOeQ5Y"}] }'
        ></video>
      </div>
    </>
  );
};

export default PlayerCSS;
