import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent],
    imports: [CommonModule, FormsModule, DatePipe]
})

export class TasksModule {}