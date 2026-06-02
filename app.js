const data = {
  quickLinks: [
    ["#emergencia", "Emergencia"],
    ["#documentos", "PDF oficiales"],
    ["#interferencias", "DUVRI"],
    ["#riesgos", "Trabajos en altura"],
    ["#equipos", "Carretillas"],
    ["#dpi", "EPI"],
    ["#agenda", "Cronograma"],
    ["#contactos", "Contactos"],
  ],
  emergency: [
    {
      title: "Incendio o calamidad",
      phone: "115",
      body: [
        "Avisar al equipo contra incendios/security y a Producción.",
        "Evacuar hacia el punto de reunion indicado por security.",
        "Cortar alimentaciones eléctricas si es seguro hacerlo.",
        "No atacar el fuego si no hay via de fuga libre.",
        "Esperar a los bomberos fuera de la zona de obra y liberar el acceso.",
      ],
    },
    {
      title: "Malestar o accidente grave",
      phone: "118",
      body: [
        "Llamar al servicio público de emergencias sanitarias o avisar al personal paramédico con ambulancia presente en obra.",
        "Indicar si la persona esta consciente y respira.",
        "Dar nombre del accidentado, número de heridos, tipo de accidente y ubicación exacta.",
        "Enviar a alguien a recibir la ambulancia y mantener el recorrido libre.",
      ],
    },
    {
      title: "Numero unico de emergencias",
      phone: "112",
      body: [
        "Usar si no se sabe que servicio activar o si la situacion incluye varios riesgos.",
        "Dar dirección: Via dell'Aeronautica, 17 - 42122 Reggio nell'Emilia.",
        "No colgar hasta que el operador lo indique.",
      ],
    },
    {
      title: "Orden de evacuación",
      phone: "112",
      body: [
        "La evacuación general se activa por el Coordinador General, coordinado con la Sala COS.",
        "Mantener la calma, no correr, no gritar y dirigir a las personas hacia la salida practicable más cercana.",
        "No circular en sentido contrario por las vías de evacuación.",
        "Ayudar primero a personas con movilidad reducida o en dificultad.",
      ],
    },
    {
      title: "Viento y clima adverso",
      phone: "112",
      body: [
        "El límite global de viento para las estructuras indicado en el plan ERT es 50 km/h.",
        "Si se superan 35 km/h tres veces en 10 minutos: avisar a dirección de producción.",
        "Si se superan 45 km/h tres veces en 10 minutos: apoyar los elementos suspendidos móviles en un plano horizontal estable.",
        "Si se superan 50 km/h tres veces en 10 minutos: abandonar el área alrededor de la estructura.",
      ],
    },
    {
      title: "Objeto sospechoso u orden público",
      phone: "112",
      body: [
        "No tocar, mover ni acercarse al objeto sospechoso.",
        "Informar sin atraer la atención del público al coordinador de área o responsable de seguridad.",
        "No iniciar acciones por cuenta propia; esperar instrucciones de seguridad o fuerzas del orden.",
        "Si se evacúa, usar rutas alejadas del objeto o zona de riesgo.",
      ],
    },
  ],
  documents: [
    {
      title: "PSC - Plan de Seguridad y Coordinación",
      href: "./assets/psc-elrow-town-2026.pdf",
      body: [
        "Documento base de seguridad para montaje, desmontaje, trabajos en altura, maquinaria, EPI, señalización y emergencias de obra.",
        "Emisión indicada en el documento: 25/05/2026.",
      ],
    },
    {
      title: "DUVRI - Riesgos interferenciales",
      href: "./assets/duvri-elrow-town-italy-iren-park-060626.pdf",
      body: [
        "Documento de coordinación de riesgos por interferencias entre empresas, vehículos, peatones, cargas, electricidad, incendio y ruido.",
        "Incluye datos de gestión del evento y teléfonos de emergencia.",
      ],
    },
    {
      title: "ERT - Plan de Gestión de Emergencias",
      href: "./assets/ert-piano-emergenza-iren-park-060626.pdf",
      body: [
        "Plan específico de emergencia para el evento: seguridad, evacuación, incendio, clima adverso, viento, sismo, orden público y emergencias médicas.",
        "Incluye coordinadores, Sala COS, seguridad, antincendio y servicio sanitario.",
      ],
    },
  ],
  summary: [
    {
      title: "Obra",
      body: [
        "Construccion del palco, ground support y service de audio, video y luces para ELROW TOWN 2026.",
        "Trabajos no sujetos a permiso de construccion segun el PSC.",
      ],
    },
    {
      title: "Ubicacion",
      body: [
        "Iren Green Park - Campovolo, Via dell'Aeronautica 17, Reggio Emilia.",
        "Propiedad: Comune di Reggio nell'Emilia, concesionario C.VOLO SPA.",
      ],
    },
    {
      title: "Acceso",
      body: [
        "Acceso solo con pase nominativo entregado por la organización.",
        "Solo el personal incluido en las listas de empresas y subcontratas puede acceder a la zona de obra.",
      ],
    },
    {
      title: "Servicios",
      body: [
        "Personal de vigilanza/security presente en accesos.",
        "Personal paramédico con ambulancia durante todas las fases de montaje y desmontaje.",
        "El Plan ERT prevé 300 operadores totales de safety/security/asistencia durante el evento, con 40 personas en equipo antincendio y 15 para artistas/backstage.",
      ],
    },
    {
      title: "Gestión de seguridad del evento",
      body: [
        "Responsable de seguridad y Coordinador General: Luca Saviolo.",
        "Vicecoordinador General: Giacomo Bonfiglio.",
        "Los coordinadores de área y la Sala COS canalizan las comunicaciones de emergencia durante el evento.",
      ],
    },
    {
      title: "Riesgos presentes",
      body: [
        "Inversion por vehiculos, caida de altura, incendio/explosion, electrocucion y ruido.",
        "No se prevén excavaciones, riesgo de ahogamiento ni líneas aéreas desnudas en tensión.",
      ],
    },
    {
      title: "Responsables PSC",
      body: [
        "CSP/CSE y dirección de estructuras: Franco Zamparo.",
        "Proyecto/cálculo de estructuras: Ing. Pietro Lotti.",
      ],
    },
  ],
  risks: [
    {
      title: "Trabajos en altura",
      level: "high",
      score: "R 4",
      exposed: "Rigger, scaff y personal bajo zonas elevadas",
      hazards: ["Caída > 2 m", "Síndrome de suspensión", "Efecto péndulo", "Caída de herramientas", "Viento, lluvia o baja visibilidad"],
      controls: ["Formación específica e idoneidad médica", "Sistema anticaídas, doble cabo o equivalente", "Bolsa de rescate disponible", "Zona inferior segregada"],
      ppe: ["Casco con barboquejo", "Arnés integral", "Conectores y absorbedor", "Calzado adherente", "Guantes"],
    },
    {
      title: "Rigging y cargas suspendidas",
      level: "high",
      score: "R 4",
      exposed: "Riggers, técnicos, producción y personal de paso",
      hazards: ["Caída de cargas", "Fallo de anclaje", "Error en rigging plot", "Trabajo simultáneo bajo carga"],
      controls: ["Rigging plot verificado", "Sistemas certificados", "No pasar bajo cargas", "Vigilancia del rigger en tierra"],
      ppe: ["Casco", "Calzado de seguridad", "Arnés si hay altura", "Guantes"],
    },
    {
      title: "Carretillas elevadoras y vehículos",
      level: "medium",
      score: "R 3",
      exposed: "Todo el personal de obra",
      hazards: ["Atropello", "Golpes", "Aplastamiento", "Caída de carga", "Vuelco"],
      controls: ["Solo conductores formados", "Velocidad a paso de persona o máximo 5 km/h", "Ayudante en tierra con baja visibilidad", "Cinturón obligatorio"],
      ppe: ["Alta visibilidad", "Casco", "Calzado de seguridad", "Guantes para carga"],
    },
    {
      title: "Electricidad y generadores",
      level: "medium",
      score: "R 3",
      exposed: "Electricistas, técnicos y personal de paso",
      hazards: ["Electrocución", "Cables en zonas de paso", "Cortocircuito", "Incendio", "Repostaje de gasóleo"],
      controls: ["Protección magnetotérmica/diferencial", "IP mínimo 42", "Canaletas pasacables", "Corte rápido señalizado", "No repostar con generador en marcha"],
      ppe: ["Calzado aislante", "Guantes", "Casco"],
    },
    {
      title: "Audio, luces y video",
      level: "medium",
      score: "R 3",
      exposed: "Técnicos, mozos de carga, carretilleros y producción",
      hazards: ["Interferencias entre empresas", "Caída de materiales", "Electrocución", "Sobreesfuerzo", "Ruido > 80 dB(A)"],
      controls: ["Coordinación de fases", "Montaje en suelo cuando sea posible", "Delimitar zonas de izado", "Empujar flight cases, no tirar de ellos en rampas"],
      ppe: ["Casco", "Calzado de seguridad", "Guantes", "Protectores auditivos en pruebas/show"],
    },
    {
      title: "Movimiento manual de cargas",
      level: "medium",
      score: "R 2",
      exposed: "Mozos de carga, técnicos, scaff y riggers",
      hazards: ["Lesiones dorsolumbares", "Aplastamiento de manos/pies", "Golpes por flight cases", "Tropiezos en zonas de paso"],
      controls: ["Dividir cargas", "Usar varios operadores en pesos altos", "Mantener vías limpias", "Un responsable coordina los movimientos conjuntos"],
      ppe: ["Guantes", "Calzado de seguridad", "Casco si hay cargas elevadas"],
    },
    {
      title: "Ruido en pruebas y show",
      level: "medium",
      score: "Lex 80-85 dB(A)",
      exposed: "Personal no protegido por sistemas de comunicacion/casco",
      hazards: ["Perdida auditiva temporal o permanente", "Fatiga", "Dificultad para percibir avisos"],
      controls: ["Evaluación de ruido por empresa", "Información/formación", "Reducir exposición y permanencia junto al sistema PA"],
      ppe: ["Protectores auditivos obligatorios durante pruebas y show si no se trabaja con auriculares/casco"],
    },
    {
      title: "Incendio",
      level: "medium",
      score: "Bajo",
      exposed: "Todo el personal",
      hazards: ["Cortocircuitos", "Generadores", "Combustible", "Contenedores y material plástico/madera"],
      controls: ["Extintores: 3 de polvo ABC de 9 kg y 1 de CO2", "Security formada", "No fumar donde esté prohibido", "No bloquear equipos contra incendios"],
      ppe: ["Según intervención autorizada", "Evacuación si no se controla rápido"],
    },
  ],
  interferences: [
    {
      title: "Circulación y maniobras",
      body: [
        "Conducir a velocidad contenida y respetar los recorridos dedicados.",
        "El DUVRI indica 10 km/h como límite interior de instalación; en maniobras próximas a trabajo, circular a paso de persona.",
        "En marcha atrás, espacios reducidos o baja visibilidad, solicitar ayuda de personal en tierra.",
        "No aparcar ni permanecer en áreas de carga/descarga delimitadas.",
      ],
    },
    {
      title: "Desplazamientos a pie",
      body: [
        "Caminar por recorridos peatonales señalizados o por el margen de las vías transitables.",
        "No permanecer detrás de vehículos en maniobra o parada.",
        "No tocar recipientes, materiales, equipos u objetos presentes sin autorización.",
        "Mantener pasos, vías de fuga y zonas de trabajo limpias y ordenadas.",
      ],
    },
    {
      title: "Caída de materiales desde altura",
      body: [
        "Antes de iniciar trabajos en altura, delimitar adecuadamente el área inferior.",
        "No iniciar la tarea si hay personas bajo la zona de intervención.",
        "No pasar ni permanecer bajo el radio de acción de equipos de elevación.",
        "Usar medios de izado e imbragado adecuados para evitar caída accidental de cargas.",
      ],
    },
    {
      title: "Incendio y sustancias inflamables",
      body: [
        "Prohibido fumar o encender fuego en toda el área de intervención.",
        "No usar llamas libres sin autorización previa.",
        "Solicitar retirada de sustancias inflamables de la zona de trabajo.",
        "En derrame accidental, circunscribir y recoger el líquido con material absorbente.",
      ],
    },
    {
      title: "Electricidad 380/230 V",
      body: [
        "No acceder a cabinas, zonas confinadas, motores o cuadros sin autorización.",
        "No abrir equipos conectados ni improvisar reparaciones.",
        "No maniobrar cuadros eléctricos sin autorización ni trabajar en partes en tensión.",
        "En incendio eléctrico, cortar alimentación y usar polvo o CO2; no usar agua.",
      ],
    },
    {
      title: "Ruido y protección auditiva",
      body: [
        "En trabajos o zonas con ruido igual o superior a 80 dB(A), usar protectores auditivos.",
        "La protección puede ser arco, orejeras o tapones según evaluación de la empresa.",
        "Reducir permanencia junto a fuentes sonoras intensas durante pruebas y show.",
      ],
    },
  ],
  phases: [
    ["01", "Ground Support Space Roof y palco", "Montaje de estructura de palco y plano de trabajo. Requiere proyecto, montaje conforme y estabilidad verificada."],
    ["02", "Rigging estructural", "Marcaje en suelo y colocación de polipastos eléctricos. Intervienen riggers de gira, riggers locales, mozos de carga y carretilleros."],
    ["03", "Luces", "Montaje de truss, fijación de aparatos, cableado y elevación a la cota prevista."],
    ["04", "Video", "Montaje de ring de truss en suelo, conexión a polipastos, elevación progresiva y colocación de módulos LED."],
    ["05", "Audio", "Posicionamiento de cluster bajo flying bar, asegurado, cableado, unión a módulos sucesivos y elevación gradual."],
    ["06", "Escenografía", "Elementos escenográficos y trusses con motores de velocidad variable."],
    ["07", "Efectos especiales", "Láser, humo, niebla, ventiladores y pirotecnia según documentación técnica de la empresa instaladora."],
    ["08", "Generadores", "Ubicación de generador, tendido manual de cables y cable cross hacia puntos de conexión."],
    ["09", "Líneas de vida", "Instalación de líneas verticales y horizontales necesarias para montaje, desmontaje y mantenimiento."],
  ],
  equipment: [
    {
      title: "Herramientas eléctricas portátiles",
      body: ["Comprobar estado de cables, protecciones y pulsadores.", "Usar diferencial y protección contra daños mecánicos.", "En radial: no retirar la guarda, no frenar el disco a mano y usar el disco adecuado."],
    },
    {
      title: "Escaleras de mano",
      body: ["Usarlas prioritariamente como acceso, no como puesto de trabajo.", "Deben estar fijadas o sujetas al pie si no se pueden amarrar.", "Si se trabaja a más de 2 m, usar arnés anclado a punto estable."],
    },
    {
      title: "Carretillas elevadoras",
      body: ["Uso solo por personal autorizado y formado.", "Cinturón obligatorio.", "No transportar pasajeros ni permitir paso bajo la carga.", "Revisar frenos, dirección, elevación, luces y avisador acústico."],
    },
    {
      title: "Manipulador telescópico con plataforma",
      body: ["Situarlo solo sobre terreno nivelado y consistente.", "Usar estabilizadores y placas de reparto si procede.", "Suspender maniobras con viento fuerte, baja visibilidad o personas en trayectoria."],
    },
    {
      title: "Autogrúa",
      body: ["Tiros verticales exclusivamente.", "Maniobras graduales para evitar oscilación.", "Señalista experto si no hay visibilidad completa.", "Nadie bajo el radio de acción."],
    },
    {
      title: "Bolsa de rescate para altura",
      body: ["Debe estar disponible cerca de la estructura.", "Incluye anillos EN 795, mosquetones EN 362, ID'S EN 341, cuerda 10,5 mm 100 m EN 1891 y Jumar EN 567.", "Uso por personal formado en rescate."],
    },
  ],
  ppe: [
    ["Casco", "Siempre en zona de obra. Con barboquejo para trabajos en altura.", "CA"],
    ["Calzado de seguridad", "Siempre. Suela antiperforación y puntera contra aplastamiento.", "SB"],
    ["Guantes", "Siempre en manipulacion de materiales, truss, Layher, carga y descarga.", "GU"],
    ["Arnés anticaídas", "Obligatorio en altura. No usar material deportivo ni cinturón simple como sustituto.", "AR"],
    ["Doble cordino / disipador", "Para progresion y permanencia segura en estructuras.", "DC"],
    ["Protectores auditivos", "Durante pruebas/show o tareas con ruido.", "PA"],
    ["Gafas o pantalla", "Con herramientas que proyecten fragmentos o polvo.", "GA"],
    ["Alta visibilidad", "Carga/descarga, maniobras de vehículos y asistencia a carretillas elevadoras.", "AV"],
  ],
  schedule: [
    ["25-28 mayo", "Arranque de producción, palco, mozos de carga, estructura y primeras fases de generador/rigging."],
    ["29 mayo-2 junio", "Rigging, luces, audio, video, escenografía, backline, generadores y cableado."],
    ["3-5 junio", "Finalización de montaje, pruebas y preparación del show."],
    ["6 junio", "Show. Inicio de desmontaje por la noche."],
    ["7-10 junio", "Desmontaje de audio, luces, video, escenografía, palco, estructuras y recuperación de cables."],
  ],
  contacts: [
    { title: "CSE / Dirección estructuras", body: ["Franco Zamparo", "Mob. 347 9102308", "franco.zamparo@gmail.com"] },
    { title: "Proyecto estructuras", body: ["Ing. Pietro Lotti", "Mob. 348 923 8652 - 351 590 1969", "pietro.lotti.ingegneria@gmail.com"] },
    { title: "VTècnics", body: ["Josep Maria Serra", "josepmaria@vtecnics.com", "Rol PSC: service español"] },
    { title: "Responsable seguridad evento", body: ["Luca Saviolo", "392 2495502", "Coordinador General de seguridad según Plan ERT"] },
    { title: "Vicecoordinador seguridad", body: ["Giacomo Bonfiglio", "377 3127239", "Segundo en línea de mando según Plan ERT"] },
    { title: "Collegamento COS", body: ["Alberto Bernazzi", "340 6298623", "Enlace con Sala COS según Plan ERT"] },
    { title: "Organización EM TOUR 2 SL", body: ["Alex Castillo: +34 659273956", "Irina Núñez: +34 657066100"] },
    { title: "Comune Reggio Emilia", body: ["Piazza Prampolini, 1", "0522 456111", "comune.informa@comune.re.it"] },
    { title: "Polizia municipale", body: ["Emergencias/urgencias: 0522 4000", "polizia.municipale.reggioemilia@pec.municipio.re.it"] },
    { title: "ENEL", body: ["Pronto intervento elettricita", "800 900 800"] },
    { title: "Carabinieri Reggio Emilia", body: ["Corso Benedetto Cairoli, 8", "0522 5381"] },
    { title: "Emergencias", body: ["112 número único", "115 bomberos", "118 emergencias sanitarias"] },
  ],
  checklist: [
    "Tengo pase nominativo y autorización de acceso.",
    "He leído las instrucciones de mi responsable o encargado para la tarea de hoy.",
    "Llevo casco, calzado de seguridad y guantes adecuados.",
    "Si trabajo en altura, llevo arnés integral, doble cabo/conectores y conozco el punto de anclaje.",
    "La zona bajo trabajos en altura o cargas suspendidas esta delimitada.",
    "No hay personal no autorizado bajo cargas, polipastos, truss o autogrúa.",
    "Los cables en paso estan protegidos con canaleta/cable cross.",
    "Las vias de paso estan limpias, sin flight cases abandonados en rampas.",
    "Sé quién es el responsable de emergencia y dónde está el punto de reunión.",
    "Conozco los teléfonos 112, 115 y 118 y la dirección de la obra.",
    "Sé que para evacuación, viento, objeto sospechoso u orden público debo seguir instrucciones de Coordinador de Área/Sala COS.",
    "No atravieso áreas de carga/descarga ni zonas de maniobra de vehículos.",
    "No toco cuadros eléctricos, materiales o equipos que no correspondan a mi tarea autorizada.",
    "Si hay pruebas/show, llevo protección auditiva si corresponde.",
    "No realizo maniobras fuera de mi competencia o formación.",
  ],
};

