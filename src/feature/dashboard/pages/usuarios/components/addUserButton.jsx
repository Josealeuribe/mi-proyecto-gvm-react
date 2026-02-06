import React from "react";
import { Plus } from "lucide-react";

const AddUserButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
    >
      <Plus size={16} />
      Nuevo Usuario
    </button>
  );
};

export default AddUserButton;
