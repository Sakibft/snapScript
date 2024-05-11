import Banner from "./Banner";
import Newslettter from "./Newslettter";
import RecentBlog from "./RecentBlog";

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
        <Newslettter></Newslettter>
      </div>
    </div>
  );
};

export default Home;
