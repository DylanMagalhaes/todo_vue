export interface Tasks {
  tasks: Task[];
}

export interface Task {
  name: string;
  date: number;
  done: boolean;
}
