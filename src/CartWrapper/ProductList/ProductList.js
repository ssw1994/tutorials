import React from "react";
import DemoImage from "../../assets/demo.jpg";
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
class Product {
  name;
  id;
  price;
  description;
  img;
  constructor(name = "", price = 0, description = "", img = null, id = null) {
    this.name = name;
    this.price = price;
    this.id = id || Date.now();
    this.description = description;
    this.img = img || DemoImage;
  }
}

function ProductCard(props) {
  const { title, price, id, description, img } = props;
  return (
    <Card className="product-card">
      <CardMedia
        image={img}
        alt={title}
        height="140"
        component="img"
      ></CardMedia>
      <CardHeader title={title}></CardHeader>
      <CardContent>
        <h2>
          <Typography>{price}</Typography>
        </h2>
        <div>
          <Typography>{description}</Typography>
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const products = [
  new Product("Laptio", 20000, "Samsung NP3000"),
  new Product("Laptio", 20000, "Samsung NP3000"),
  new Product("Laptio", 20000, "Samsung NP3000"),
  new Product("Laptio", 20000, "Samsung NP3000"),
  new Product("Laptio", 20000, "Samsung NP3000"),
  new Product("Laptio", 20000, "Samsung NP3000"),
  new Product("Laptio", 20000, "Samsung NP3000"),
];

//const products = [];

export default function ProductList() {
  return (
    <div className="product-list-container">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
}
