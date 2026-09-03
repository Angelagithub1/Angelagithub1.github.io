const program = document.getElementById("Programas");
const lengu = document.getElementById("Lenguajes");
const flecha = document.getElementById("flecha");

flecha.addEventListener("click", function() {

    if(program.classList.contains("out")){
        lengu.classList.add("out");
        program.classList.remove("out");
    } else{
        program.classList.add("out");
        lengu.classList.remove("out");
    }
});
