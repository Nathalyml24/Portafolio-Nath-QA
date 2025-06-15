
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-10">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-red-600">Nathaly Monsalve</h1>
          <p className="text-md mt-2 text-gray-600">
            QA Funcional | Validación de APIs | Automatización Básica | SQL | ISTQB en proceso
          </p>
          <a href="/NathalyMonsalve_CV_QA_SoftwareTester.pdf" download className="inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
            Descargar CV
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Sobre mí</h2>
          <p>
            Ingeniera de sistemas con más de 4 años de experiencia en control de calidad de software,
            especializada en pruebas funcionales, validación de integraciones y automatización básica con Postman y Selenium.
            He trabajado en sectores como banca y seguros, con sólidos conocimientos en SQL, Jira y normativas SBS.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Experiencia Profesional</h2>
          <ul className="list-disc list-inside">
            <li><strong>Credinka (2022–2024):</strong> QA en proyectos Topaz, AYNI, Cartera Digital. Pruebas funcionales, APIs, SQL.</li>
            <li><strong>Código de Barras Perú (2020–2022):</strong> QA funcional en sistemas de almacén, apps móviles, validación de asistencia.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Portafolio Técnico</h2>
          <ul className="list-disc list-inside">
            <li>Casos de prueba funcionales (simulados)</li>
            <li>Pruebas de API con Postman</li>
            <li>Automatización básica con Selenium</li>
            <li>Consultas SQL</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Contacto</h2>
          <p>📧 nathalymonsalv@gmail.com</p>
          <p>📞 +51 947 491 493</p>
          <p>📍 Lima, Perú</p>
        </section>
      </div>
    </main>
  );
}
