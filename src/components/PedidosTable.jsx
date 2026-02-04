import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
} from "@mui/material";

const getEstadoChip = (estado) => {
  switch (estado) {
    case "Entregado":
      return <Chip label="Entregado" color="success" size="small" />;
    case "En Proceso":
      return <Chip label="En Proceso" color="warning" size="small" />;
    case "Retrasado":
      return <Chip label="Retrasado" color="error" size="small" />;
    default:
      return <Chip label={estado || "—"} size="small" />;
  }
};

const getRetrasoChip = (pedido) => {
  if (pedido.estado === "Retrasado" && pedido.diasRetraso > 0) {
    return (
      <Chip
        label={`${pedido.diasRetraso} días`}
        color="error"
        size="small"
      />
    );
  }
  return "—";
};

const PedidosTable = ({ pedidos = [], onVerDetalle }) => {
  if (pedidos.length === 0) {
    return (
      <Paper sx={{ padding: 3, textAlign: "center" }}>
        No hay pedidos para mostrar
      </Paper>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "75vh" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell><strong>Acto</strong></TableCell>
            <TableCell><strong>Entidad</strong></TableCell>
            <TableCell><strong>Estado</strong></TableCell>
            <TableCell><strong>Días de retraso</strong></TableCell>
            <TableCell><strong>Factura</strong></TableCell>
            <TableCell align="right"><strong>Monto ($)</strong></TableCell>
            <TableCell><strong>Fecha</strong></TableCell>
            <TableCell align="center"><strong>Acciones</strong></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {pedidos.map((pedido) => (
            <TableRow
              key={pedido.id}
              hover
              sx={{
                backgroundColor:
                  pedido.estado === "Retrasado"
                    ? "rgba(211,47,47,0.06)"
                    : "inherit",
              }}
            >
              <TableCell>{pedido.id}</TableCell>
              <TableCell>{pedido.producto}</TableCell>
              <TableCell>{pedido.proveedor}</TableCell>
              <TableCell>{getEstadoChip(pedido.estado)}</TableCell>
              <TableCell>{getRetrasoChip(pedido)}</TableCell>
              <TableCell>{pedido.factura}</TableCell>
              <TableCell align="right">
                {pedido.monto?.toLocaleString()}
              </TableCell>
              <TableCell>{pedido.fecha}</TableCell>
              <TableCell align="center">
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => onVerDetalle?.(pedido)}
                >
                  Ver
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PedidosTable;
