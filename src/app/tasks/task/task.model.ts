export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  duaDate: string;
}

export interface NewTaskData {
  title: string;
  summary: string;
  duaDate: string;
}