const $ = (selector) => document.querySelector(selector);

function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function render() {
  $("#quickLinks").innerHTML = data.quickLinks.map(([href, label]) => `<a href="${href}">${label}</a>`).join("");

  $("#emergencyGrid").innerHTML = data.emergency
    .map(
      (item) => `
        <article class="emergency-card searchable">
          <span class="tag">Actuacion inmediata</span>
          <h3>${item.title}</h3>
          <a class="phone" href="tel:${item.phone}">${item.phone}</a>
          ${list(item.body)}
        </article>
      `,
    )
    .join("");

  $("#summaryGrid").innerHTML = data.summary.map((item) => card(item)).join("");
  $("#documentsGrid").innerHTML = data.documents.map((item) => documentCard(item)).join("");

  $("#riskGrid").innerHTML = data.risks
    .map(
      (item) => `
        <article class="risk-card ${item.level} searchable">
          <div>
            <span class="tag">${item.exposed}</span>
            <h3>${item.title}</h3>
          </div>
          <div class="risk-meta">
            <span class="chip ${item.level === "high" ? "red" : item.level === "medium" ? "amber" : "green"}">${item.score}</span>
            ${item.ppe.slice(0, 3).map((ppe) => `<span class="chip">${ppe}</span>`).join("")}
          </div>
          <div><strong>Riesgos</strong>${list(item.hazards)}</div>
          <div><strong>Medidas</strong>${list(item.controls)}</div>
          <div><strong>EPI</strong>${list(item.ppe)}</div>
        </article>
      `,
    )
    .join("");

  $("#interferenceGrid").innerHTML = data.interferences.map((item) => card(item)).join("");

  $("#phaseList").innerHTML = data.phases
    .map(
      ([num, title, body]) => `
        <article class="phase searchable">
          <div class="number">${num}</div>
          <div>
            <span class="tag">Macrofase ${num}</span>
            <h3>${title}</h3>
            <p>${body}</p>
          </div>
        </article>
      `,
    )
    .join("");

  $("#equipmentGrid").innerHTML = data.equipment.map((item) => card(item)).join("");

  $("#ppeGrid").innerHTML = data.ppe
    .map(
      ([title, body, icon]) => `
        <article class="ppe searchable">
          <div class="icon" aria-hidden="true">${icon}</div>
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `,
    )
    .join("");

  $("#schedule").innerHTML = data.schedule
    .map(
      ([date, text], index) => `
        <div class="timeline-row searchable">
          <strong>${date}</strong>
          <div>
            <div class="bar" style="width:${55 + index * 9}%"></div>
            <p>${text}</p>
          </div>
        </div>
      `,
    )
    .join("");

  $("#contactsGrid").innerHTML = data.contacts.map((item) => card(item)).join("");
  renderChecklist();
}

