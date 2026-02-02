import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import PedidoDetalle from "./pages/PedidoDetalle";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      {/* Normaliza estilos de Material UI */}
      <CssBaseline />

      {/* Header está fijo para toda la app */}
      <Header />

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pedido/:id" element={<PedidoDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
