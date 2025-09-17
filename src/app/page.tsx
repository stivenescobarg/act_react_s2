import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";
import TarjetaDinamica from "./components/TarjetaDinamica";
import TarjetaTailwind from "./components/TarjetaTailwind";

export default function Home() {
  return (
    <main className="p-8 space-y-12">
      {/* === Sección 1: Tarjetas Globales === */}
      <section>
        <h1 className="text-2xl font-bold mb-6">Tarjetas con Estilos Globales (CSS)</h1>
        <div className="flex gap-4 flex-wrap">
          <TarjetaGlobal
            titulo="Tarjeta 1 - Azul"
            contenido="Ejemplo de tarjeta reutilizable con estilos globales."
            color="blue"
          />
          <TarjetaGlobal
            titulo="Tarjeta 2 - Roja"
            contenido="El color se puede cambiar con props."
            color="red"
          />
        </div>
      </section>

      {/* === Sección 2: Tarjetas con Módulos CSS === */}
      <section>
        <h1 className="text-2xl font-bold mb-6">Tarjetas con Módulos CSS</h1>
        <div className="flex gap-4 flex-wrap">
          <TarjetaModulo
            nombre="Curso de React"
            descripcion="Aprende a crear aplicaciones dinámicas con React y Next.js."
            categoria="Programación"
            variante="primaria"
          />
          <TarjetaModulo
            nombre="Instructor: Jhon Freddy"
            descripcion="Diseñando interfaces atractivas y usables."
            categoria="Diseño"
            variante="secundaria"
          />
          <TarjetaModulo
            nombre="Stiven Escobar Gómez"
            descripcion="3144585 - SENA"
            categoria="Aprendiz"
            variante="exito"
          />
        </div>
      </section>

      {/* === Sección 3: Tarjetas Dinámicas con Inline Styles === */}
      <section>
        <h1 className="text-2xl font-bold mb-6">Tarjetas Dinámicas con Estilos en Línea</h1>
        <div className="flex gap-4 flex-wrap">
          <TarjetaDinamica
            titulo="Tarjeta Activa"
            contenido="Esta tarjeta está resaltada porque está activa."
            colorFondo="#2196F3"
            colorTexto="#ffffff"
            ancho="320px"
            activo={true}
          />
          <TarjetaDinamica
            titulo="Tarjeta Inactiva"
            contenido="Esta tarjeta conserva sus estilos originales."
            colorFondo="#eeeeee"
            colorTexto="#333333"
            ancho="280px"
            activo={false}
          />
        </div>
      </section>

      {/* === Sección 4: Tarjeta con Tailwind CSS === */}
      <section>
        <h1 className="text-2xl font-bold mb-6">Tarjeta con Tailwind CSS</h1>
        <div className="flex gap-4 flex-wrap">
          <TarjetaTailwind
            titulo="Tecnología"
            descripcion="Últimos avances en innovación y desarrollo tecnológico."
            imagen="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvH2LYqCe5cEBIX2-2J-PSMj8q8eXnhdOhs8x7tjnGTpUUNovqQKI7VeheOAgh6WEF3KZby2TVu9fym3Wyo-OECEVyntJ5WzWcggmiGHBzKk980GpK92syg2BWd7zcMMj_bqYTwVS1IDX4Mh3bIi3ne6jNKZaBxPuUDQFSK6q0nhJUKFGdnuvRfZExZw/w1600/React.jpg"
            etiqueta="Ciencia"
          />
        </div>
      </section>
    </main>
  );
}
