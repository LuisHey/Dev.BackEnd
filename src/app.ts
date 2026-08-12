import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hotelaria Hostelix API",
        version: "1.0.0",
    });
});

app.get("/categories", (req, res) => {
    res.status(200).json({
        message: "Categorias",
    });
});

app.get("/produts", (req, res) => {
    res.status(200).json({
        message: "Produtos",
    });
});

export default app;