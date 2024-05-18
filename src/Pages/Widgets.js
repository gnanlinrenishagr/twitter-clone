import "./Widgets.css";
import {
  TwitterTimeEmbed,
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchOutlinedIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId="858551177860055040" />
        <TwitterTimelineEmbed
          source="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"http://facebook.com/cleverprogrammer"}
          options={{ text: "#react.js is awsome", via: "clearquazi" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
