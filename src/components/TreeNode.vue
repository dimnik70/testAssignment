<template>
  <div class="mb-4">
    <button
      type="button"
      @click="toggle"
      :class="[hasChildren ? '' : 'hidden']"
      class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
    >
      <PlusSmallIcon
        class="h-3 w-3"
        :class="[!isOpen ? '' : 'hidden']"
        aria-hidden="true"
      />

      <MinusSmallIcon
        class="h-3 w-3"
        :class="[isOpen ? '' : 'hidden']"
        aria-hidden="true"
      />
    </button>

    <span class="ml-2">{{ node.name }}</span>
    <button
      @click="editNode"
      class="ml-2 bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded"
    >
      Редактировать
    </button>
    <button
      @click="deleteNode"
      class="ml-2 bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
    >
      Удалить
    </button>
    <div v-if="isOpen" class="ml-6 mt-2">
      <EditForm v-if="editing" :node="node" @save="saveNode" />
      <TreeNode
        v-for="child in node.children"
        :node="child"
        :key="child.name"
      />
    </div>
  </div>
</template>

<script>
  import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/solid";
  import { ref, computed } from "vue";
  import { useTreeStore } from "../stores/store";
  import EditForm from "./EditForm.vue";

  export default {
    components: {
      EditForm,
      MinusSmallIcon,
      PlusSmallIcon,
    },
    props: {
      node: Object,
    },
    setup(props, { emit }) {
      const treeStore = useTreeStore();
      const isOpen = ref(true);
      const editing = ref(false);
      const toggle = () => {
        isOpen.value = !isOpen.value;
      };

      const hasChildren = computed(
        () =>
          props.node &&
          Array.isArray(props.node.children) &&
          props.node.children.length > 0
      );

      const editNode = () => {
        editing.value = !editing.value;
      };

      const saveNode = (newName) => {
        treeStore.editNode(props.node, newName);
        editing.value = false;
      };

      const deleteNode = () => {
        treeStore.deleteNode(props.node);
      };

      return {
        isOpen,
        editing,
        toggle,
        editNode,
        saveNode,
        deleteNode,
        hasChildren,
      };
    },
  };
</script>
