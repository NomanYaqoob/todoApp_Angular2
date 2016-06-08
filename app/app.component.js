"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var todolist_component_1 = require("./todolist.component");
var newtodo_component_1 = require("./newtodo.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    \n    <h1>{{title}}</h1>\n    <a [routerLink] = \"['ToDoList']\">List of Todos</a>\n    <a [routerLink] = \"['NewTodo']\">Add a Todo</a>\n    <router-outlet></router-outlet>\n    ",
            providers: [router_deprecated_1.ROUTER_PROVIDERS],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, todolist_component_1.TodoListComponent]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: "/todolist",
                name: "ToDoList",
                component: todolist_component_1.TodoListComponent
            },
            {
                path: "/add",
                name: "NewTodo",
                component: newtodo_component_1.NewTodoComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map