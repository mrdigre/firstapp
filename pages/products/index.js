import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardComponent from "../../components/CardComponent";

export const products = [
  {
    id: 1,
    img: "https://i8.amplience.net/i/jpl/op_650992_plc?qlt=92&w=313&h=414&bg=rgb%28191%2C191%2C191%29&v=1&fmt=auto",
    title: "Folk",
    subTitle: "Classic Stripe Tee",
    price: "£65.00",
  },
  {
    id: 2,
    img: "https://i8.amplience.net/i/jpl/op_623726_plc?qlt=92&w=313&h=414&bg=rgb%28191%2C191%2C191%29&v=1&fmt=auto",
    title: "Armor Lux",
    subTitle: "Marinière Morgat",
    price: "£46.00",
  },
  {
    id: 3,
    img: "https://i8.amplience.net/i/jpl/op_637804_plc?qlt=92&w=313&h=414&bg=rgb%28191%2C191%2C191%29&v=1&fmt=auto",
    title: "Armor Lux",
    subTitle: "Callac T-Shirt",
    price: "£35.00",
  },
  {
    id: 4,
    img: "https://i8.amplience.net/i/jpl/op_651645_plc?qlt=92&w=313&h=414&bg=rgb%28191%2C191%2C191%29&v=1&fmt=auto",
    title: "Columbia",
    subTitle: "Challenger Windbreaker",
    price: "£65.00",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {products.map((item) => (
          <Grid item xs={4}>
            <CardComponent product={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
