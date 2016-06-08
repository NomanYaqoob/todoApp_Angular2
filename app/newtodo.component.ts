import {Component} from "@angular/core";
import {Todo} from "./todo"
import {TodoService} from "./todo.service";
@Component({
    selector: "new-todo",
    templateUrl: 'app/newtodo.component.html',
})

export class NewTodoComponent {


    constructor(private todoService: TodoService) {
        this.todo = new Todo();
    }
    todo: Todo;

    addTodo(todo: Todo) {
        todo.date = new Date();
        this.todoService.addTodo(todo);
        this.todoService.getTodos().then(todos => console.log(todos));
        // this.todo = null;
    }
}