import Player from "../components/Player";
import PlayerCSS from "../components/PlayerCss";
// components
import Layout from "../components/Layout";

const Index = () => {
  const videoJsOptions = {
    techOrder: ["youtube"],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: "hhttps://www.youtube.com/watch?v=3q4BtCzuryY",
        type: "video/youtube"
      }
    ]
  };

  return (
    <>
      <Layout>
        <Player {...videoJsOptions} />
        <PlayerCSS />
      </Layout>
    </>
  );
};

export default Index;
