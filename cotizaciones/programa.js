// Renderiza window.PROGRAMA: cotización de un programa de talleres
// donde el cliente elige cuántos (y cuáles opcionales) toma.
(function () {
  const P = window.PROGRAMA;
  const cop = (n) => "$" + Math.round(n).toLocaleString("es-CO");
  const fecha = (d) => d.toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });
  const emitida = new Date(P.fecha + "T12:00:00");
  const vence = new Date(emitida); vence.setDate(vence.getDate() + P.vigenciaDias);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const opcionales = P.talleres.filter((t) => !t.nucleo);
  const sel = new Set(opcionales.slice(0, 1).map((t) => t.id)); // por defecto: 5 talleres
  const min = P.talleres.length - opcionales.length;
  const max = P.talleres.length;

  document.title = `${P.numero} · ${P.empresa.nombre}`;
  const root = document.getElementById("app");
  root.innerHTML = `
    ${P.borrador ? `<div class="draft">${esc(P.borrador)}</div>` : ""}
    <header>
      <div class="from"><strong>${esc(P.empresa.nombre)}</strong> · NIT ${esc(P.empresa.nit)} · ${esc(P.empresa.direccion)}<br>${esc(P.empresa.correo)} · ${esc(P.empresa.telefono)}</div>
      <h1>${esc(P.proyecto)}</h1>
      <div class="meta">Cotización ${esc(P.numero)} · ${fecha(emitida)} · Válida hasta el ${fecha(vence)} · Modalidad: ${esc(P.modalidad)}</div>
    </header>
    <table class="ficha">
      <tr><th>Cliente</th><td>${esc(P.cliente.nombre)} · NIT ${esc(P.cliente.nit)}</td></tr>
      <tr><th>Atención</th><td>${esc(P.cliente.atencion)}</td></tr>
      <tr><th>Sede</th><td>${esc(P.cliente.sede)}</td></tr>
      <tr><th>Responsable</th><td>${esc(P.responsable)}</td></tr>
    </table>
    <p class="resumen">${esc(P.resumen)}</p>

    <section>
      <div class="fase-head"><h2>Antes de empezar</h2><span class="sub">$0</span></div>
      <div class="item on fijo">
        <div class="item-head"><span class="name">${esc(P.sesionInicial.nombre)}<span class="detalle">${esc(P.sesionInicial.duracion)} · ${esc(P.sesionInicial.nota)}</span></span><span class="price">$0</span></div>
        <ul>${P.sesionInicial.incluye.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>
    </section>

    <section>
      <h2>¿Cuántos talleres?</h2>
      <p class="objetivo">Cada taller dura ${esc(P.duracionTaller)} y se trabaja sobre tareas reales de ${esc(P.cliente.nombre.replace(" S.A.S.", ""))}. Elige entre ${min} y ${max}; los talleres marcados como base van siempre.</p>
      <div class="count" role="group" aria-label="Número de talleres">
        ${Array.from({ length: max - min + 1 }, (_, i) => min + i).map((n) => `<button data-n="${n}">${n} talleres</button>`).join("")}
      </div>
      <div id="talleres"></div>
    </section>

    <section>
      <h2>Incluido en todo el programa</h2>
      <ul class="plain">${P.transversales.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </section>

    <section>
      <h2>Resumen económico</h2>
      <table class="totales">
        <tr><td>Sesión inicial de diagnóstico</td><td>$0</td></tr>
        <tr><td id="lin-prog"></td><td id="val-prog"></td></tr>
        <tr><td>Subtotal</td><td id="val-sub"></td></tr>
        <tr><td>IVA (${Math.round(P.iva * 100)}%, si aplica)</td><td id="val-iva"></td></tr>
        <tr class="grand"><td>Total (COP, IVA incluido si aplica)</td><td id="val-tot"></td></tr>
      </table>
    </section>

    <section>
      <h2>Condiciones</h2>
      <ol class="cond">${P.condiciones.map((c) => `<li>${esc(c)}</li>`).join("")}</ol>
    </section>
    <footer>${esc(P.empresa.nombre)} · ${esc(P.empresa.correo)}</footer>
    <div class="bar"><div class="bar-in">
      <div class="tot"><strong id="total"></strong><span id="anticipo"></span></div>
      <a id="ok" target="_blank" rel="noopener">Aceptar por WhatsApp</a>
    </div></div>`;

  const lista = document.getElementById("talleres");

  function update() {
    const elegidos = P.talleres.filter((t) => t.nucleo || sel.has(t.id));
    const n = elegidos.length;
    const programa = P.precio.base + P.precio.porTaller * n;
    const iva = programa * P.iva;

    root.querySelectorAll(".count button").forEach((b) => b.classList.toggle("on", +b.dataset.n === n));
    let k = 0;
    lista.innerHTML = P.talleres.map((t) => {
      const on = t.nucleo || sel.has(t.id);
      const num = on ? `Taller ${++k}` : "Opcional";
      return `
        <div class="item ${on ? "on" : ""} ${t.nucleo ? "fijo" : ""}" data-id="${t.id}">
          <label class="item-head">
            ${t.nucleo ? "" : `<input type="checkbox" data-id="${t.id}" ${on ? "checked" : ""}>`}
            <span class="name"><span class="paso">${num}${t.nucleo ? " · base" : ""}</span>${esc(t.nombre)}<span class="detalle">${esc(t.objetivo)}</span></span>
          </label>
          <p class="entregable"><strong>Entregable:</strong> ${esc(t.entregable)}</p>
        </div>`;
    }).join("");

    document.getElementById("lin-prog").textContent = `Programa de ${n} talleres (${esc(P.duracionTaller)} c/u)`;
    document.getElementById("val-prog").textContent = cop(programa);
    document.getElementById("val-sub").textContent = cop(programa);
    document.getElementById("val-iva").textContent = cop(iva);
    document.getElementById("val-tot").textContent = cop(programa + iva);
    document.getElementById("total").textContent = cop(programa) + " + IVA";
    document.getElementById("anticipo").textContent = `${n} talleres · 50% a la firma: ${cop(programa / 2)} + IVA`;

    const msg =
      `Hola, desde ${P.cliente.nombre} aceptamos la cotización ${P.numero} (${P.proyecto}) con ${n} talleres:\n` +
      elegidos.map((t, i) => `${i + 1}. ${t.nombre}`).join("\n") +
      `\nValor: ${cop(programa)} + IVA si aplica.`;
    document.getElementById("ok").href = `https://wa.me/${P.whatsapp}?text=${encodeURIComponent(msg)}`;
  }

  root.addEventListener("click", (e) => {
    const b = e.target.closest(".count button");
    if (!b) return;
    const extra = +b.dataset.n - min;
    sel.clear();
    opcionales.slice(0, extra).forEach((t) => sel.add(t.id));
    update();
  });
  root.addEventListener("change", (e) => {
    const id = e.target.dataset && e.target.dataset.id;
    if (!id) return;
    e.target.checked ? sel.add(id) : sel.delete(id);
    update();
  });
  update();
})();
