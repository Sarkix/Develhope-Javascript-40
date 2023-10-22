async function fetchTodolist() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const todolist = await response.json();
    return todolist;
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchTodolist()
  .then((todos) => {
    if (todos) {
      console.log(todos);
    } else {
      console.log("No todos data found.");
    }
  })
  .catch((error) => {
    console.error("Error");
  });
