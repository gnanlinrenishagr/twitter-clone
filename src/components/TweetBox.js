import "./TweetBox.css";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { firestore } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "../firebase";

const TweetBox = () => {
  const [tweet, setTweet] = useState({
    displayName: "Gnanlin Renisha G R",
    username: "gnanlin",
    verified: true,
    text: "",
    avatar: "AccountCircleIcon",
    image: "",
  });

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      // Add new user
      const docRef = await addDoc(collection(firestore, "posts"), {
        displayName: tweet.displayName,
        username: tweet.username,
        verified: tweet.verified,
        text: tweet.text,
        avatar: tweet.avatar,
        image: tweet.image,
      });
      console.log("Document written with ID: ", docRef.id);

      // Reset form and fetch users again
      setTweet({
        displayName: "Gnanlin Renisha G R",
        username: "gnanlin",
        verified: true,
        text: "",
        avatar: "AccountCircleIcon",
        image: "",
      });
     
    } catch (e) {
      console.error("Error adding/updating document: ", e);
    }
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <AccountCircleIcon />

          <input
            value={tweet.text}
            placeholder="What's happening?!"
            type="text"
            name="text"
            onChange={(e) =>
              setTweet({ ...tweet, [e.target.name]: e.target.value })
            }
          ></input>
        </div>
        <input
          className="tweetbox__imageinput"
          value={tweet.image}
          placeholder="Optional:Enter image URL"
          type="text"
          name="image"
          onChange={(e) =>
            setTweet({ ...tweet, [e.target.name]: e.target.value })
          }
        />
        <Button className="tweetbox_tweetbutton" onClick={() => handleSubmit()}>
          Post
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
