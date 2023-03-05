## 🚀 Create Vue instance

```
  const app = Vue.create({}).mount('#app');
```

## 🚀 Define states for the Vue app

```
  const app = Vue.create({
    data() {
      return {
        title: 'ToDo App'
      }
    }
  }).mount('#app');
```

## 🚀 Using `v-model` for 2-way data binding

```
  <input v-model="todoItem" />
```

```
  const app = Vue.create({
    data() {
      return {
        todoItem: ''
      }
    }
  }).mount('#app');
```

2-way data binding meaning

- data can be changed from the input by the user
- data can be changed dynamically from the code, vue-dev tool or even the browser console

=> `#vm0.data.todoItem = 'sleeping'` (in Browser console)
or
=> `app.data.todoItem = 'sleeping'` (in Browser console, using the vue app instance)

## 🚀 Define methods

```
  <button v-on:click="resetForm" type="button">Reset Form</button>
```

or (in short form)

```
  <button @click="resetForm" type="button">Reset Form</button>
```

```
  const app = Vue.create({
    data() {
      return {
        todoItem: ''
      }
    },
    methods: {
      resetForm() {
        this.todoItem = '';
      }
    }
  }).mount('#app');
```

Methods must not be arrow function, otherwise we won't be able to access `this`

## 🚀 Using `v-bind` for 1 way binding

```
  <button v-bind:disabled="todoItem.length < 1">Save</button>
```

or in short-form

```
  <button :disabled="todoItem.length < 1">Save</button>
```

## 🚀 Using computed property

```
  const app = Vue.create({
    data() {
      return {
        todos: []
      }
    },
    computed: {
      reversedTodos() {
        return [...this.todos].reverse();
      }
    }
  }).mount('#app');
```

We use computed property for displaying values (presentation only).
Different to methods, it is used for changing values of data.
