import {Injectable} from "@angular/core";

import {Todo} from "./todo"
@Injectable()
export class TodoService {

    todos: Todo[] = [];
    getTodos() {
        return Promise.resolve(this.todos);
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }
}