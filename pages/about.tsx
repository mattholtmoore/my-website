import { Button, Container, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { PraiseGodColors } from "../styles/colors";

const About = () => {
  return (
    <>
      <Head>
        <title>About Matt Moore</title>
        <link rel="icon" href="./images/profilepic.jpg" />
      </Head>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <Stack
          sx={{
            maxWidth: "700px",
            padding: "0 20px",
            margin: "0 auto",
          }}
        >
          <Stack
            sx={{
              mt: "2rem",
              mb: "2rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              loader={({ src }) => src}
              src="/images/WebsiteProfilePhoto.jpg"
              alt="Matt Moore - Elevation Worship photo"
              width={600}
              height={400}
            />
          </Stack>
          {/* <Typography variant="h3" component="h1" mb={"24px"}>
            About
          </Typography> */}
          <Typography variant="body2" component="p" fontFamily={"Roboto "}>
            Hey, I'm Matt!
            <br />
            <br />
            I'm a fullstack developer with a passion for building cool websites
            and apps. I love to learn new technologies and apply them to
            real-world problems. I am currently working as a software engineer
            at{" "}
            <Link
              href="https://www.servant.io/"
              target={"_blank"}
              style={{
                textDecoration: "none",
                color: "#f00000",
              }}
            >
              Servant
            </Link>{" "}
            {""} - an advisory, consultation, and incubator company focused on
            Kingdom organizations. Servant's purpose is to bring positive
            influence and insight to the intersection of technology and faith.
            Here I've had the privelege of helping build a hedging platform for
            a company,{" "}
            <Link
              href="https://www.pangea.io/"
              target={"_blank"}
              style={{
                textDecoration: "none",
                color: PraiseGodColors.WarmOrangeMedium,
              }}
            >
              Pangea
            </Link>{" "}
            , that is working towards building a worldwide, borderless economy
            that is more unified, more equitable, and more resilient - leading
            to a better future for all people, everywhere. I've also had the
            opportunity to work with{" "}
            <Link
              href="https://loveology.org/"
              target={"_blank"}
              style={{ textDecoration: "none", color: "#F61A3A" }}
            >
              Loveology
            </Link>{" "}
            (an organization that helps couples build stronger relationships and
            healthier marriages) on a free relationship resource - dedicated to
            answering people's questions from today’s top relationship experts.
            Before that I worked at Elevation Church as a Worship Experience
            Director for 6 1/2 years. I grew up in (and currently live in)
            Louisburg, North Carolina - just 45 minutes north of Raleigh. Lived
            in Charlotte for almost 7 years. I'm a follower of Jesus, a husband
            to my beautiful wife Amanda, and father to my two amazing children,
            Koa Maverick and Jovie Mae. My favorite things to do are spend time
            with my family, travel, watch movies, write songs, sing, and play
            instruments. I'm a huge fan of Star Wars, Marvel, Harry Potter, and
            LOTR/The Hobbit. I love all genres of music but not all the same. I
            love the outdoors. I love to hike (though I have minimal
            experience), camp, and fish. And I really love the beach and the
            ocean. Anything else you want to know just ask!
          </Typography>
          <Stack alignItems="flex-end" justifyContent="center">
            <Button
              href="/contact"
              variant="contained"
              sx={{
                color: PraiseGodColors.BlackSemiTransparent87,
                backgroundColor: PraiseGodColors.WarmOrangeLight,
                padding: 0,
                mt: 2,
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
              Ask Me!
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default About;
