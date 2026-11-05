// APES-X · Interviales: the workshop count drives the price.
// The page reads in full without this script (5 workshops, the default).
(function () {
  const P = window.PROGRAMA;
  if (!P) return;
  const cop = (n) => "$" + Math.round(n).toLocaleString("es-CO");
  const base = P.talleres.filter((t) => t.nucleo).length;
  const opt = P.talleres.filter((t) => !t.nucleo).map((t) => t.id);
  const checks = [...document.querySelectorAll("input[type=checkbox][data-id]")];
  const radios = [...document.querySelectorAll("input[name=talleres]")];

  function chosen() {
    return P.talleres.filter((t) => t.nucleo || checks.some((c) => c.dataset.id === t.id && c.checked));
  }

  function render() {
    const list = chosen();
    const n = list.length;
    const programa = P.precio.base + P.precio.porTaller * n;
    const iva = programa * P.iva;
    const out = { n: String(n), programa: cop(programa), anticipo: cop(programa / 2), iva: cop(iva), total: cop(programa + iva) };
    document.querySelectorAll("[data-out]").forEach((el) => { el.textContent = out[el.dataset.out]; });
    radios.forEach((r) => { r.checked = +r.value === n; });
    checks.forEach((c) => c.closest(".row").classList.toggle("is-on", c.checked));
    const body =
      `Hola, equipo APES-X.\n\nQueremos avanzar con el ${P.proyecto} (cotización ${P.numero}). Por ahora estamos considerando ${n} talleres.\n\nFechas posibles para la sesión inicial de 3 horas:\n- \n- \n\nPreguntas que tenemos:\n- \n`;
    const subject = `${P.proyecto}: fechas para la sesión inicial`;
    document.querySelectorAll("[data-fechas]").forEach((a) => { a.href = `mailto:${P.empresa.correo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; });
  }

  radios.forEach((r) => r.addEventListener("change", () => {
    const extra = +r.value - base;
    checks.forEach((c) => { c.checked = opt.indexOf(c.dataset.id) < extra; });
    render();
  }));
  checks.forEach((c) => c.addEventListener("change", render));
  render();
})();
