import { useParams } from "react-router-dom";
import { pedidos } from "../data/pedidos";
import { Card, CardContent, Typography } from "@mui/material";

export default function PedidoDetalle() {
  const { id } = useParams();

  const pedido = pedidos.find(p => String(p.id) === id);

  if (!pedido) {
    return <h2>Pedido no encontrado</h2>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          Pedido {pedido.id}
        </Typography>

        <Typography>
          Factura: {pedido.factura}
        </Typography>

        <Typography>
          Proveedor: {pedido.proveedor}
        </Typography>

        <Typography>
          Estado: {pedido.estado}
        </Typography>

        <Typography>
          ETA: {pedido.eta}
        </Typography>
      </CardContent>
    </Card>
  );
}
