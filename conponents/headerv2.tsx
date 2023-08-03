"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
type Anchor = "top" | "left" | "bottom" | "right";

export default function Headerv2() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  /////

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: "260px",
        padding: "5px",
        backgroundColor: "#4582e9",
        height: "100vh",
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "250px",
        }}
      >
        <Box width={""} sx={{ width: "200px" }}>
          <Typography>
            안녕하세요 <b>홍길동님👋</b>
          </Typography>
        </Box>
        <Box onClick={toggleDrawer("right", false)}>
          <Image src="/logomenu.png" alt="logo" width={25} height={25} />
        </Box>
      </Box>
      <Divider sx={{ color: "white", backgroundColor: "white" }} />
    </Box>
  );

  /////

  return (
    <Box
      sx={{
        width: "370px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "5px 16px",
        paddingRight: "0px",
        paddingLeft: "10px",
      }}
    >
      <Box>
        <Image src="/logohead.png" alt="logo" width={110} height={41} />
      </Box>
      <Box></Box>
      <Box>
        <Button onClick={toggleDrawer("right", true)}>
          {" "}
          <Image src="/logomenu.png" alt="logo" width={32} height={32} />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </Box>
    </Box>
  );
}
