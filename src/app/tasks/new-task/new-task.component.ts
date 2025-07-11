import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  
  enteredTitle = '';
  enteredSummary = '';
  enteredDuaDate = '';

  private tasksService = inject(TaskService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      duaDate: this.enteredDuaDate
    }, this.userId)
    this.close.emit();
  }
}
