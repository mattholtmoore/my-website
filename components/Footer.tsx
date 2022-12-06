import { IconButton, Stack, Typography, Tooltip } from "@mui/material";
import React from "react";
import { PraiseGodColors } from "../styles/colors";
import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  PhoneIphone,
} from "@mui/icons-material";
import ScrollButton from "./ScrollButton";

const Footer = () => {
  return (
    <Stack
      direction={"column"}
      component="footer"
      sx={{
        mt: 8,
        borderRadius: 0,
        position: "sticky",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="column">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Tooltip title="Email" placement="top">
            <IconButton
              href="mailto:mattholtmoore@gmail.com"
              sx={{
                color: PraiseGodColors.BlackSemiTransparent87,
                ":hover": { color: PraiseGodColors.WarmOrangeLight },
              }}
            >
              <Email />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub" placement="top">
            <IconButton
              href="https://github.com/mattholtmoore"
              target="_blank"
              sx={{
                color: PraiseGodColors.BlackSemiTransparent87,
                fontSize: "1.5rem",
                ":hover": { color: PraiseGodColors.WarmOrangeLight },
              }}
            >
              <GitHub />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="top">
            <IconButton
              href="https://www.linkedin.com/in/mattholtmoore/"
              target="_blank"
              sx={{
                color: PraiseGodColors.BlackSemiTransparent87,
                fontSize: "1.5rem",
                ":hover": { color: PraiseGodColors.WarmOrangeLight },
              }}
            >
              <LinkedIn />
            </IconButton>
          </Tooltip>
          <Tooltip title="Text Me" placement="top">
            <IconButton
              href=""
              sx={{
                color: PraiseGodColors.BlackSemiTransparent87,
                fontSize: "1.5rem",
                ":hover": { color: PraiseGodColors.WarmOrangeLight },
              }}
            >
              <PhoneIphone />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram" placement="top">
            <IconButton
              href="https://www.instagram.com/mattholtmoore/"
              target="_blank"
              sx={{
                color: PraiseGodColors.BlackSemiTransparent87,
                fontSize: "1.5rem",
                ":hover": { color: PraiseGodColors.WarmOrangeLight },
              }}
            >
              <Instagram />
            </IconButton>
          </Tooltip>
          <ScrollButton />
        </Stack>
        <Stack justifyContent="center">
          <Typography
            variant="body2"
            component="span"
            sx={{
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              color: PraiseGodColors.BlackSemiTransparent87,
              justifyContent: "center",
              alignItems: "center",
              fontSize: "0.75rem",
              padding: "0.5rem",
            }}
          >
            © {new Date().getFullYear()} Matt Moore | All Rights Reserved
          </Typography>{" "}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;