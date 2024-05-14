import Banner from "./Banner";
import Faq from "./Faq";
import Newslettter from "./Newslettter";
import RecentBlog from "./RecentBlog";
import World from "./World";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <RecentBlog></RecentBlog>
      </div>
      <div>
        <World></World>
      </div>
      <div>
        <Faq></Faq>
      </div>
      <div>
        <Newslettter></Newslettter>
      </div>
    </div>
  );
};

export default Home;
