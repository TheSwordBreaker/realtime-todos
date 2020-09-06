import { writable } from 'svelte/store';
const CreateTodoStore=() => {
    const { subscribe, set, update } =  writable([
        {
            id: 1,
            title: "My first todo",
            completed: false,
        },
        {
            id: 2,
            title: "My second todo",
            completed: false,
        },
        {
            id: 3,
            title: "My third todo",
            completed: false,
        },
    ]);

    return {
        subscribe ,set,update,
        checkAllTasks: (event) => console.log('dshdsh'),
        // checkAllTasks: (event) => update( todos 
        //     => todos.map( t => { t.completed = event.target.checked; console.log(t); return t; })),

        clearAll: () => console.log('dshdsh'),
        // clearAll: () => update( todos => todos.filter((x) => !x.completed) ),

        // deleteTasks: (e) =>
        //     (todos = todos.filter((x) => x.id !== e.detail.id)),

        // toggleStatus: (e) =>
        //     (todos = todos.map((x) => {
        //         if (x.id == e.detail.id) {
        //             x.completed = !x.completed;
        //         }
        //         return x;
        //     })),


    };
}

export const todoStore = CreateTodoStore();