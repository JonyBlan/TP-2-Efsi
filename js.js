let vecTareas = [
    {
        nombre: "terminar TP 02",
        completada: true,
    },
]

let primeraVez = true;

function agregarTarea(){
    let nuevaTarea = document.getElementById('agregar').value;
    console.log(nuevaTarea);
    vecTareas.push({"nombre": nuevaTarea, "completada": false,});
    mostrarLista();
    document.getElementById('agregar').value = "";
}

function mostrarLista() {
    /*if(!primeraVez){
        for (let i = 0; i < vecTareas.length - 1; i++){
            vecTareas[i].completada = document.getElementById("checkTarea" + i).checked;
        }
    }*/
    let listaTareas = document.getElementById("tareas");
    listaTareas.innerHTML="";
    for (let i = 0; i < vecTareas.length; i++){
        let unCheck = document.createElement("input");
        unCheck.type = "checkbox";
        unCheck.id = "checkTarea" + i;
        unCheck.onchange = function() {
            vecTareas[i].completada = !vecTareas[i].completada;
            mostrarLista();
        }
        let unaTarea = document.createElement("li");
        unaTarea.id = "tareaNumero" + i;
        unaTarea.innerText = vecTareas[i].nombre;
        listaTareas.appendChild(unaTarea);
        listaTareas.appendChild(unCheck);
        if(vecTareas[i].completada){
            unCheck.checked = true;
            document.getElementById("tareaNumero" + i).style.textDecoration = "line-through";
        }
        /*if(document.getElementById("checkTarea" + i).checked == true){
            console.log("meli tiene razon x primera vez");  
        }*/
    }
    primeraVez = false;
}

function relocate_home(){
    location.href = "https://www.youtube.com/watch?v=a3Z7zEc7AXQ";
} 

mostrarLista();