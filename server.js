import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const API_KEY = "process.env.FOOTBALL_API_KEY"; // vamos trocar depois

app.get("/live", async (req, res) => {
  try {
    const r = await fetch("https://v3.football.api-sports.io/fixtures?live=all", {
      headers: { "x-apisports-key": API_KEY }
    });
    const data = await r.json();
    res.json(data);
  } catch (e) {
    res.json({ error: "Erro na API" });
  }
});

app.listen(3000, () => console.log("Rodando"));
