import {
  Paper,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Typography
} from "@mui/material";

export default function Filtros({ estado, riesgo, onEstadoChange, onRiesgoChange }) {
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Estado del pedido
          </Typography>
          <FormControl fullWidth>
            <Select
              value={estado}
              onChange={(e) => onEstadoChange(e.target.value)}
              size="medium"
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="En tránsito">En tránsito</MenuItem>
              <MenuItem value="Retrasado">Retrasado</MenuItem>
              <MenuItem value="En aduana">En aduana</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Nivel de riesgo
          </Typography>
          <FormControl fullWidth>
            <Select
              value={riesgo}
              onChange={(e) => onRiesgoChange(e.target.value)}
              size="medium"
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="alto">Alto</MenuItem>
              <MenuItem value="medio">Medio</MenuItem>
              <MenuItem value="bajo">Bajo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}
