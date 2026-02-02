import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

export default function FiltersBar({ estadoFiltro, setEstadoFiltro }) {
  const handleChange = (_, newValue) => {
    if (newValue !== null) {
      setEstadoFiltro(newValue);
    }
  };

  return (
    <Box mb={3}>
      <Typography variant="subtitle1" gutterBottom>
        Filtrar por estado
      </Typography>

      <ToggleButtonGroup
        value={estadoFiltro}
        exclusive
        onChange={handleChange}
        size="small"
      >
        <ToggleButton value="Todos">Todos</ToggleButton>
        <ToggleButton value="Entregado">Entregado</ToggleButton>
        <ToggleButton value="En Proceso">En Proceso</ToggleButton>
        <ToggleButton value="Retrasado">Retrasado</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
