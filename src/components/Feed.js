import "./Feed.css";
import Post from "../components/Post";
import TweetBox from "./TweetBox";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { collection, getDocs } from "../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "posts"));
        console.log(querySnapshot);
        setPosts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="feed">
      {console.log(JSON.stringify(posts))}
      <div className="feed__header">
        <Button className="feed__button" fullWidth>
          <h2>For you</h2>
        </Button>
        <Button className="feed__button" fullWidth>
          <h2>Following</h2>
        </Button>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Feed;
