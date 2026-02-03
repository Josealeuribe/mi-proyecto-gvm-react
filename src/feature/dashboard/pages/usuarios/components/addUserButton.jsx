import { Plus } from "lucide-react";

const AddUserButton = () => {
  return (
    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
      <Plus className="w-4 h-4" />
      Nuevo Usuario
    </button>
  );
};

export default AddUserButton;
