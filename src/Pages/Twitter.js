import Feed from "./Feed";
import Sidebar from "./Sidebar";
import "./Twitter.css";
const Twitter = () => {
  return (
    <div className="twitter">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
    </div>
  );
};

export default Twitter;
