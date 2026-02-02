import { Box, Typography } from "@mui/material";

export default function ChartsSection({ pedidos }) {
  return (
    <Box mb={3}>
      <Typography variant="h6" gutterBottom>
        📊 Gráficos (en construcción)
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Total de pedidos: {pedidos.length}
      </Typography>
    </Box>
  );
}
