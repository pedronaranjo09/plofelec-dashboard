import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, Typography } from "@mui/material";
import { pedidosPorEstado } from "../data/stats";

export default function PedidosPorEstadoChart() {
  return (
    <Card sx={{ p: 2, height: 300 }}>
      <Typography variant="h6" gutterBottom>
        Pedidos por estado
      </Typography>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={pedidosPorEstado}>
          <XAxis dataKey="estado" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
