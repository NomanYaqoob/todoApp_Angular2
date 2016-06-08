import {bootstrap} from "@angular/platform-browser-dynamic";
import {TodoService} from "./todo.service";
import {AppComponent} from "./app.component"


bootstrap(AppComponent,[TodoService]);