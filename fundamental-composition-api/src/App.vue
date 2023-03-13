<script setup>
import { ref, reactive, computed } from "vue";

const state = reactive({ count: 0 });
const incrementCount = () => {
  state.count++;
};

const header = ref("ToDo App");
const items = ref([
  { id: 1, label: "Gaming" },
  { id: 2, label: "Sleeping" },
  { id: 3, label: "Gyming" },
]);
const newItem = ref("");
const isHighPriority = ref(false);

const charCount = computed(() => newItem.value.length);

const saveItem = () => {
  items.value.push({ id: items.value.length + 1, label: newItem.value });
  newItem.value = "";
};
</script>

<template>
  <h1>Counter {{ state.count }}</h1>
  <button @click="incrementCount">Increment</button>
  <h1>{{ header }}</h1>
  <form @submit.prevent="saveItem">
    <input v-model.trim="newItem" type="text" placeholder="Add an item" />
    <p>{{ charCount }} / 200</p>
    <label
      ><input v-model="isHighPriority" type="checkbox" />High Priority
    </label>
    <button class="btn btn-primary">Save Item</button>
  </form>
  <ul>
    <li v-for="{ id, label } in items" :key="id">
      {{ label }}
    </li>
  </ul>
</template>
