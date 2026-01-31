import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Home,
  Package,
  Boxes,
  ArrowLeftRight,
  Warehouse,
  ShoppingCart,
  Building2,
  ChevronDown,
  ClipboardList,
  PackageCheck,
  FileText,
  UserCheck,
  FileSignature,
  ClipboardCheck,
  CreditCard,
  Receipt,
  Settings,
  Users,
  Menu,
} from "lucide-react";

import vManageLogo from "../../../assets/images/VManage.png";
import vManageLogoSmall from "../../../assets/images/VSinFondo.png";
import gvmLogo from "../../../assets/images/GVMLogo.png";

const menuItems = [
  { name: "Dashboard", path: "/dashboard/home", icon: Home },
  {
    name: "Existencias",
    icon: Package,
    children: [
      { name: "Productos", path: "/dashboard/existencias/productos", icon: Boxes },
      { name: "Traslados", path: "/dashboard/existencias/traslados", icon: ArrowLeftRight },
      { name: "Bodegas", path: "/dashboard/existencias/bodegas", icon: Warehouse },
    ],
  },
  {
    name: "Compras",
    icon: ShoppingCart,
    children: [
      { name: "Proveedores", path: "/dashboard/compras/proveedor", icon: Building2 },
      { name: "Órdenes de compra", path: "/dashboard/compras/orden-compra", icon: ClipboardList },
      { name: "Remisiones de compra", path: "/dashboard/compras/remision-compra", icon: PackageCheck },
    ],
  },
  {
    name: "Ventas",
    icon: FileText,
    children: [
      { name: "Clientes", path: "/dashboard/ventas/clientes", icon: UserCheck },
      { name: "Cotizaciones", path: "/dashboard/ventas/cotizaciones", icon: FileSignature },
      { name: "Órdenes", path: "/dashboard/ventas/ordenes", icon: ClipboardCheck },
      { name: "Pagos / Abonos", path: "/dashboard/ventas/pagos-abonos", icon: CreditCard },
      { name: "Remisiones", path: "/dashboard/ventas/remisiones-venta", icon: Receipt },
    ],
  },
  {
    name: "Configuración",
    icon: Settings,
    children: [{ name: "Roles", path: "/dashboard/configuracion/roles", icon: UserCheck }],
  },
  { name: "Usuarios", path: "/dashboard/usuarios", icon: Users },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const toggleMenu = (name) => setOpenMenu(openMenu === name ? null : name);

  return (
    <motion.aside
      animate={{ width: isCollapsed ? 80 : 260 }}
      transition={{ duration: 0.2 }}
      className="sticky top-0 left-0 h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-emerald-100 border-r border-emerald-200"
    >
      <div className="flex flex-col h-full">
        {/* HEADER */}
        <div className="flex items-center justify-between p-4">
          <img
            src={isCollapsed ? vManageLogoSmall : vManageLogo}
            alt="Logo"
            className={isCollapsed ? "h-5 w-5" : "h-14"}
          />
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 rounded-lg hover:bg-emerald-200">
            <Menu />
          </button>
        </div>

        {/* MENÚ */}
        <nav className="flex-1 px-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const hasChildren = item.children?.length > 0;

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => isCollapsed && hasChildren && setHoveredMenu(item.name)}
                onMouseLeave={() => isCollapsed && setHoveredMenu(null)}
              >
                {/* ITEM PADRE */}
                {hasChildren ? (
                  <button
                    onClick={() => !isCollapsed && toggleMenu(item.name)}
                    className="w-full flex items-center px-4 py-3 rounded-lg mb-1 text-gray-700 hover:bg-emerald-200 transition"
                  >
                    {/* Wrapper para alinear icono a la izquierda y mantener padding */}
                    <div className="flex items-center w-full">
                      <Icon size={20} />
                      {!isCollapsed && <span className="ml-3">{item.name}</span>}
                      {!isCollapsed && (
                        <ChevronDown
                          size={16}
                          className={`ml-auto transition-transform ${openMenu === item.name ? "rotate-180" : ""}`}
                        />
                      )}
                    </div>
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg mb-1 transition gap-3
                       ${isActive ? "bg-[rgb(8_123_203)] text-white" : "text-gray-700 hover:bg-emerald-200"}`
                    }
                  >
                    <Icon size={20} />
                    {!isCollapsed && <span>{item.name}</span>}
                  </NavLink>
                )}

                {/* SUBMENÚ */}
                {hasChildren && (
                  <>
                    {/* Tooltip cuando colapsado */}
                    {isCollapsed && hoveredMenu === item.name && (
                      <div className="absolute left-full top-0 ml-2 bg-white shadow-lg rounded z-50 min-w-[180px]">
                        {item.children.map((child) => {
                          const ChildIcon = child.icon;
                          return (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 text-sm rounded-lg
                                 ${isActive ? "bg-[rgb(8_123_203)] text-white" : "text-gray-600 hover:bg-emerald-200"}`
                              }
                            >
                              <ChildIcon size={16} />
                              <span>{child.name}</span>
                            </NavLink>
                          );
                        })}
                      </div>
                    )}

                    {/* Submenú expandido */}
                    {!isCollapsed && openMenu === item.name && (
                      <div className="ml-6">
                        {item.children.map((child) => {
                          const ChildIcon = child.icon;
                          return (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 text-sm rounded-lg mb-1
                                 ${isActive ? "bg-[rgb(8_123_203)] text-white" : "text-gray-600 hover:bg-emerald-200"}`
                              }
                            >
                              <ChildIcon size={16} />
                              <span>{child.name}</span>
                            </NavLink>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </nav>

        {/* FOOTER */}
        {!isCollapsed && (
          <div className="p-4 flex justify-center">
            <img src={gvmLogo} alt="GVM" className="h-10 opacity-70" />
          </div>
        )}
      </div>
    </motion.aside>
  );
}
