import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ name, icon, url }) => {
  return (
    <NavLink
      to={url}
      style={{ textDecoration: "none" ,fontFamily : 'Futura'}}
      end
      activeclassname="active"
    >
      <ListItemButton
        className="linkBtn font-futura"
        sx={{
          "&:hover": { backgroundColor: "sidebar.hoverBg" },
          paddingY: "8px",
          paddingX: "24px",
          
        }}
      >
        <ListItemIcon sx={{ color: "sidebar.textColor" }}>{icon}</ListItemIcon>
        <p 
  className=" text-orange-600"
  style={{
  marginLeft: "-10px",
  fontFamily: "Futura",
  fontSize: "1rem", // or adjust as needed
  lineHeight: "5"
}}>
  {name}
</p>
      </ListItemButton>
    </NavLink>
  );
};

export default SidebarItem;
