import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {TodoListComponent} from "./todolist.component"
import {NewTodoComponent} from "./newtodo.component"
import {AlertComponent, BUTTON_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap'
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';

@Component({
    selector: "my-app",
    templateUrl: "/app/app.component.html",
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, TodoListComponent, CORE_DIRECTIVES, FORM_DIRECTIVES, BUTTON_DIRECTIVES, AlertComponent]
})


@RouteConfig([

    {
        path: "/todolist",
        name: "ToDoList",
        component: TodoListComponent
    },
    {
        path: "/add",
        name: "NewTodo",
        component: NewTodoComponent
    }
])


export class AppComponent {
    title: string =  "Todo Application";
}
