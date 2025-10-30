import React from "react";

function TasksList() {
  const users = [
    { name: "Alice", tasks: ["Lire", "Écrire"] },
    { name: "Bob", tasks: ["Coder", "Tester"] }
  ];

  // Transformation avec flatMap + map
  const flatTasks = users.flatMap(user =>
    user.tasks.map(task => `${user.name} : ${task}`)
    // user.tasks.map(task => {task.name , task.task})

  );



  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>ex3</h2>
      <ul>
        {flatTasks.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
