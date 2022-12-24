import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../../lib/notion";
import { Text } from "./[id]";
import styles from "../index.module.css";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { PraiseGodColors } from "../../styles/colors";
import ArrowForward from "@mui/icons-material/ArrowForward";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";

export const databaseId = process.env.NOTION_DATABASE_ID;

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Matt Moore | The Blog</title>
        <link rel="icon" href="./images/profilepic.jpg" />
      </Head>

      <main className={styles.container}>
        <Typography
          variant="h3"
          component="h1"
          mb={"24px"}
          sx={{
            fontSize: "2.5rem",
            mt: "2rem",
            mb: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Welcome to my blog!
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            fontSize: "1rem",
            mt: "2rem",
            mb: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          This is a place designated for exploring my thoughts, my feelings, and
          sharing what God is teaching me through songwriting and software
          engineering. Be sure to check out some of the projects I'm working on{" "}
          <a
            href="https://github.com/mattholtmoore"
            target={"_blank"}
            style={{ textDecoration: "none" }}
          >
            GitHub
          </a>{" "}
          or give me a follow on{" "}
          <a
            href="https://www.instagram.com/mattholtmoore/"
            target={"_blank"}
            style={{ textDecoration: "none" }}
          >
            {" "}
            Instagram
          </a>
          !{" "}
        </Typography>

        <TextField
          id="outlined-basic"
          label="Search"
          type="search"
          variant="outlined"
          size="small"
          style={{
            // width: "50%",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
          InputProps={{
            inputProps: {
              style: {
                fontSize: "1rem",
                fontFamily: "Roboto",
                color: PraiseGodColors.BlackSemiTransparent87,
              },
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchOutlined
                    sx={{
                      color: PraiseGodColors.WarmOrangeLight,
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography
          variant="h4"
          component={"h2"}
          sx={{
            fontSize: "2.0rem",
            fontFamily: "Roboto",
            color: PraiseGodColors.BlackSemiTransparent50,
            mt: "2rem",
            mb: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          All Posts
        </Typography>

        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.posts}>
                <Card
                  onClick={() => {
                    `blog/${post.id}`;
                  }}
                  sx={{
                    mt: 2,
                    p: 4,
                    minWidth: 275,
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                  }}
                >
                  <Typography variant="h3" className={styles.postTitle}>
                    <Link
                      href={`blog/${post.id}`}
                      style={{
                        color: PraiseGodColors.WarmOrangeLight,
                        textDecoration: "none",
                        fontFamily: "Roboto",
                      }}
                    >
                      <Text text={post.properties.Name.title} />
                    </Link>
                  </Typography>

                  <Typography
                    variant="body2"
                    component={"p"}
                    className={styles.postDescription}
                  >
                    {date}
                  </Typography>
                  <Typography
                    variant="body2"
                    component={"p"}
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Roboto",
                    }}
                  >
                    <Button
                      href={`blog/${post.id}`}
                      sx={{
                        color: PraiseGodColors.White,
                        backgroundColor: PraiseGodColors.WarmOrangeLighter,
                        mt: 2,
                        textDecoration: "none",
                        textTransform: "lowercase",
                        fontFamily: "Roboto",
                        ":hover": {
                          backgroundColor: PraiseGodColors.WarmOrangeMedium,
                          animation: "ease-in-out 0.3s",
                        },
                      }}
                    >
                      Read post <ArrowForward />
                    </Button>
                  </Typography>
                </Card>
              </li>
            );
          })}
        </ol>
      </main>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
