import {Component, OnInit} from "@angular/core";
import {TodoService} from "./todo.service";
import {Todo} from './todo'
@Component({
    selector: "my-todos",
    templateUrl: "app/todolist.component.html",
})

export class TodoListComponent implements OnInit {

    todos: Todo[] = [];
    constructor(private todoService: TodoService) {

    }

    ngOnInit() {
        this.todoService.getTodos().then(Todos => this.todos = Todos);
    }


}