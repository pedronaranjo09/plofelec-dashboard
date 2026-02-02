import { Box, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#2e7d32", "#ed6c02", "#d32f2f"];

export default function ChartsContent({ pedidos }) {
  const dataEstados = [
    {
      name: "Entregado",
      value: pedidos.filter((p) => p.estado === "Entregado").length,
    },
    {
      name: "En Proceso",
      value: pedidos.filter((p) => p.estado === "En Proceso").length,
    },
    {
      name: "Retrasado",
      value: pedidos.filter((p) => p.estado === "Retrasado").length,
    },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        📊 Análisis de pedidos
      </Typography>

      {/* BARRAS */}
      <Box height={250} mb={4}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dataEstados}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value">
              {dataEstados.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* PIE */}
      <Box height={250}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dataEstados}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label
            >
              {dataEstados.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
