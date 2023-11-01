<template>
  <div class="p-4 border mb-2 rounded-lg my-4">
    <input
      v-model="nodeName"
      class="w-64 p-2 mb-2 border rounded"
      placeholder="Введите название"
    />
    <button
      @click="saveNode"
      class="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 ml-6"
    >
      Сохранить
    </button>
  </div>
</template>

<script>
  import { ref, watch } from "vue";
  export default {
    props: {
      node: Object,
    },
    setup(props, { emit }) {
      const nodeName = ref(props.node.name);
      const saveNode = () => {
        emit("save", nodeName.value);
      };
      watch(
        () => props.node,
        () => {
          nodeName.value = props.node.name;
        }
      );
      return {
        nodeName,
        saveNode,
      };
    },
  };
</script>
