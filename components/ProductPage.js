import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductPage(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5} padding={10}>
        {" "}
        hello
        <Grid item xs={8}>
          <Grid item xs={4}>
            <h1>{props.productData.title}</h1>
          </Grid>
          <Grid item xs={4}>
            <h2> price </h2>
          </Grid>
          <Grid item xs={4}>
            <h3> information about delivery </h3>
          </Grid>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Box>
  );
}
