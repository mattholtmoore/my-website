import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import PlayArrow from "@mui/icons-material/PlayArrow";

const Music = () => {
  return (
    <>
      <Stack direction={"row"} justifyContent="space-around" mb={12}>
        <Stack
          spacing={2}
          direction={"column"}
          sx={{ alignItems: "center", mt: 4 }}
        >
          <Typography variant="h3" component={"h1"}>
            Spotify
          </Typography>
          <Stack direction={"row"} spacing={2} alignItems="center">
            <PlayArrow />
            <Link href="https://open.spotify.com/album/4fQCM7Rr4nLXxNuNjbO042">
              Life To Me
            </Link>
          </Stack>
        </Stack>
        <Stack
          spacing={2}
          direction={"column"}
          sx={{ alignItems: "center", mt: 4 }}
        >
          <Typography variant="h3" component={"h1"}>
            Youtube
          </Typography>
          <Stack direction={"row"} spacing={2} alignItems="center">
            <PlayArrow />
            <Link href="">Placeholder</Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Music;
