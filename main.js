const readline = require('readline');
const {printTask, addTasks, deleteTasks, completedTask} = require('./tasksList')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleInput(input){
    const args = input.split(' ');
    const command = args[0].toLowerCase();

    switch(command){
        case 'lista':
            printTask()
            break;
        case 'agregar':
            const description = args.slice(1).join(' ');
            addTasks(description);
            break;
        case 'eliminar':
            const indexToDelete = parseInt(args[1]) - 1;
            deleteTasks(indexToDelete);
            break;
        case 'completar':
            const indexToComplete = parseInt(args[1] - 1);
            completedTask(indexToComplete);
            break;
        case 'salir':
            rl.close();
            break;
        default:
            console.log('comando no reconocido');
    }
}

console.log('=== Bienvenido a la lista de tareas ===' + '\nPuedes usar los siguientes comandos');
console.log('- "lista" para mostrar las tareas');
console.log('- "agregar [descripción]" para añadir una nueva tarea');
console.log('- "eliminar [número de la tarea]" para eliminar una tarea');
console.log('- "completar [número de la tarea]" para marcar una tarea como completada');
console.log('- "salir" para salir');

rl.prompt();
rl.on('line', input => {
    handleInput(input);
    rl.prompt;
});

rl.on('close', () => {
    console.log('¡Hasta luego!')
});