// src/components/StatsCards.jsx
import React from "react";
import { Box, Card, Typography, Grid } from "@mui/material";

export default function StatsCards({ pedidos }) {
  // =====================
  // CALCULOS DE ESTADOS
  // =====================
  const pendientes = pedidos.filter(p => p.estado === "Pendiente").length;
  const enProceso = pedidos.filter(p => p.estado === "En proceso").length;
  const entregados = pedidos.filter(p => p.estado === "Entregado").length;

  // Suma las multas de todos los pedidos de manera segura
  const conMulta = pedidos.reduce((acc, p) => {
    const multaNum = Number(p.multa) || 0; // asegura que sea número
    return acc + multaNum;
  }, 0);

  // =====================
  // RENDER
  // =====================
  return (
    <Box mb={3}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Card sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Pendientes</Typography>
            <Typography variant="h4">{pendientes}</Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">En proceso</Typography>
            <Typography variant="h4">{enProceso}</Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Entregados</Typography>
            <Typography variant="h4">{entregados}</Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Multas ($)</Typography>
            <Typography variant="h4">{conMulta}</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
