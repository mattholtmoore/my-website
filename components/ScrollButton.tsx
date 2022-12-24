import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowCircleUp from "@mui/icons-material/ArrowCircleUp";
import { PraiseGodColors } from "../styles/colors";

export default function ScrollButton() {
  useEffect(function mount() {
    function onScroll() {
      console.log("scroll!");
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Tooltip title="Back to top" placement="top">
      <IconButton
        sx={{
          position: "relative",
          color: PraiseGodColors.WarmOrangeLight,
          ":hover": {
            color: PraiseGodColors.White,
            backgroundColor: PraiseGodColors.WarmOrangeLight,
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,1)",
          },
        }}
        onClick={scrollToTop}
      >
        <ArrowCircleUp style={{ fontSize: "1.5rem" }} />
      </IconButton>
    </Tooltip>
  );
}
