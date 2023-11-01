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
    setTree(newTree) {
      this.tree = newTree;
    },
    editNode(node, newName) {
      console.log("EDIT", node);
      if (node) {
        node.name = newName;
      }
    },
    deleteNode(node) {
      console.log("DELETE", node);
      if (node) {
        //   console.log(this.tree);

        console.log("NODE", node);
        const parentNode = this.tree.find(
          (n) => n.children && n.children.includes(node)
        );
        //   console.log("parentNode", parentNode);
        if (parentNode) {
          parentNode.children = parentNode.children.filter((n) => n !== node);
        } else {
          const newTree = this.tree.filter((n) => n !== node);
          this.setTree(newTree);
          this.$patch();
        }
        //this.$patch({this.tree:result});
      }
    },
  },
});
