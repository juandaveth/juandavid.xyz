// Cotización APES-X para Grupo Interviales. BORRADOR INTERNO.
// Precio = base del programa + valor por taller × número de talleres.
// Con 5 talleres da $10.000.000, la cifra del documento original.
window.PROGRAMA = {
  borrador: "Borrador interno para revisar con el equipo APES-X. No enviar al cliente.",
  whatsapp: "573014870542",

  empresa: {
    nombre: "APES-X S.A.S.",
    nit: "901804381-0",
    direccion: "Calle 75A # 75-110, Medellín, Colombia",
    correo: "gerencia@apes-x.co",
    telefono: "+57 301-4870542",
  },
  numero: "COT-2026-001",
  fecha: "2026-11-05",
  vigenciaDias: 30,
  responsable: "Equipo APES-X",

  cliente: {
    nombre: "Grupo Interviales S.A.S.",
    nit: "900842466-6",
    atencion: "Área Administrativa",
    sede: "Medellín · Calle 48B # 66-37 Of. 202",
  },
  proyecto: "Laboratorio de IA aplicada · Fase 1",
  modalidad: "Piloto",
  resumen:
    "Un programa de talleres de cocreación en el que el equipo de Interviales aprende a usar IA trabajando sobre sus propias tareas. Cada taller termina con algo que el equipo ya puede usar al día siguiente, y el programa cierra con una hoja de ruta para escalar lo que funcionó.",

  precio: { base: 2500000, porTaller: 1500000 },
  iva: 0.19,
  duracionTaller: "3 horas",

  sesionInicial: {
    nombre: "Sesión inicial de diagnóstico",
    duracion: "3 horas",
    incluye: [
      "Conocer al equipo y mapear las tareas que más tiempo consumen.",
      "Encuesta corta de uso actual de IA (línea base para medir el avance).",
      "Propuesta de qué talleres priorizar.",
    ],
    nota: "No tiene costo ni compromete la contratación del programa.",
  },

  talleres: [
    {
      id: "t1",
      nucleo: true,
      nombre: "De copiar y pegar a trabajar con sus documentos",
      objetivo: "Que cada persona sepa pedirle a la IA lo que necesita y revisar lo que le entrega.",
      entregable: "Biblioteca de prompts de Interviales (versión 1) con las primeras plantillas por área.",
    },
    {
      id: "t2",
      nucleo: true,
      nombre: "Pliegos sin requisitos perdidos",
      objetivo: "Redactar, resumir y revisar documentos reales del área: informes, correos, actas, contratos.",
      entregable: "Plantillas de documentos frecuentes y una guía de revisión para no aceptar errores de la IA.",
    },
    {
      id: "t3",
      nucleo: true,
      nombre: "Correo y correspondencia con plazos",
      objetivo: "Analizar, limpiar y presentar datos de la operación sin depender de fórmulas complejas.",
      entregable: "Un análisis real hecho en el taller y una guía paso a paso para repetirlo.",
    },
    {
      id: "t4",
      nucleo: false,
      nombre: "Informes mensuales en menos tiempo",
      objetivo: "Crear asistentes con el conocimiento propio de Interviales (procedimientos, normas, documentos).",
      entregable: "Un asistente funcionando para una tarea prioritaria, con instrucciones para mantenerlo.",
    },
    {
      id: "t5",
      nucleo: false,
      nombre: "De la obra a la bitácora y el acta",
      objetivo: "Elegir un proceso repetitivo y automatizarlo de punta a punta.",
      entregable: "Un flujo piloto documentado, con el tiempo que ahorra medido.",
    },
    {
      id: "t6",
      nucleo: true,
      cierre: true,
      nombre: "Uso responsable y hoja de ruta",
      objetivo: "Acordar reglas de uso y decidir qué escalar después del piloto.",
      entregable: "Política de uso responsable de IA y hoja de ruta de 90 días con los casos priorizados por impacto y esfuerzo.",
    },
  ],

  transversales: [
    "Diagnóstico de dónde la IA aporta más en la operación (a partir de la sesión inicial).",
    "Materiales y guías de cada taller, en un solo lugar para consultar después.",
    "Medición antes y después: uso de IA y tiempo ahorrado en las tareas trabajadas.",
    "Informe final para la dirección con resultados y recomendaciones.",
  ],

  condiciones: [
    "Forma de pago: 50% a la firma de la cotización y 50% al cierre del programa.",
    "Garantía: si un taller no termina con su entregable, se repite sin costo.",
    "Tiempo estimado: 1 a 2 semanas de preparación y un programa de 5 a 8 semanas, según el número de talleres.",
    "La sesión inicial de 3 horas no tiene costo ni compromete la contratación del programa.",
    "Valores en pesos colombianos (COP); no incluyen IVA. De aplicar, se adiciona a la tarifa general del 19%.",
  ],
};
