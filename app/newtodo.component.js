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
var todo_1 = require("./todo");
var todo_service_1 = require("./todo.service");
var NewTodoComponent = (function () {
    function NewTodoComponent(todoService) {
        this.todoService = todoService;
        this.todo = new todo_1.Todo();
    }
    NewTodoComponent.prototype.addTodo = function (todo) {
        console.log("addTodo Called");
        todo.date = new Date();
        this.todoService.addTodo(todo);
        this.todoService.getTodos().then(function (todos) { return console.log(todos); });
    };
    NewTodoComponent = __decorate([
        core_1.Component({
            selector: "new-todo",
            templateUrl: 'app/newtodo.component.html',
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], NewTodoComponent);
    return NewTodoComponent;
}());
exports.NewTodoComponent = NewTodoComponent;
//# sourceMappingURL=newtodo.component.js.map