import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardComponent from "../../components/CardComponent";
import axios from "axios";

// to do
// 1: instal, import axios
// 2: get info de products
// 3: hacer que el componente chupe esa info

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then(function (response) {
        // handle success
        setProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {products?.map((item) => (
          <Grid item xs={4}>
            <CardComponent product={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
