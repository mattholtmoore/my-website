import React, { useState } from "react";
import { validateEmail } from "../utils/utils";
import Stack from "@mui/material/Stack";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/joy/Button";
import { PraiseGodColors } from "../styles/colors";
import Head from "next/head";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: { target: any }) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("*Invalid entry. Please try again. Thanks!");
      return;
    } else {
      setErrorMessage("");
    }

    alert(`Hey, ${name}! So nice to meet you.`);
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <>
      <Head>
        <title>Let's Connect</title>
        <link rel="icon" href="./images/profilepic.jpg" />
      </Head>
      <Stack
        direction={"column"}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        marginBottom={"2rem"}
        marginTop={5}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "GT Walsheim Pro",
            fontWeight: "bold",
            fontSize: "17px",
            lineHeight: "20px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: PraiseGodColors.BlackSemiTransparent87,
            mt: "2rem",
            mb: "1rem",
          }}
        >
          Let's Connect!
        </Typography>
        <FormControl
          variant="outlined"
          size="small"
          fullWidth
          component="form"
          onSubmit={handleFormSubmit}
          sx={{
            borderRadius: 0,
            position: "relative",
            backgroundColor: PraiseGodColors.BlackSemiTransparent87,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            width: "50%",
            margin: "20px",
            fontFamily: 'Roboto, "Helvetica", "Arial", sans-serif',
          }}
        >
          <Stack direction={"column"} margin={4} width={"75%"}>
            <Stack direction={"column"} pt={2}>
              <FormHelperText
                id="my-helper-text"
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "17px",
                  color: PraiseGodColors.WarmOrangeLight,
                }}
              >
                What's your name?
              </FormHelperText>
              <OutlinedInput
                id="my-input"
                value={name}
                onChange={handleInputChange}
                name="name"
                type="text"
                placeholder="Name"
                aria-describedby="my-helper-text"
                sx={{
                  display: "block",
                  mt: "5px",
                  mb: "5px",
                  width: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontFamily: "Roboto",
                  color: PraiseGodColors.BlackSemiTransparent87,
                  backgroundColor: PraiseGodColors.White,
                }}
              />
            </Stack>
            <Stack direction={"column"}>
              <FormHelperText
                id="my-helper-text"
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "17px",
                  pt: "10px",
                  color: PraiseGodColors.WarmOrangeLight,
                }}
              >
                What's your message?
              </FormHelperText>
              <OutlinedInput
                multiline
                fullWidth
                maxRows={4}
                id="my-input"
                value={message}
                onChange={handleInputChange}
                name="message"
                type="text"
                placeholder="Message"
                aria-describedby="my-helper-text"
                inputProps={{ maxLength: 2000 }}
                sx={{
                  display: "block",
                  mt: "5px",
                  mb: "5px",
                  width: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontFamily: "Roboto",
                  color: PraiseGodColors.BlackSemiTransparent87,
                  backgroundColor: PraiseGodColors.White,
                }}
              />
            </Stack>
          </Stack>
          <Stack direction={"row"} width={"75%"}>
            <Button
              type="submit"
              onClick={() =>
                window.open(
                  `mailto:mattholtmoore@gmail.com?subject=Message from ${name}&body=${message}`
                )
              }
              sx={{
                fontFamily: "Roboto",
                fontSize: "17px",
                color: PraiseGodColors.BlackSemiTransparent87,
                backgroundColor: PraiseGodColors.White,
                borderRadius: 20,
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                width: "25%",
                mt: "50px",
                mb: "30px",
                "&:hover": {
                  backgroundColor: PraiseGodColors.WarmOrangeLight,
                },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Submit
            </Button>
          </Stack>
        </FormControl>
      </Stack>
      <Stack direction="column" alignItems={"center"} marginBottom={"24px"}>
        {errorMessage && (
          <Typography
            variant="body2"
            sx={{ color: PraiseGodColors.RiskBerryMedium }}
          >
            {errorMessage}
          </Typography>
        )}
      </Stack>
    </>
  );
}

export default Form;
