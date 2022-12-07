import { Stack, Typography, Container, Button } from "@mui/material";
import Head from "next/head";
import React from "react";
import { PraiseGodColors } from "../styles/colors";
// import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Matt Moore - Singer, Songwriter, Software Engineer</title>
        <link rel="icon" href="./images/profilepic.jpg" />
      </Head>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "700px",
          padding: "0 20px",
          margin: "0 auto",
        }}
      >
        <Stack direction={"column"}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 700,
              fontFamily: "Inter",
              lineHeight: "3.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Hey, I'm Matt.
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700,
              fontFamily: "Inter",
              lineHeight: "3.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            I'm a songwriter and a software engineer.
          </Typography>
          <Typography
            variant="body2"
            component={"p"}
            sx={{
              fontSize: "0.8rem",
              fontFamily: "GT America",
              fontWeight: 400,
              lineHeight: "2.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Reflecting God's creativity through worship and websites.
          </Typography>
        </Stack>
        {/* <Stack
          sx={{
            boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.8)",
            mt: "2rem",
            mb: "2rem",
          }}
        >
          <Image
            loader={({ src }) => src}
            src="/images/WebsiteProfilePhoto.jpg"
            alt="Matt's profile photo"
            width={600}
            height={400}
          />
        </Stack> */}
        <Button
          href="/about"
          variant="contained"
          sx={{
            color: PraiseGodColors.BlackSemiTransparent87,
            backgroundColor: PraiseGodColors.WarmOrangeLight,
            padding: 0,
            mt: 10,
            mb: 2,
            width: "12%",
            minWidth: "100px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            "&:hover": {
              backgroundColor: PraiseGodColors.WarmOrangeMedium,
              boxShadow: 10,
              transition: "0.2s ease-out",
              transitionDuration: "0.2s, 0.2s",
              transitionTimingFunction: "ease-out, ease-out",
              transitionDelay: "0s, 0s",
              transitionProperty: "color, background-color",
            },
            borderRadius: "0.5rem",
            textTransform: "none",
          }}
        >
          Learn more
        </Button>
      </Container>
    </>
  );
};

export default Home;
