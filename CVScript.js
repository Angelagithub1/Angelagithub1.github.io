const program = document.getElementById("Programas");
const lengu = document.getElementById("Lenguajes");
const flecha = document.getElementById("flecha");

flecha.addEventListener("click", function() {

    program.classList.add("out");
    lengu.classList.remove("out");

});
