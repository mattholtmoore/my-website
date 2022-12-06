import { Button } from "@mui/material";
import React from "react";
import { PraiseGodColors } from "../styles/colors";

interface INavBarButtonsProps {
  text: string;
  onClick: () => void;
}

const NavBarButton = ({ text, onClick }: INavBarButtonsProps): JSX.Element => {
  return (
    <Button
      sx={{
        color: PraiseGodColors.BlackSemiTransparent87,
        fontFamily: "GT Walsheim Pro",
        fontWeight: "bold",
        fontSize: "17px",
        textTransform: "lowercase",
        ":hover": {
          color: PraiseGodColors.WarmOrangeLight,
          backgroundColor: "transparent",
          textDecoration: "underline",
          // make text lowercase
        },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default NavBarButton;
