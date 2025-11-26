import TripManager from "./domain/tripManager.js";
import City from "./domain/city.js";

const manager = new TripManager();
const form = document.getElementById("city-form");
const citiesTbody = document.getElementById("cities-tbody");

form.addEventListener("submit", (e) => {
  handleCityFormSubmit(e);
});

function renderCities() {
  citiesTbody.innerHTML = "";
  manager.getAllCities().forEach((city, i) => {
    const tr = document.createElement("tr");
    tr.dataset.index = String(i);
    const dateFrom = formatDateIso(city.getDateFrom ? city.getDateFrom() : "");
    const dateTo = formatDateIso(city.getDateTo ? city.getDateTo() : "");
    const country = city.getCountry ? city.getCountry() || "" : "";
    const duration = city.getDurationDays() ? city.getDurationDays() : "";
    const notesText = city.getNotes ? String(city.getNotes() || "") : "";
    const notesHtml = notesText
      ? escapeHtml(notesText)
      : '<span class="text-muted">Sin datos</span>';
    tr.innerHTML = `<td>
    <strong>${escapeHtml(city.getName())}</strong>
    </td>
    <td>${escapeHtml(country)}</td>
    <td>${duration ? duration + " días" : "—"}</td>
    <td>${escapeHtml(dateFrom)}</td>
    <td>${escapeHtml(dateTo)}</td>
    <td>${notesHtml}</td>`;
    citiesTbody.appendChild(tr);
  });
  updateSummaryCards();
}

function updateSummaryCards() {
  // TODO: mostrar resumen
}

function handleCityFormSubmit(e) {
  e.preventDefault();
  const data = parseFormValues();
  const city = createCityFromValues(data);
  if (!city) return;
  if (!addCityToManager(city)) return;
  showToast("Éxito", "Ciudad agregada", "success");
  renderCities();
  form.reset();
}

function parseFormValues() {
  return {
    name: document.getElementById("city-name").value,
    country: document.getElementById("city-country").value,
    dateFrom: document.getElementById("city-date-from").value,
    dateTo: document.getElementById("city-date-to").value,
    notes: document.getElementById("city-notes").value,
  };
}

function getTodayIso() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

function setDefaultDates() {
  const today = getTodayIso();
  const from = document.getElementById("city-date-from");
  const to = document.getElementById("city-date-to");
  if (from && !from.value) from.value = today;
  if (to && !to.value) to.value = today;
}

function createCityFromValues({ name, country, dateFrom, dateTo, notes }) {
  try {
    dateFrom = dateFrom ? new Date(dateFrom) : null;
    dateTo = dateTo ? new Date(dateTo) : null;
    return new City(name, country, dateFrom, dateTo, notes);
  } catch (e) {
    showToast("Error", e.message || "No se pudo crear la ciudad", "danger");
    return null;
  }
}

function addCityToManager(city) {
  try {
    manager.addCity(city);
    return true;
  } catch (e) {
    showToast("Error", e.message || "No se pudo agregar la ciudad", "danger");
    return false;
  }
}

function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatDateIso(d) {
  if (!d) return "";
  try {
    const dt = new Date(d);
    if (Number.isNaN(dt.getTime())) return String(d);
    return dt.toLocaleDateString("es-ES");
  } catch {
    return String(d);
  }
}

function showToast(title, message, variant = "primary") {
  const container = document.getElementById("alert-container");
  if (!container) return;

  const variantClass = `alert-${variant}`;
  const wrapper = document.createElement("div");
  wrapper.className = `alert ${variantClass} alert-dismissible fade show`;
  wrapper.setAttribute("role", "alert");
  wrapper.innerHTML = `<strong>${escapeHtml(title || "Aviso")}</strong> ${escapeHtml(
    String(message || ""),
  )} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
  container.appendChild(wrapper);

  setTimeout(() => {
    try {
      if (window.bootstrap && window.bootstrap.Alert) {
        const inst = window.bootstrap.Alert.getOrCreateInstance(wrapper);
        if (inst && typeof inst.close === "function") {
          inst.close();
          return;
        }
      }
    } catch {
      // ignore and remove
    }
    if (wrapper.parentNode) wrapper.parentNode.removeChild(wrapper);
  }, 3000);
}

setDefaultDates();
renderCities();
