## 🚀 Reactivity fundamentals

In Vue, there are `ref` and `reactive` imported from `vue` package.

- `ref` is for primitive types. Actually we can also use `ref` for non-primitive type.

  - Get the value by accessing the key `value`

    ```
      <script setup>
        import {ref} from 'vue';
        const msg = ref('Hello');

        const suffixMsg = () => msg.value + 'there';
      </script>
    ```

  - In template, vue automatically abstract the way of getting the value

    ```
      <template>
        <h1>{{ msg}}</h1>
      </template>
    ```

- `reactive` is for non-primitive types

  ```
    <script setup>
      import {reactive} from 'vue';
      const state = reactive({count: 0});

      const incrementCount = () => {
        state.count++;
      }
    </script>

    <template>
      <h1>Counter {{ state.count }}</h1>
    </template>
  ```