function card(item) {
  return `
    <article class="card searchable">
      <h3>${item.title}</h3>
      ${list(item.body)}
    </article>
  `;
}

function documentCard(item) {
  return `
    <article class="card document-card searchable">
      <h3>${item.title}</h3>
      ${list(item.body)}
      <a class="button" href="${item.href}" target="_blank" rel="noreferrer">Abrir PDF</a>
    </article>
  `;
}

function renderChecklist() {
  const saved = JSON.parse(localStorage.getItem("vtecnics-checklist") || "{}");
  $("#checklistItems").innerHTML = data.checklist
    .map(
      (item, index) => `
        <label class="check-item searchable">
          <input type="checkbox" data-check="${index}" ${saved[index] ? "checked" : ""} />
          <span>${item}</span>
        </label>
      `,
    )
    .join("");
}

function bindEvents() {
  $("#searchInput").addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll(".searchable").forEach((node) => {
      node.classList.toggle("hidden", query && !node.textContent.toLowerCase().includes(query));
    });
  });

  $("#checklistItems").addEventListener("change", (event) => {
    if (!event.target.matches("[data-check]")) return;
    const saved = JSON.parse(localStorage.getItem("vtecnics-checklist") || "{}");
    saved[event.target.dataset.check] = event.target.checked;
    localStorage.setItem("vtecnics-checklist", JSON.stringify(saved));
  });

  $("#resetChecklist").addEventListener("click", () => {
    localStorage.removeItem("vtecnics-checklist");
    renderChecklist();
  });

  $("#printPage").addEventListener("click", () => window.print());
}

render();
bindEvents();
