
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 text-gray-900 font-sans px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-10">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-red-600">Nathaly Monsalve</h1>
          <p className="text-lg mt-2 text-gray-600 font-light">
            QA Funcional | Validación de APIs | Automatización | SQL | ISTQB en proceso
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/Nathalyml24/Portafolio-Nath-QA/NathalyMonsalve_CV_QA_SoftwareTester"
              download
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            >
              Descargar CV
            </a>
            <a
              href="https://www.linkedin.com/in/nathaly-monsalve-llanos-487641185/"
              target="_blank"
              className="px-6 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-50 transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Sobre mí</h2>
          <p>
            Ingeniera de sistemas con más de 4 años de experiencia en control de calidad de software,
            especializada en pruebas funcionales, validación de integraciones y automatización básica con Postman y Selenium.
            He trabajado en sectores como banca y seguros, con sólidos conocimientos en SQL, Jira y normativas SBS.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Experiencia Profesional</h2>
          <ul className="list-disc list-inside">
            <li><strong>Credinka (2022–2024):</strong> QA en proyectos Topaz, AYNI, Cartera Digital. Pruebas funcionales, APIs, SQL.</li>
            <li><strong>Código de Barras Perú (2020–2022):</strong> QA funcional en sistemas de almacén, apps móviles, validación de asistencia.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Portafolio Técnico</h2>
          <ul className="list-disc list-inside">
            <li>Casos de prueba funcionales (simulados)</li>
            <li>Pruebas de API con Postman</li>
            <li>Automatización básica con Selenium</li>
            <li>Consultas SQL</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Contacto</h2>
          <p>📧 nathalymonsalv@gmail.com</p>
          <p>📞 +51 947 491 493</p>
          <p>📍 Lima, Perú</p>
        </motion.section>
      </div>
    </main>
  );
}
