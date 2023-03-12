export default {
  /*html*/
  template: `
    <h1>{{ title}}</h1>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button
        v-if="!isAdding"
        @click="toggleIsAdding"
        class="btn btn-info"
        type="button"
      >
        Add New
      </button>
      <button
        v-else
        @click="toggleIsAdding"
        class="btn btn-danger"
        type="button"
      >
        Cancel
      </button>
    </div>
    <section v-if="isAdding">
      <div class="mb-3">
        <label for="item" class="form-label">Item to do:</label>
        <input
          @keyup.enter="saveTodoItem"
          v-model="todoItem"
          type="text"
          class="form-control"
          id="item"
          placeholder="Anything to do?"
        />
      </div>
      <div class="form-check form-switch">
        <input
          v-model="isHighPriority"
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="checkHighPriority"
        />
        <label class="form-check-label" for="checkHighPriority"
          >High Priority</label
        >
      </div>
      <div class="d-grid col-2 mt-3">
        <button
          @click="saveTodoItem"
          :disabled="(todoItem.length < 1)"
          type="button"
          class="btn btn-primary"
        >
          Save
        </button>
      </div>
    </section>
    <hr />
    <ul v-if="todos.length > 0" class="list-group">
      <li
        @click="completeItem(todo)"
        v-for="todo in reversedTodos"
        class="list-group-item"
        :key="todo.id"
        :class="[
          todo.isHighPriority ? 'list-group-item-primary' : '',
          todo.isDone ? 'text-decoration-line-through' : ''
        ]"
      >
        {{todo.label}}
      </li>
    </ul>
    <p v-else>📪 No todos at the moment, let's add new a new one!</p>`,
  data() {
    return {
      isAdding: false,
      title: "ToDo App",
      todoItem: "",
      isHighPriority: false,
      todos: [],
    };
  },
  computed: {
    reversedTodos() {
      return [...this.todos].reverse();
    },
  },
  methods: {
    saveTodoItem() {
      this.todos.push({
        id: this.todos.length + 1,
        label: this.todoItem,
        isHighPriority: this.isHighPriority,
      });
      this.resetForm();
    },
    resetForm() {
      this.todoItem = "";
      this.isHighPriority = false;
    },
    toggleIsAdding() {
      this.isAdding = !this.isAdding;
    },
    completeItem(item) {
      item.isDone = !item.isDone;
    },
  },
};
