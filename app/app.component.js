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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var common_1 = require('@angular/common');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Todo Application";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "/app/app.component.html",
            providers: [router_deprecated_1.ROUTER_PROVIDERS],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, todolist_component_1.TodoListComponent, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_bootstrap_1.BUTTON_DIRECTIVES, ng2_bootstrap_1.AlertComponent]
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