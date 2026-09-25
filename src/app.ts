import express from "express";
import categoryRoutes from "./routes/categoryRouter.js";

const app = express();

app.use(express.json());

// Rota principal da API.
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hotelaria Hostelix API",
    version: "1.0.0",
  });
});

// Todas as rotas de categorias ficam organizadas no router da funcionalidade.
app.use("/categories", categoryRoutes);

export default app;
