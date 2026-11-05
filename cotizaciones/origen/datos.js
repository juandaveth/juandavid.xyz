// Cotización: Origen Inmobiliaria (Astrid Dayanna Suárez)
// Precio de cada funcionalidad = horas × tarifa. Para una cotización nueva,
// copia esta carpeta y cambia solo este archivo.
window.COTIZACION = {
  cliente: "Astrid Dayanna Suárez",
  proyecto: "Origen Inmobiliaria",
  resumen:
    "Una plataforma para vender los lotes de Origen en Tuta y Boyacá sin atender a mano a cada interesado: catálogo en línea, panel para administrarlo, enlace automático desde Instagram y, más adelante, seguimiento de compradores y un asistente que responde 24/7.",
  fecha: "2026-11-04",
  validaHasta: "2026-11-19",
  tarifa: 50000, // COP por hora, uso interno para calcular
  whatsapp: "573163566034",

  fases: [
    {
      id: "f1",
      nombre: "Fase 1 · Catálogo y difusión",
      objetivo: "Va por pasos: primero tus lotes en línea, luego tu panel para agregar más, y después la difusión. Cada paso funciona solo y se paga por separado.",
      recomendada: true,
      funcionalidades: [
        {
          id: "f1-lotes",
          nombre: "Tus primeros 5 lotes en línea",
          detalle: "Lo que ven tus compradores. Yo subo los lotes por ti.",
          horas: 11,
          incluye: [
            "Compra y configuración del dominio (origeninmobiliaria.co u otra opción disponible) y del hosting.",
            "Procesamiento con IA de los archivos que me entregues (Excel, PDF, fotos) para crear la ficha de cada lote: dirección, área en m², ubicación, precio, servicios (gas natural, agua, manantiales) y documentos.",
            "Página pública con la marca Origen y el listado de los 5 lotes, pensada primero para el celular.",
            "Página de cada lote con galería de fotos, mapa de ubicación y botón de WhatsApp con el nombre del lote ya escrito.",
          ],
        },
        {
          id: "f1-panel",
          nombre: "Panel para que tú subas los siguientes lotes",
          detalle: "Una página privada para administrar el catálogo sin depender de mí.",
          horas: 5,
          incluye: [
            "Acceso privado solo para ti.",
            "Agregar lotes nuevos, editar, ocultar y marcar como vendido.",
            "Subir y ordenar fotos desde el celular.",
            "Filtros por zona, precio y área en la página pública, para cuando haya más lotes.",
            "Una sesión de capacitación en vivo (1 hora).",
          ],
        },
        {
          id: "f1-captacion",
          nombre: "Formulario de captación de propietarios",
          horas: 2,
          incluye: [
            "Formulario para que propietarios de Tuta y otras zonas ofrezcan sus predios.",
            "Aviso a tu correo cada vez que llega uno nuevo.",
            "Las solicitudes quedan guardadas en el panel.",
          ],
        },
        {
          id: "f1-instagram",
          nombre: "Enlace automático desde Instagram",
          horas: 3,
          incluye: [
            "Configuración de ManyChat conectado a la cuenta de Instagram de Origen.",
            "Automatización por palabra clave: quien comente \"finca\" (u otra palabra) en una publicación o historia recibe por mensaje directo el enlace del lote.",
            "Guía corta para que tú misma cambies la palabra clave y el mensaje.",
          ],
        },
      ],
    },
    {
      id: "f2",
      nombre: "Fase 2 · Seguimiento de compradores (CRM)",
      objetivo: "Que ningún interesado se pierda: saber quién preguntó por qué lote y en qué va cada uno.",
      funcionalidades: [
        {
          id: "f2-registro",
          nombre: "Registro de interesados",
          horas: 6,
          incluye: [
            "Cada consulta desde el catálogo queda guardada con nombre, contacto y lote de interés.",
            "Registro manual rápido para los que llegan por WhatsApp o en persona.",
            "Historial de interacciones por interesado.",
          ],
        },
        {
          id: "f2-embudo",
          nombre: "Tablero del proceso de venta",
          horas: 7,
          incluye: [
            "Etapas: nuevo, información enviada, visita agendada, negociación, cerrado.",
            "Vista por lote: cuántos interesados tiene y en qué etapa está cada uno.",
            "Agenda de visitas con recordatorio a tu correo.",
          ],
        },
        {
          id: "f2-reportes",
          nombre: "Resumen semanal",
          horas: 3,
          incluye: [
            "Correo semanal con interesados nuevos, visitas de la semana y lotes con más consultas.",
          ],
        },
      ],
    },
    {
      id: "f3",
      nombre: "Fase 3 · Asistente de IA en WhatsApp",
      objetivo: "Responder a cualquier hora para que los interesados no se enfríen, y que tú hables solo con los compradores reales.",
      funcionalidades: [
        {
          id: "f3-whatsapp",
          nombre: "Conexión a WhatsApp Business",
          horas: 5,
          incluye: [
            "Alta y verificación del número en la plataforma oficial de WhatsApp Business (Meta).",
            "Conexión con el catálogo para que el asistente siempre use los datos actualizados.",
          ],
        },
        {
          id: "f3-agente",
          nombre: "Asistente 24/7",
          horas: 12,
          incluye: [
            "Responde preguntas sobre precios, áreas, condiciones, servicios y documentos de cada lote.",
            "Hace preguntas para distinguir compradores reales de quienes solo consultan precios.",
            "Te pasa la conversación cuando el interesado está listo o pregunta algo que no sabe.",
            "Ajuste con conversaciones reales durante los 30 días siguientes a la entrega.",
          ],
        },
        {
          id: "f3-informe",
          nombre: "Informe de cada mañana",
          horas: 4,
          incluye: [
            "Mensaje diario con las conversaciones de la noche anterior y los interesados calificados.",
            "Los interesados quedan registrados en el CRM de la Fase 2.",
          ],
        },
      ],
    },
  ],

  recurrentes: [
    {
      concepto: "Dominio .co",
      costo: "USD 30 a 40 al año",
      fase: "Fase 1",
      nota: "Se paga una vez al año al registrador.",
    },
    {
      concepto: "Hosting y base de datos",
      costo: "USD 0 al mes",
      fase: "Fase 1",
      nota: "El plan gratuito alcanza para el volumen inicial. Si el catálogo crece mucho, el siguiente plan cuesta unos USD 25 al mes.",
    },
    {
      concepto: "ManyChat (Instagram)",
      costo: "USD 15 a 39 al mes",
      fase: "Fase 1",
      nota: "Depende del plan vigente al contratar y del número de contactos. ManyChat cambió sus precios en 2026.",
    },
    {
      concepto: "WhatsApp Business (Meta)",
      costo: "Variable, desde USD 0",
      fase: "Fase 3",
      nota: "Responder dentro de las 24 horas a quien escribe primero es gratis. Los mensajes que inicia Origen cuestan entre USD 0,005 y 0,016 cada uno.",
    },
    {
      concepto: "Inteligencia artificial del asistente",
      costo: "USD 5 a 20 al mes (estimado)",
      fase: "Fase 3",
      nota: "Depende del número de conversaciones.",
    },
  ],

  calendario: [
    { fase: "Fase 1 · Catálogo y difusión", semana: "Semana del 9 al 13 de noviembre", nota: "Para empezar el lunes 9 necesito la información que ya tengas de los lotes (Excel, PDF, fotos). Las fotos nuevas las subes tú desde el panel." },
    { fase: "Fase 2 · Seguimiento de compradores", semana: "Semana del 16 al 20 de noviembre" },
    { fase: "Fase 3 · Asistente de IA en WhatsApp", semana: "Semana del 23 al 27 de noviembre" },
  ],

  condiciones: [
    "Cada funcionalidad se paga 50% al aprobarla y 50% al entregarla.",
    "Puedes aprobar fases o funcionalidades por separado; la Fase 1 es la base de las demás.",
    "Cada fase se ejecuta en una semana, con el compromiso de dos reuniones: una de entrega y otra de ajustes. Las dos están incluidas en el precio de cada fase.",
    "Las Fases 2 y 3 son estimados; se confirman al terminar la Fase 1.",
    "Incluye 30 días de ajustes menores después de cada entrega.",
    "Los costos recurrentes los pagas directamente a cada proveedor, a tu nombre. Las cuentas quedan siempre a nombre de Origen.",
    "Valores en pesos colombianos (COP).",
  ],
};
