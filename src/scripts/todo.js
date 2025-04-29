class Todo {
  constructor(title, description, dueDate, priority, note) {
    if (!new.target) {
      throw new Error("Classes must be called with new");
    }
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
  }
}

