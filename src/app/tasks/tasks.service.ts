import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'}) // this service is available in the whole app, so we don't need to import it in every component
export class TaskService {

  constructor() {
    const tasks = localStorage.getItem('tasks'); // get the tasks from local storage
    if (tasks) {
      this.tasks = JSON.parse(tasks); // parse the tasks from JSON string to object
    }
  }

  private tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary: 'Learn all the basic and advanced features of Angular & apply them in real world projects',
        duaDate: '2025-10-01',
      },
      {
        id: 't2',
        userId: 'u3',
        title: 'Master React',
        summary: 'Learn all the basic and advanced features of React & apply them in real world projects',
        duaDate: '2025-10-11',
      },
      {
        id: 't3',
        userId: 'u2',
        title: 'Master Vue',
        summary: 'Learn all the basic and advanced features of Vue & apply them in real world projects',
        duaDate: '2025-10-03',
      },
      {
        id: 't4',
        userId: 'u1',
        title: 'Master Svelte',
        summary: 'Learn all the basic and advanced features of Svelte & apply them in real world projects',
        duaDate: '2025-10-05',
      },

  ];

  getUserTasks(userId: string) {
      return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData : NewTaskData, userId: string) {
      this.tasks.unshift({
          id: new Date().getTime().toString(),
          userId: userId,
          title: taskData.title,
          summary: taskData.summary,
          duaDate: taskData.duaDate,
      });
      this.saveTasks(); // save the tasks to local storage
  }

  removeTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.saveTasks(); // save the tasks to local storage
  }

private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // save the tasks to local storage
  }
}