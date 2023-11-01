import { defineStore } from "pinia";

export const useTreeStore = defineStore("tree", {
  state: () => ({
    tree: [
      {
        name: "Dir 1",
        children: [
          {
            name: "Dir 1-1",
            children: [{ name: "File 1-1-1", isFile: true }],
          },
          { name: "File 1-2", isFile: true },
        ],
      },
      {
        name: "Dir 2",
        children: [
          { name: "Dir 2-1", children: [] },
          { name: "File 2-2", isFile: true },
        ],
      },
      { name: "File 2", isFile: true },
    ],
  }),
  actions: {
    editNode(node, newName) {
      if (node) {
        node.name = newName;
      }
    },
    deleteNode(node) {
      if (node) {
        const deleteRecursive = (parentNode, targetNode) => {
          if (parentNode.children && parentNode.children.includes(targetNode)) {
            parentNode.children = parentNode.children.filter(
              (n) => n !== targetNode
            );
            return true;
          } else {
            for (const childNode of parentNode.children || []) {
              if (deleteRecursive(childNode, targetNode)) {
                return true;
              }
            }
          }
          return false;
        };

        for (let i = 0; i < this.tree.length; i++) {
          if (deleteRecursive(this.tree[i], node)) {
            return;
          }
        }

        this.tree = this.tree.filter((n) => n !== node);
      }
    },
  },
});
