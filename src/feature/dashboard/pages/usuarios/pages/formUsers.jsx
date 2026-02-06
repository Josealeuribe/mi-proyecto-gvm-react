import React, { useState } from "react";
import { X } from "lucide-react";

const FormUser = ({ open, onClose, onSave }) => {
  if (!open) return null;

  const initialForm = {
    documentType: "",
    documentNumber: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    warehouse: "",
    role: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  /* =========================
     HANDLERS
  ==========================*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleOnlyNumbers = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D/g, "");
    setForm((prev) => ({ ...prev, [name]: numericValue }));
    validateField(name, numericValue);
  };

  const validateField = (name, value) => {
    let error = "";
    if (!value) error = "Este campo es obligatorio";
    if (name === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = "Email inválido";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  /* =========================
     SUBMIT
  ==========================*/
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) newErrors[key] = "Este campo es obligatorio";
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newUser = {
        id: Date.now(),
        name: `${form.name} ${form.lastName}`,
        email: form.email,
        phone: form.phone,
        warehouse: [form.warehouse],
        role: form.role,
        status: "Activo",
      };

      onSave(newUser); // Envía el usuario al padre
      setForm(initialForm); // Limpia el formulario
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-bold text-gray-800">Nuevo Usuario</h2>
        <p className="italic font-semibold text-gray-400 text-xs mb-6">
          Completa la información del nuevo usuario del sistema
        </p>

        <form className="grid grid-cols-2 gap-4 text-sm">
          {/* Tipo Documento */}
          <div>
            <label className="font-semibold text-gray-700">
              Tipo de Documento *
            </label>
            <select
              name="documentType"
              value={form.documentType}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50"
            >
              <option value="">Selecciona</option>
              <option>Cédula de Ciudadanía</option>
              <option>Cédula de Extranjería</option>
            </select>
            {errors.documentType && (
              <p className="text-red-500 text-xs mt-1">{errors.documentType}</p>
            )}
          </div>

          {/* Nº Documento */}
          <div>
            <label className="font-semibold text-gray-700">
              Nº de Documento *
            </label>
            <input
              name="documentNumber"
              value={form.documentNumber}
              onChange={handleOnlyNumbers}
              placeholder="Ej: 1234567890"
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50"
            />
            {errors.documentNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.documentNumber}
              </p>
            )}
          </div>

          {/* Nombre */}
          <div>
            <label className="font-semibold text-gray-700">Nombre *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ej: Juan"
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Apellido */}
          <div>
            <label className="font-semibold text-gray-700">Apellido *</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Ej: Pérez"
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold text-gray-700">Email *</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label className="font-semibold text-gray-700">Teléfono *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleOnlyNumbers}
              placeholder="3001234567"
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Bodega */}
          <div>
            <label className="font-semibold text-gray-700">Bodega Asignada *</label>
            <div className="mt-2 space-y-2">
              {["Bodega Principal", "Bodega Secundaria", "Bodega Medellín", "Bodega Cali"].map(
                (bodega) => (
                  <label key={bodega} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="warehouse"
                      value={bodega}
                      checked={form.warehouse === bodega}
                      onChange={handleChange}
                      className="accent-blue-600"
                    />
                    <span>{bodega}</span>
                  </label>
                )
              )}
            </div>
            {errors.warehouse && (
              <p className="text-red-500 text-xs mt-1">{errors.warehouse}</p>
            )}
          </div>

          {/* Rol */}
          <div>
            <label className="font-semibold text-gray-700">Rol *</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50"
            >
              <option value="">Selecciona un rol</option>
              <option>Administrador</option>
              <option>Vendedor</option>
              <option>Auxiliar de Bodega</option>
              <option>Auxiliar Administrativo</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role}</p>
            )}
          </div>
        </form>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Crear Usuario
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormUser;
