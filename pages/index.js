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
        src: "https://www.youtube.com/watch?v=IxQB14xVas0",
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
