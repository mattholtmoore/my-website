import { Button } from "@mui/joy";
import { AppBar, Avatar, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PraiseGodColors } from "../styles/colors";

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
              backgroundColor: PraiseGodColors.StoryWhiteMedium,
            }}
          />
        </Link>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            color="primary"
            sx={{
              fontFamily: "GT Walsheim Pro",
              fontWeight: "bold",
              fontSize: "17px",
              ":hover": {
                color: PraiseGodColors.WarmOrangeLight,
                textDecoration: "underline",
              },
            }}
            onClick={() => router.push("/")}
          >
            home
          </Button>
          <Button
            color="primary"
            sx={{
              fontFamily: "GT Walsheim Pro",
              fontWeight: "bold",
              fontSize: "17px",
              ":hover": {
                color: PraiseGodColors.WarmOrangeLight,
                textDecoration: "underline",
              },
            }}
            onClick={() => {
              router.push("/about");
            }}
          >
            about
          </Button>
          <Button
            color="primary"
            sx={{
              fontFamily: "GT Walsheim Pro",
              fontWeight: "bold",
              fontSize: "17px",
              ":hover": {
                color: PraiseGodColors.WarmOrangeLight,
                textDecoration: "underline",
              },
            }}
            onClick={() => {
              router.push("/music");
            }}
          >
            music
          </Button>
          <Button
            color="primary"
            sx={{
              fontFamily: "GT Walsheim Pro",
              fontWeight: "bold",
              fontSize: "17px",
              ":hover": {
                color: PraiseGodColors.WarmOrangeLight,
                textDecoration: "underline",
              },
            }}
            onClick={() => {
              router.push("/blog");
            }}
          >
            blog
          </Button>
          <Button
            color="primary"
            sx={{
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
