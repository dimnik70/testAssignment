<template>
  <div class="container mx-auto mt-6 border p-6 max-w-[25%]">
    <div class="text-center mb-6 text-2xl font-bold">Test Assignment</div>
    <TreeNode :node="treeItem" v-for="treeItem in trees" :key="treeItem.name" />
    <button
      type="button"
      @click="reset"
      class="bg-pink-500 text-white p-2 rounded hover:bg-pink-700 w-[100%] mt-8"
    >
      Reset
    </button>
  </div>
</template>

<script>
  import TreeNode from "./TreeNode.vue";
  import { useTreeStore } from "../stores/store";
  import { ref, onMounted } from "vue";

  export default {
    components: {
      TreeNode,
    },
    setup() {
      const treeStore = useTreeStore();
      let trees = ref([]);
      const reset = () => {
        treeStore.$reset();
      };

      onMounted(() => {
        trees.value = treeStore.tree;
        treeStore.$subscribe((mutation, state) => {
          trees.value = state.tree;
        });
      });
      return {
        trees,
        reset,
      };
    },
  };
</script>
