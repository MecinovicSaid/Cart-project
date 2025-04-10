import React, { useState } from "react";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NewProduct({ setNewProducts }) {
  const [product, setProduct] = useState({
    naziv: "",
    image: "",
    cena: "",
    kolicina: "",
    tip: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewProducts((prevProducts) => [...prevProducts, product]); // Dodavanje proizvoda u stanje
    navigate("/"); // Preusmeri na početnu stranicu
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}>
          Dodaj novi proizvod
        </Typography>

        <TextField
          fullWidth
          label="Ime proizvoda"
          name="naziv"
          value={product.naziv}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Link slike"
          name="image"
          value={product.image}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Tip proizvoda"
          name="tip"
          value={product.tip}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Cena (RSD)"
          name="cena"
          type="number"
          value={product.cena}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Količina"
          name="kolicina"
          type="text"
          value={product.kolicina}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Dodaj proizvod
        </Button>
      </Paper>
    </Container>
  );
}

export default NewProduct;
