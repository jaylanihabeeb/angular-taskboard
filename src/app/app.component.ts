import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  public tasks = [];
  public showAddTask: boolean = false;
  public taskDescription;
  public taskName;
  public backlogTasks = [];
  public activeTasks = [];
  public qaTasks = [];
  public resolvedTasks = [];

  enableAddTask() {
    this.showAddTask = !this.showAddTask;
  }
  cancelAdd() {
    this.taskDescription = null;
    this.taskName = null;
    this.showAddTask = !this.showAddTask;
  }
  addTask() {
    let data = {
      taskName: this.taskName,
      taskDescription: this.taskDescription,
      state: 0,
    };

    this.tasks.push(data);
    this.cancelAdd();
    this.filterTasks();
  }
  filterTasks() {
    this.backlogTasks = this.tasks.filter((task) => task.state === 0);
    this.activeTasks = this.tasks.filter((task) => task.state === 1);
    this.qaTasks = this.tasks.filter((task) => task.state === 2);
    this.resolvedTasks = this.tasks.filter((task) => task.state === 3);
  }
  moveNext(task) {
    if (task.state <= 2) task.state = task.state + 1;
    this.filterTasks();
  }
  movePrev(task) {
    if (task.state > 0) task.state = task.state - 1;
    this.filterTasks();
  }
}
