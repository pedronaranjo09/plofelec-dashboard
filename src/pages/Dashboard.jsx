import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

// DATA
import pedidosMock from "../data/pedidosMock";

// COMPONENTS
import StatsCards from "../components/StatsCards";
import FiltersBar from "../components/FiltersBar";
import PedidosTable from "../components/PedidosTable";
import PedidoDetalleModal from "../components/PedidoDetalleModal";
import ChartsModal from "../components/ChartsModal";

export default function Dashboard() {
  // =====================
  // STATE
  // =====================
  const [pedidos] = useState(pedidosMock);
  const [estadoFiltro, setEstadoFiltro] = useState("Todos");
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
  const [openCharts, setOpenCharts] = useState(false);

  // =====================
  // FILTROS
  // =====================
  const pedidosFiltrados =
    estadoFiltro === "Todos"
      ? pedidos
      : pedidos.filter((p) => p.estado === estadoFiltro);

  // =====================
  // RENDER
  // =====================
  return (
    <Box p={3}>
      {/* TÍTULO + BOTÓN DE GRÁFICOS */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" fontWeight="bold">
          📦 Dashboard de Pedidos
        </Typography>

        <Button variant="contained" onClick={() => setOpenCharts(true)}>
          Ver gráficos 📊
        </Button>
      </Box>

      {/* KPIs / STATS */}
      <StatsCards pedidos={pedidosFiltrados} />

      {/* FILTROS */}
      <FiltersBar
        estadoFiltro={estadoFiltro}
        setEstadoFiltro={setEstadoFiltro}
      />

      {/* TABLA DE PEDIDOS */}
      <PedidosTable
        pedidos={pedidosFiltrados}
        onVerDetalle={setPedidoSeleccionado}
      />

      {/* MODAL DE DETALLE DE PEDIDO */}
      <PedidoDetalleModal
        open={Boolean(pedidoSeleccionado)}
        pedido={pedidoSeleccionado}
        onClose={() => setPedidoSeleccionado(null)}
      />

      {/* MODAL DE GRÁFICOS */}
      <ChartsModal
        open={openCharts}
        onClose={() => setOpenCharts(false)}
        pedidos={pedidosFiltrados}
      />
    </Box>
  );
}
