import Feed from "./Feed";
import Sidebar from "./Sidebar";
import "./Twitter.css";
import Widgets from "./Widgets";

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
