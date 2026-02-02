import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography variant="h6" fontWeight="bold">
            📦 Control de Pedidos – Plofelec
          </Typography>

          <Typography variant="body2">
            Mei
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
