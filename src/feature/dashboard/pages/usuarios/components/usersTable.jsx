import { Mail, Eye, Pencil, Trash2 } from "lucide-react";

const UsersTable = ({ users }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm">
      {/* 🔹 AQUÍ ÚNICO CAMBIO */}
      <table className="w-full text-xs font-semibold">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Nombre Completo</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Teléfono</th>
            <th className="p-3 text-left">Bodega Asignada</th>
            <th className="p-3 text-left">Rol</th>
            <th className="p-3 text-left">Estado</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, index) => (
            <tr key={u.id} className="border-t text-gray-500">
              <td className="p-3">{index + 1}</td>
              <td className="p-3 font-medium">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.phone}</td>

              <td className="p-3">
                <div className="flex flex-wrap gap-1">
                  {u.warehouse.map((w) => (
                    <span
                      key={w}
                      className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-700"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </td>

              <td className="p-3">
                <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-700">
                  {u.role}
                </span>
              </td>

              <td className="p-3">
                <span
                  className={`px-2 py-0.5 text-xs rounded-full
                    ${
                      u.status === "Activo"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {u.status}
                </span>
              </td>

              <td className="p-3">
                <div className="flex justify-center gap-3">
                  <Mail className="w-4 h-4 text-purple-500 cursor-pointer" />
                  <Eye className="w-4 h-4 text-blue-500 cursor-pointer" />
                  <Pencil className="w-4 h-4 text-orange-500 cursor-pointer" />
                  <Trash2 className="w-4 h-4 text-red-500 cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
