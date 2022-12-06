// import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material";
import { PraiseGodColors } from "../styles/colors";

import React, { useEffect } from "react";

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
