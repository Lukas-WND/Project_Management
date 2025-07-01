type Task = {
  title: string;
  description: string;
  fileUrl: string;
  columnId: string;
};

export const addTaskToColumn = (task: Task) => {
  // Função mock para simular adição da task (você deve integrar com seu backend ou state real)
  console.log("Adicionando tarefa:", task);
};
