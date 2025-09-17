"use client";

export default function TarjetaDinamica({ 
  titulo, 
  contenido, 
  colorFondo = "#ffffff", 
  colorTexto = "#000000", 
  ancho = "300px",
  activo = false
}) {
  // Estilos dinámicos con condicional
  const estilos = {
    backgroundColor: activo ? "#2196F3" : colorFondo,  // azul si activo
    color: activo ? "#ffffff" : colorTexto,           // Texto blanco si activo
    width: ancho,
    padding: "1.5rem",
    margin: "1rem auto",
    borderRadius: "12px",
    boxShadow: activo
      ? "0 6px 16px rgba(0,0,0,0.25)" 
      : "0 4px 12px rgba(0,0,0,0.15)",
    textAlign: "center",
    fontWeight: activo ? "bold" : "normal",
    border: activo ? "2px solid #388E3C" : "1px solid #ccc",
    transition: "all 0.3s ease",
  };

  return (
    <div style={estilos}>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
      <p><b>Estado:</b> {activo ? "Activo ✅" : "Inactivo ❌"}</p>
    </div>
  );
}
