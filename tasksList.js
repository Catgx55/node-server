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
    return new Promise((resolve, reject) => {
        tasksList.push({description, completed: false});
        setTimeout(() => {
            resolve(console.log(`Tarea "${description}" añadida a la lista.`));
        }, 3000);
        console.log('Cargando...')
        setTimeout(() => {
            printTask();
        }, 5000)
    })
}

//Función para eliminar tareas
function deleteTasks(index){
    const deleted = new Promise((resolve, reject) => {
        if(index >= 0 && index < tasksList.length){
            const deleteTasks = tasksList.splice(index, 1)[0];
            setTimeout(() => {
                resolve(`Tarea "${deleteTasks.description}" eliminada.`);
            }, 5000);
            console.log('Validando tarea...');
        }else{
            setTimeout(() => {
                reject(`Indice de tarea no valido`);
            }, 5000);
            console.log('Validando tarea...');
        }
    });

    deleted.then((result) => {
        console.log(result);
    },
    (error) => {
        console.error(error);
    })
}



//Función para completar las tareas
async function completedTask(index){
    return new Promise((resolve, reject) => {
        if(index >= 0 && index <= tasksList.length){
            tasksList[index].completed = true;
            setTimeout(() => {
                resolve(`Tarea "${tasksList[index].description}" completada.`);
            }, 3000);
            setTimeout(() => {
                printTask();
            }, 5000)
            console.log('Validando tarea...');
        }else{
            console.log(`Indice de tarea no valido`);
        }
    })
}

async function taskCompleted (index) {
    try{
        const result = await completedTask(index);
        console.log(result);
    }catch(error){
        console.error(error);
    }
}

module.exports = {
    printTask,
    addTasks,
    deleteTasks,
    //completedTask,
    taskCompleted
}