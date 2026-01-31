import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../feature/auth/pages/login";
import Register from "../feature/auth/pages/register";
import Dashboard from "../feature/dashboard/dashboard";

// Pages
import Home from "../feature/dashboard/pages/home/home";

// Compras
import Compras from "../feature/dashboard/pages/compras/compras";
import OrdenCompra from "../feature/dashboard/pages/compras/pages/ordenCompra/ordenCompra";
import Proveedor from "../feature/dashboard/pages/compras/pages/proveedor/proveedor";
import RemisionCompra from "../feature/dashboard/pages/compras/pages/remisionCompra/remisionCompra";

// Configuración
import Configuracion from "../feature/dashboard/pages/configuracion/configuracion";
import Roles from "../feature/dashboard/pages/configuracion/pages/roles/roles";

// Existencias
import Existencias from "../feature/dashboard/pages/existencias/existencias";
import Bodegas from "../feature/dashboard/pages/existencias/pages/bodegas/bodegas";
import Productos from "../feature/dashboard/pages/existencias/pages/productos/productos";
import Traslados from "../feature/dashboard/pages/existencias/pages/traslados/traslados";

// Ventas
import Ventas from "../feature/dashboard/pages/ventas/ventas";
import Clientes from "../feature/dashboard/pages/ventas/pages/clientes/clientes";
import Cotizaciones from "../feature/dashboard/pages/ventas/pages/cotizaciones/cotizaciones";
import Ordenes from "../feature/dashboard/pages/ventas/pages/ordenes/ordenes";
import PagosAbonos from "../feature/dashboard/pages/ventas/pages/pagosAbonos/pagosAbonos";
import RemisionesVenta from "../feature/dashboard/pages/ventas/pages/remisionesVenta/remisionesVenta";

import Usuarios from "../feature/dashboard/pages/usuarios/usuarios";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />

        <Route path="compras" element={<Compras />}>
          <Route path="orden-compra" element={<OrdenCompra />} />
          <Route path="proveedor" element={<Proveedor />} />
          <Route path="remision-compra" element={<RemisionCompra />} />
        </Route>

        <Route path="existencias" element={<Existencias />}>
          <Route path="bodegas" element={<Bodegas />} />
          <Route path="productos" element={<Productos />} />
          <Route path="traslados" element={<Traslados />} />
        </Route>

        <Route path="ventas" element={<Ventas />}>
          <Route path="clientes" element={<Clientes />} />
          <Route path="cotizaciones" element={<Cotizaciones />} />
          <Route path="ordenes" element={<Ordenes />} />
          <Route path="pagos-abonos" element={<PagosAbonos />} />
          <Route path="remisiones-venta" element={<RemisionesVenta />} />
        </Route>

        <Route path="configuracion" element={<Configuracion />}>
          <Route path="roles" element={<Roles />} />
        </Route>

        <Route path="usuarios" element={<Usuarios />} />
      </Route>
    </Routes>
  );
};

export default RouterApp;
