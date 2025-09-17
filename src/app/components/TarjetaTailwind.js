export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col p-4 m-2 w-64 bg-white text-gray-800 border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
      {/* Imagen */}
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      {/* Contenido */}
      <h2 className="text-lg font-bold mb-2">{titulo}</h2>
      <p className="text-sm text-gray-600 flex-grow">{descripcion}</p>

      {/* Etiqueta */}
      <span className="mt-4 inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 rounded-full">
        {etiqueta}
      </span>
    </div>
  );
}
