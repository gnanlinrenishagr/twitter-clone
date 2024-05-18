import "./Sidebar.css";
import XIcon from "@mui/icons-material/X";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <XIcon className="sidebar__twitterIcon" />
      <SidebarOption active text="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption text="Notification" Icon={NotificationsNoneOutlinedIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineOutlinedIcon} />
      <SidebarOption text="Glok" Icon={CropSquareIcon} />
      <SidebarOption text="List" Icon={ListAltIcon} />
      <SidebarOption text="Bookmark" Icon={BookmarkBorderOutlinedIcon} />
      <SidebarOption text="Communities" Icon={PeopleOutlinedIcon} />
      <SidebarOption text="Premium" Icon={XIcon} />
      <SidebarOption text="Profile" Icon={PermIdentityIcon} />
      <SidebarOption text="More" Icon={SearchIcon} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Post
      </Button>
    </div>
  );
};

export default Sidebar;
