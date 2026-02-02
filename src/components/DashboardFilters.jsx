import {
  Card,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";

export default function DashboardFilters({
  estado,
  proveedor,
  search,
  onEstadoChange,
  onProveedorChange,
  onSearchChange,
}) {
  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            label="Estado"
            value={estado}
            onChange={(e) => onEstadoChange(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Entregado">Entregado</MenuItem>
            <MenuItem value="En Proceso">En proceso</MenuItem>
            <MenuItem value="Retrasado">Retrasado</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            label="Proveedor"
            value={proveedor}
            onChange={(e) => onProveedorChange(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Shenzhen Ltd">Shenzhen Ltd</MenuItem>
            <MenuItem value="Guangzhou Corp">Guangzhou Corp</MenuItem>
            <MenuItem value="Yiwu Trading">Yiwu Trading</MenuItem>
            <MenuItem value="Alibaba Supplier">Alibaba Supplier</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Buscar"
            placeholder="Producto o factura"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
