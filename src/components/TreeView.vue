<template>
  <div class="container mx-auto mt-6 border p-6 max-w-[25%]">
    <div class="text-center mb-6 text-2xl font-bold">Test Assignment</div>

    <TreeNode
      :node="treeItem"
      v-for="treeItem in tree"
      :key="treeItem.name"
      @deleteNode="deleteNode"
    />
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
      const tree = ref([]);
      const deleteNode = (node) => {
        console.log("PROPS", node);
        treeStore.deleteNode(node);
      };
      onMounted(() => {
        tree.value = treeStore.tree;
      });

      return {
        tree,
        deleteNode,
      };
    },
  };
</script>
