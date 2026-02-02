import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, Typography } from "@mui/material";
import { pedidosPorProveedor } from "../data/stats";

export default function PedidosPorProveedorChart() {
  return (
    <Card sx={{ p: 2, height: 300 }}>
      <Typography variant="h6" gutterBottom>
        Pedidos por proveedor
      </Typography>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={pedidosPorProveedor}
            dataKey="total"
            nameKey="proveedor"
            outerRadius={90}
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
