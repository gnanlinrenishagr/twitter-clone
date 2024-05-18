import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { Button } from "@mui/material";

const Feed = () => {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <Button className="feed__button" fullWidth>
          <h2>For you</h2>
        </Button>
        <Button className="feed__button" fullWidth>
          <h2>Following</h2>
        </Button>
      </div>

      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
};

export default Feed;
