// <!-- COLLEGEMNTO VUE -->
const { createApp } = Vue

createApp({
    data() {
        return {
            // ARRAY DI OGGETTI    
            todos: [
                { text: "Programmare il pomeriggio", done: true },
                { text: "Giocare al pc", done: false },
                { text: "Allenarsi in palestra", done: false },
                { text: "Seguire la lezione", done: true },
            ],
            inputValue: '',
        }
    },
    methods: {
        // PUSH DI UN OGGETTO NUOVO NON CONTRASSEGNATO FATTO CON ATTRAVERSI IMPUT BOTTON AGGIUNGI
        addTodo() {
            this.todos.push({ text: this.inputValue, done: false })
            this.inputValue =''
        },
        // VADO A RIMUOVERE AL CLICK DELLA X L'OGGETTO
        removeTodo(todo) {
            const index = this.todos.indexOf(todo)
            this.todos.splice(index, 1)

        },
        // CON L'OPERATORE DI NEGAZIONE INVERTO IL VERO O FALSO 
        toggleDone(todo) {
            todo.done = !todo.done
        },
    },
}).mount('#app')

