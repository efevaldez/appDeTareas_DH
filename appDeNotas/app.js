let moduloTareas = require ('./tareas')
let process = require ('process')
let comando = process.argv[2] ? process.argv [2].toLowerCase () : undefined 

switch (comando){
    case "listar" : 
            let tareas = moduloTareas.leerJSON();
            console.log(tareas);
            if (tareas.length=== 0){
                console.log("La lista está vacía");
            }else{
                console.log("----------");
                console.log("Este es tu listado de tareas");
                console.log("------------");
                for (let i=0 ; i<tareas.length; i++){
                    console.log("Título: " + tareas[i].titulo + " - estado: " + tareas[i].estado);
                }
            }
    break
    case "agregar":
        let titulo = process.argv [3];
        let estado = process.argv [4];
        moduloTareas.escribirJSON (titulo , estado);
        break
    case "deshacer":
        moduloTareas.deshacer ();
        break
    case undefined :
        console.log("ATENCIÓN, tienes que pasar una acción!");
        break
    default :
    console.log("No entiendo que quieres hacer");
    break
}
