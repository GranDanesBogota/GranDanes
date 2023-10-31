// Obtener los elementos de encabezado y contenido
const faqHeader = document.querySelector(".faq-header");
const faqContent = document.querySelector(".faq-content");

// Agregar un controlador de eventos al encabezado para abrir/cerrar el contenido
faqHeader.addEventListener("click", () => {
    if (faqContent.style.display === "block") {
        faqContent.style.display = "none";
    } else {
        faqContent.style.display = "block";
    }
});
