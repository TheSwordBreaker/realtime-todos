<script>
  // import { todoStore } from './todoStore';
  import App from "./App.svelte";
  import Dumb from "./dumb.svelte";
  
  // import { writable,derived  } from "svelte/store";

  
  
  // let todos
  // const unsubscribe = todoStore.subscribe(data => todos = data);
  console.log('hghgh');
  let todos = [
    {
      id: 1,
      title: "My first todo",
      completed: false,
    },
    {
      id: 2,
      title: "My second todo",
      completed: false,
    },
    {
      id: 3,
      title: "My third todo",
      completed: false,
    },
  ];

  let task = "";
  let workingFilter = "all";
  let nextId = 4;

  const addTask = (event) => {
    if (event.key === "Enter") {
      todos = [
        ...todos,
        {
          id: nextId,
          completed: false,
          title: task,
        },
      ];

      nextId = nextId + 1;
      task = "";
      console.log(todos);
    }
  };

  // const filteredTodos = derived( todoStore , $todoStore =>
  //    workingFilter === "all"
  //     ? $todoStore
  //     : workingFilter === "completed"
  //     ? $todoStore.filter((t) => t.completed)
  //     : $todoStore.filter((t) => !t.completed) );
  $: filteredTodos =
    workingFilter === "all"
      ? todos
      : workingFilter === "completed"
      ? todos.filter((t) => t.completed)
      : todos.filter((t) => !t.completed);
  // console.log(filteredTodos);
  // $: todosRemaining = filteredTodos.filter((todo) => !todo.completed).length;

  const checkAllTasks = (event) =>
    (todos = todos.map((t) => {
      t.completed = event.target.checked;
      return t;
    }));

  const updateFilter = (x) => (workingFilter = x);

  const clearAll = () => (todos = todos.filter((x) => !x.completed));

  const deleteTasks = (e) =>
    (todos = todos.filter((x) => x.id !== e.detail.id));

  const toggleStatus = (e) =>
    (todos = todos.map((x) => {
      if (x.id == e.detail.id) {
        x.completed = !x.completed;
      }
      return x;
    }));
</script>

<style>
  .container {
    max-width: 800px;
    margin: 10px auto;
  }
  .logo {
    display: block;
    margin: 20px auto;
    width: 50%;
  }
  .todo-input {
    width: 100%;
    padding: 10px, 20px;
    font-size: 18px;
    margin-bottom: 20px;
  }
  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top: 1px solid lightgrey;
    padding-top: 15px;
    margin-bottom: 13px;
  }
  .inner-container-input {
    margin-right: 12px;
  }
  button {
    font-size: 14px;
    background-color: white;
    appearance: none;
  }
  button:hover {
    background: lightseagreen;
  }
  button:focus {
    outline: none;
  }
  .active {
    background: lightseagreen;
  }
</style>

<div class="container">
  <h2>Svelte Todo app</h2>

  <input
    type="text"
    class="todo-input"
    placeholder="Insert todo item ..."
    bind:value={task}
    on:keydown={addTask} />

  {#each filteredTodos as todo}
    <div class="todo-item">
      <Dumb
        {...todo}
        on:deleteTodo={deleteTasks}
        on:toggleComplete={toggleStatus} />
    </div>
  {/each}

 
  <div class="inner-container">
    <div>
      <label for="">
        <input
          type="checkbox"
          class="inner-container-input"
          on:change={ checkAllTasks} /> Check All
      </label>
    </div>
    <!-- <div>{todosRemaining} items left</div> -->
  </div>
  <div class="inner-container">
    <div>
      <button
        on:click={() => (workingFilter = 'all')}
        class:active={workingFilter === 'all'}>All</button>
      <button
        on:click={() => (workingFilter = 'active')}
        class:active={workingFilter === 'active'}>Active</button>
      <button
        on:click={() => (workingFilter = 'completed')}
        class:active={workingFilter === 'completed'}>Completed</button>
    </div>
    <div><button on:click={ clearAll}>Clear Completed</button></div>
  </div>
</div>
