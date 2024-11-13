import { defineStore } from "pinia"

export const useStore = defineStore('flow', {
    state: () => ({
        nodes: []
    }),
    actions: {
        addNode(node) {
            this.nodes.push(node)
        },
        updateNode(id, updatedNode) {
            const index = this.nodes.findIndex(node => node.id === id)
            if (index !== -1) {
                this.nodes[index] = { ...this.nodes[index], ...updatedNode }
            }
        },
        deleteNode(id) {
            this.nodes = this.nodes.filter(node => node.id !== id)
        }
    }
})