import React from "react";
import { useFilter } from "../components/FilterContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Popover from "@mui/material/Popover";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

function Products({ searchTerm }) {
  const {filter} = useFilter();

  const products = [
    { id: 1, naziv: "Hleb", cena: "120", kolicina: "500g", slika: "https://static.maxi.rs/medias/sys_master/h2a/h61/8834630877214.png", tip: "domaći" },
    { id: 2, naziv: "Mleko", cena: "150", kolicina: "1L", slika: "https://static.maxi.rs/medias/sys_master/h5b/h18/9001838280734.png", tip: "domaći" },
    { id: 3, naziv: "Jaja", cena: "200", kolicina: "10 kom", slika: "https://static.maxi.rs/medias/sys_master/h6a/h98/9045400518686.png", tip: "domaći" },
    { id: 4, naziv: "Sir", cena: "600", kolicina: "500g", slika: "https://static.maxi.rs/medias/sys_master/products/hda/hf8/9182822072350.png", tip: "domaći" },
    { id: 5, naziv: "Jogurt", cena: "100", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/products/haf/he3/9150978162718.png", tip: "domaći" },
    { id: 6, naziv: "Kafa", cena: "500", kolicina: "200g", slika: "https://static.maxi.rs/medias/sys_master/products/h19/hc2/9155509485598.png", tip: "veštački" },
    { id: 7, naziv: "Čokolada", cena: "250", kolicina: "100g", slika: "https://static.maxi.rs/medias/sys_master/products/h2c/hd2/9151018729502.png", tip: "veštački" },
    { id: 8, naziv: "Keks", cena: "300", kolicina: "300g", slika: "https://static.maxi.rs/medias/sys_master/h84/hda/8968561328158.png", tip: "veštački" },
    { id: 9, naziv: "Šećer", cena: "120", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/h89/hc8/9114157023262.png", tip: "veštački" },
    { id: 10, naziv: "So", cena: "50", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/h3e/h2c/8909027409950.png", tip: "veštački" },
    { id: 11, naziv: "Pirinac", cena: "250", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/products/hbd/h73/9170656624670.png", tip: "veštački" },
    { id: 12, naziv: "Brašno", cena: "200", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/products/h9d/h1e/9162036084766.png", tip: "veštački" },
    { id: 13, naziv: "Ulje", cena: "250", kolicina: "1L", slika: "https://static.maxi.rs/medias/sys_master/products/hb5/hc4/9158677889054.png", tip: "veštački" },
    { id: 14, naziv: "Banane", cena: "150", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/hbc/hd0/8834679930910.png", tip: "domaći" },
    { id: 15, naziv: "Jabuke", cena: "180", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/h3e/h3c/9107128156190.png", tip: "domaći" },
    { id: 16, naziv: "Narandže", cena: "220", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/products/h2d/h52/9144878628894.png", tip: "domaći" },
    { id: 17, naziv: "Krompir", cena: "90", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/hde/h60/9107131432990.png", tip: "domaći" },
    { id: 18, naziv: "Luk", cena: "80", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/h4e/h81/9107115704350.png", tip: "domaći" },
    { id: 19, naziv: "Paprika", cena: "250", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/hff/hbf/8825420185630.png", tip: "domaći" },
    { id: 20, naziv: "Paradajz", cena: "300", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/h61/hdf/9071091154974.png", tip: "domaći" },
    { id: 21, naziv: "Krastavac", cena: "200", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/hfb/h07/8878270513182.png", tip: "domaći" },
    { id: 22, naziv: "Kupus", cena: "100", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/products/h2a/hdc/9150972395550.png", tip: "domaći" },
    { id: 23, naziv: "Brokoli", cena: "350", kolicina: "500g", slika: "https://static.maxi.rs/medias/sys_master/he3/h07/9087735365662.png", tip: "domaći" },
    { id: 24, naziv: "Tikvice", cena: "200", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/h0c/h39/8828262809630.png", tip: "domaći" },
    { id: 25, naziv: "Pasulj", cena: "400", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/he0/hfa/8968679784478.png", tip: "domaći" },
    { id: 26, naziv: "Grašak", cena: "350", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/h79/hd3/8835964698654.png", tip: "domaći" },
    { id: 27, naziv: "Kukuruz", cena: "300", kolicina: "1kg", slika: "https://static.maxi.rs/medias/sys_master/h2a/haa/9083290812446.png", tip: "domaći" },
    { id: 28, naziv: "Suncokretovo seme", cena: "450", kolicina: "500g", slika: "https://static.maxi.rs/medias/sys_master/hde/h80/9107128811550.png", tip: "veštački" },
    { id: 29, naziv: "Bademi", cena: "1200", kolicina: "500g", slika: "https://static.maxi.rs/medias/sys_master/products/hfb/h20/9153806762014.png", tip: "veštački" },
    { id: 30, naziv: "Orasi", cena: "1000", kolicina: "500g", slika: "https://static.maxi.rs/medias/sys_master/h7d/ha6/8990279515742.png", tip: "veštački" }];
   
    const filteredByType = filter ? products.filter((product) => product.tip === filter) : products;
  

  const filteredProducts = searchTerm ? filteredByType.filter((product) => product.naziv.toLowerCase().includes(searchTerm.toLowerCase())) : filteredByType;



  const styles = {
    container: { padding: "20px", textAlign: "center", backgroundColor: "#f8f9fa" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", justifyContent: "center", padding: "10px" },
    card: { background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center", transition: "transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out" },
    heading: { marginBottom: "20px", color: "#333" },
    text: { margin: "5px 0", fontSize: "14px", color: "#666" },
    image: { width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" },
    inputContainer: { marginBottom: "20px" }
  };

  return (
    <div style={styles.grid}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((proizvod) => (
          <div key={proizvod.id} style={styles.card}>
            {proizvod.slika && <img src={proizvod.slika} alt={proizvod.naziv} style={styles.image} />}
            <h3>{proizvod.naziv}</h3>
            <p style={styles.text}>Cena: {proizvod.cena} RSD</p>
            <p style={styles.text}>Količina: {proizvod.kolicina}</p>
            <p style={styles.text}>Tip: {proizvod.tip}</p>
            <Box sx={{ '& button': { m: 2 } }}>

          <div> <Button variant="contained" size="medium">
          DODAJ
        </Button></div></Box></div>
        ))
      ) : (
        <p style={styles.text}>Nema pronađenih proizvoda.</p>
      )}
    </div>
  )}

export default Products;
