import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import { estadoConfig } from "../utils/estadoPedido";

export default function PedidoDetalleModal({ pedido, onClose }) {
  if (!pedido) return null;

  const estadoInfo = estadoConfig[pedido.estado];

  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Detalle del pedido – {pedido.factura}
      </DialogTitle>

      <DialogContent dividers>
        <Stack spacing={1.5}>
          <Typography>
            <strong>Producto:</strong> {pedido.producto}
          </Typography>

          <Typography>
            <strong>Proveedor:</strong> {pedido.proveedor}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <strong>Estado:</strong>
            <Chip
              label={pedido.estado}
              color={estadoInfo?.color || "default"}
              size="small"
            />
          </Stack>

          <Typography color="text.secondary">
            {estadoInfo?.descripcion}
          </Typography>

          <Typography>
            <strong>Monto:</strong> ${pedido.monto}
          </Typography>

            <Typography>
            <strong>Multa: </strong> ${pedido.multa ? `${pedido.multa}` : "No aplica"}
          </Typography>

        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
