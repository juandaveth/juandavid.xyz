// Renderiza window.COTIZACION (definido en el datos.js de cada cliente).
(function () {
  const C = window.COTIZACION;
  const cop = (n) => "$" + Math.round(n).toLocaleString("es-CO");
  const fecha = (iso) =>
    new Date(iso + "T12:00:00").toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const precio = (f) => f.horas * C.tarifa;

  const items = C.fases.flatMap((fa) => fa.funcionalidades.map((f) => ({ ...f, fase: fa })));
  const sel = new Set(items.filter((i) => i.fase.recomendada).map((i) => i.id));

  document.title = `Cotización · ${C.proyecto}`;
  const root = document.getElementById("app");
  root.innerHTML = `
    <header>
      <div class="from"><a href="/">juandavid.xyz</a> · Desarrollo de productos con IA</div>
      <h1>Cotización para ${esc(C.proyecto)}</h1>
      <div class="meta">Para ${esc(C.cliente)} · ${fecha(C.fecha)} · Válida hasta el ${fecha(C.validaHasta)}</div>
    </header>
    <p class="resumen">${esc(C.resumen)}</p>
    <div class="hint">Marca las funcionalidades que quieres empezar. El total y el anticipo se actualizan abajo, y con el botón me confirmas por WhatsApp.</div>
    ${C.calendario ? `
    <section class="cal">
      <h2>Calendario sugerido</h2>
      <p class="objetivo">Dos semanas por fase, cada una con dos reuniones: entrega y ajustes.</p>
      <table>
        ${C.calendario.map((c) => `
          <tr>
            <td>${esc(c.fase)}${c.nota ? `<span class="nota">${esc(c.nota)}</span>` : ""}</td>
            <td class="semana">${esc(c.semana)}</td>
          </tr>`).join("")}
      </table>
    </section>` : ""}
    ${C.fases.map((fa) => `
      <section>
        <div class="fase-head">
          <h2>${esc(fa.nombre)}${fa.recomendada ? '<span class="badge">Recomendada</span>' : ""}</h2>
          <span class="sub">${cop(fa.funcionalidades.reduce((s, f) => s + precio(f), 0))}</span>
        </div>
        ${fa.semana ? `<div class="fecha">📅 Del ${esc(fa.semana)}</div>` : ""}
        <p class="objetivo">${esc(fa.objetivo)}</p>
        ${fa.funcionalidades.map((f, n) => `
          <div class="item" data-id="${f.id}">
            <label class="item-head">
              <input type="checkbox" data-id="${f.id}">
              <span class="name"><span class="paso">Paso ${n + 1}</span>${esc(f.nombre)}${f.detalle ? `<span class="detalle">${esc(f.detalle)}</span>` : ""}</span>
              <span class="price">${cop(precio(f))}</span>
            </label>
            <ul>${f.incluye.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          </div>`).join("")}
      </section>`).join("")}
    <section>
      <h2>Costos recurrentes</h2>
      <p class="objetivo">Los pagas directamente a cada proveedor. No están incluidos en los valores de arriba.</p>
      <table>
        <tr><th>Concepto</th><th>Costo</th><th>Desde</th></tr>
        ${C.recurrentes.map((r) => `
          <tr>
            <td>${esc(r.concepto)}<span class="nota">${esc(r.nota)}</span></td>
            <td class="costo">${esc(r.costo)}</td>
            <td>${esc(r.fase)}</td>
          </tr>`).join("")}
      </table>
    </section>
    <section>
      <h2>Condiciones</h2>
      <ol class="cond">${C.condiciones.map((c) => `<li>${esc(c)}</li>`).join("")}</ol>
    </section>
    <footer>Juan David Reyes · <a href="/">juandavid.xyz</a>
      ${C.fuente ? `<p class="fuente">Esta cotización se construyó a partir de las <a href="${esc(C.fuente.url)}" target="_blank" rel="noopener">${esc(C.fuente.texto.charAt(0).toLowerCase() + C.fuente.texto.slice(1))}</a>.</p>` : ""}
    </footer>
    <div class="bar"><div class="bar-in">
      <div class="tot"><strong id="total"></strong><span id="anticipo"></span></div>
      <a id="ok" target="_blank" rel="noopener">Aprobar por WhatsApp</a>
    </div></div>`;

  function update() {
    const elegidos = items.filter((i) => sel.has(i.id));
    const total = elegidos.reduce((s, i) => s + precio(i), 0);
    document.getElementById("total").textContent = cop(total);
    document.getElementById("anticipo").textContent =
      `${elegidos.length} funcionalidad${elegidos.length === 1 ? "" : "es"} · anticipo (50%): ${cop(total / 2)}`;
    root.querySelectorAll(".item").forEach((el) => {
      const on = sel.has(el.dataset.id);
      el.classList.toggle("on", on);
      el.querySelector("input").checked = on;
    });
    const msg =
      `Hola Juan David, apruebo la cotización de ${C.proyecto} con estas funcionalidades:\n` +
      elegidos.map((i) => `• ${i.nombre} (${cop(precio(i))})`).join("\n") +
      `\nTotal: ${cop(total)} · Anticipo: ${cop(total / 2)}`;
    const ok = document.getElementById("ok");
    ok.href = `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`;
    ok.classList.toggle("off", elegidos.length === 0);
  }

  root.addEventListener("change", (e) => {
    const id = e.target.dataset && e.target.dataset.id;
    if (!id) return;
    e.target.checked ? sel.add(id) : sel.delete(id);
    update();
  });
  update();
})();
