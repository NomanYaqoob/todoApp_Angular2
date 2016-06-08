import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {TodoListComponent} from "./todolist.component"
import {NewTodoComponent} from "./newtodo.component"
@Component({
    selector: "my-app",
    template: `
    
    <h1>{{title}}</h1>
    <a [routerLink] = "['ToDoList']">List of Todos</a>
    <a [routerLink] = "['NewTodo']">Add a Todo</a>
    <router-outlet></router-outlet>
    `,
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, TodoListComponent]
})


@RouteConfig([

    {
        path: "/todolist",
        name: "ToDoList",
        component: TodoListComponent
    },
    {
        path:"/add",
        name: "NewTodo",
        component: NewTodoComponent
    }
])


export class AppComponent {
    title: "Todo App";
}
