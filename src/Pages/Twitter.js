import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import "./Twitter.css";
import Widgets from "../components/Widgets";

const Twitter = () => {
  return (
    <div className="twitter">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Twitter;
