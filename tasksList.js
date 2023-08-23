//Array de las tareas.
const tasksList = [];

//Funcion para mostrar la lista de las tareas
function printTask(){
    console.log('\nLista de tareas:');
    tasksList.forEach((task, index) => {
        console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`)
    })
}

//Función para agregar tareas
function addTasks(description){
    tasksList.push({description, completed: false});
    console.log(`Tarea "${description}" añadida`);
}

//Función para eliminar tareas
function deleteTasks(index){
    if(index >= 0 && index < tasksList.length){
        const deleteTasks = tasksList.splice(index, 1)[0];
        console.log(`Tarea "${deleteTasks.description}" eliminada.`);
    }else{
        console.log(`Indice de tarea no valido`);
    }
}

//Función para completar las tareas
function completedTask(index){
    if(index >= 0 && index < tasksList.length){
        tasksList[index].completed = true;
        console.log(`Tarea "${tasksList[index].description}" completada.`)
    }else{
        console.log(`Indice de tarea no valido`);
    }
}

module.exports = {
    printTask,
    addTasks,
    deleteTasks,
    completedTask
}