import { Button } from "@mui/joy";
import { AppBar, Avatar, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PraiseGodColors } from "../styles/colors";
import NavBarButton from "./NavBarButton";

const Header = () => {
  const router = useRouter();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        backdropFilter: "blur(8px)",
        padding: "1rem",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <Avatar
            src="../images/profilepic.JPG"
            alt="selfie"
            sizes="300px"
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </Link>
        <Stack direction="row" spacing={2} alignItems="center">
          <NavBarButton
            text="home"
            onClick={() => {
              router.push("/");
            }}
          />
          <NavBarButton
            text="about"
            onClick={() => {
              router.push("/about");
            }}
          />
          <NavBarButton
            text="music"
            onClick={() => {
              router.push("/music");
            }}
          />
          <NavBarButton
            text="blog"
            onClick={() => {
              router.push("/blog");
            }}
          />

          <Button
            sx={{
              color: PraiseGodColors.BlackSemiTransparent87,
              fontWeight: "bold",
              fontSize: "17px",
              ":hover": {
                color: PraiseGodColors.White,
                backgroundColor: PraiseGodColors.WarmOrangeLight,
              },
              border: "2px solid",
              borderColor: PraiseGodColors.WarmOrangeLight,
              borderRadius: "20px",
            }}
            onClick={() => {
              router.push("/contact");
            }}
          >
            contact me
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
