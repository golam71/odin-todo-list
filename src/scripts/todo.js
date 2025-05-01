export class Todo {
  constructor(title, description, dueDate, priority) {
    if (!new.target) {
      throw new Error("Classes must be called with new");
    }
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

let x = new Todo(
  "Buy groceries",
  "Milk, eggs, bread, butter",
  "2025-05-05",
  "High"
);
