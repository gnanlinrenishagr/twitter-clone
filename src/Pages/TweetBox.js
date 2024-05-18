import "./TweetBox.css";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const TweetBox = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <AccountCircleIcon />

          <input placeholder="What's happening?!" type="text"></input>
        </div>
        <input
          className="tweetbox__imageinput"
          placeholder="Optional:Enter image URL"
          type="text"
        />
        <Button className="tweetbox_tweetbutton">Post</Button>
      </form>
    </div>
  );
};

export default TweetBox;
