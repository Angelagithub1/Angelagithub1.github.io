const program = document.getElementByID("Programas");
const lengu = document.getElementByID("Lenguajes");
const flecha = document.getElementByID("Flecha");

flecha.addEventListener("click", function() {

    program.classList.add("oculto");
    lengu.classList.remove("oculto");

});
