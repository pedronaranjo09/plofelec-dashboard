import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function StatsCards({ pedidos = [] }) {
  // =====================
  // MÉTRICAS
  // =====================
  const totalPedidos = pedidos.length;

  const entregados = pedidos.filter(
    (p) => p.estado === "Entregado"
  ).length;

  const enProceso = pedidos.filter(
    (p) => p.estado === "En Proceso"
  ).length;

  const retrasados = pedidos.filter(
    (p) => p.estado === "Retrasado"
  ).length;

  // Multas: $200 por pedido retrasado
  const totalMultas = retrasados * 200;

  // =====================
  // RENDER
  // =====================
  return (
    <Grid container spacing={2} mb={3}>
      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">Total pedidos</Typography>
            <Typography variant="h5">{totalPedidos}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">En proceso</Typography>
            <Typography variant="h5">{enProceso}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">Retrasados</Typography>
            <Typography variant="h5">{retrasados}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">Multas estimadas</Typography>
            <Typography variant="h5">
              ${totalMultas.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
