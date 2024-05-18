import "./Post.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avathar">
        <AccountCircleIcon />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Gnanlin Renisha
              <span className="post__headerspecial">
                {<VerifiedIcon className="post__badge" />}@username
              </span>
            </h3>
          </div>
          <div className="post__headDescription">
            <p>It's a post , twitter-clone is working!!!!!</p>
          </div>
        </div>
        <img
          src="https://gifdb.com/images/high/you-did-it-happy-proud-family-guy-1jauxyrj8dhj75u3.webp"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="small" />
          <RepeatOutlinedIcon fontSize="small" />
          <FavoriteBorderOutlinedIcon fontSize="small" />
          <BookmarkBorderOutlinedIcon fontSize="small" />
          <PollOutlinedIcon fontSize="small" />
          <FileUploadOutlinedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
