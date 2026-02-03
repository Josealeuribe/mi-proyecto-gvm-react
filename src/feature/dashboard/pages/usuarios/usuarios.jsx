import React, { useState } from "react";
import SeachBar from "./components/seachBar";
import FilterTabs from "./components/filterTabs";
import AddUserButton from "./components/addUserButton";
import UsersTable from "./components/usersTable";
import { usersData } from "./services/usersData";
import FormUser from "./pages/formUsers";

const Usuarios = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");

  const [users, setUsers] = useState(usersData); // Estado real de usuarios
  const [openForm, setOpenForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // ✅ Modal de confirmación

  // Guardar usuario
  const handleAddUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
    setOpenForm(false); // Cierra el formulario inmediatamente
    setShowConfirmation(true); // Muestra el modal de confirmación

    setTimeout(() => {
      setShowConfirmation(false); // Oculta el modal después de 3s
    }, 3000);
  };

  const filteredUsers = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "Todos" || u.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="mb-6 space-y-1">
      <h1 className="text-2xl font-bold text-gray-800">Gestión de Usuarios</h1>
      <p className="italic font-semibold text-gray-400 text-sm">
        Listado general de usuarios del sistema
      </p>

      {/* BUSCADOR + FILTROS + BOTÓN */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-5">
        <div className="flex-1">
          <SeachBar value={search} onChange={setSearch} />
        </div>
        <div className="flex items-center gap-3">
          <FilterTabs active={filter} onChange={setFilter} />
        </div>
        <div className="flex items-center gap-3 text-semibold text-sm">
          <AddUserButton onClick={() => setOpenForm(true)} />
        </div>
      </div>

      {/* TABLA */}
      <div className="mt-4 text-xs">
        <UsersTable users={filteredUsers} />
      </div>

      {/* FORMULARIO */}
      <FormUser
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSave={handleAddUser} // <-- Pasa la función de guardado
      />

      {/* MODAL DE CONFIRMACIÓN */}
      {showConfirmation && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center gap-3 bg-green-400 text-white px-6 py-4 rounded-2xl shadow-lg border border-green-300 max-w-sm mx-auto animate-fadeIn">
            {/* Icono de check grande */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-semibold text-sm sm:text-base">
              ¡Usuario creado correctamente!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usuarios;
