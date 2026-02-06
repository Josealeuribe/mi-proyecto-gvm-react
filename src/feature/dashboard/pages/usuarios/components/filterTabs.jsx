import { Filter } from "lucide-react";

const FilterTabs = ({ active, onChange }) => {
  return (
    <div className="flex items-center gap-2 border border-gray-300   rounded-lg p-1 bg-white">
      <Filter className="w-4 h-4 text-gray-400 text-semibold text.xs ml-2" />

      {["Todos", "Activo", "Inactivo"].map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`px-4 py-1.5 text-sm rounded-md transition
            ${
              active === item
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
