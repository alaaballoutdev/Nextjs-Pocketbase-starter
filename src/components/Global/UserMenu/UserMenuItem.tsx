import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import React from "react";

interface UserMenuItemProps {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const UserMenuItem = ({ icon, text, onClick, ...props }: UserMenuItemProps) => {
  return (
    <MenuItem onClick={onClick} {...props}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </MenuItem>
  );
};

export default UserMenuItem;
