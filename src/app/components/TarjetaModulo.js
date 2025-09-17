import styles from "./TarjetaModulo.module.css";  // 👈 IMPORTANTE

export default function TarjetaModulo({
  nombre,
  descripcion,
  categoria,
  variante = "primaria",
}) {
  // Mapeo de variantes a sus clases
  const variantes = {
    primaria: styles.tarjetaPrimaria,
    secundaria: styles.tarjetaSecundaria,
    exito: styles.tarjetaExito,
  };

  // Composición de clases (base + variante elegida)
  const tarjetaClass = `${styles.tarjeta} ${variantes[variante] || ""}`;

  return (
    <div className={tarjetaClass}>
      <div className={styles.encabezado}>
        <h2 className={styles.titulo}>{nombre}</h2>
        <span className={styles.categoria}>{categoria}</span>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
}
