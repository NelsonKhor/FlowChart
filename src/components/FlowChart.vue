<template>
    <div>
        <button @click="addNode">Add Node</button>
        <div id="flowchart" style="width: 500px; height: 500px" >
            <VueFlow :nodes="nodes" :edges="edges" @node-click="toggleDrawer" />
        </div>
    </div>
</template>

<script>
import { Position, VueFlow } from '@vue-flow/core'
import { useStore } from '../stores/store'
import { defineComponent, ref } from 'vue'

export default defineComponent({
    components: { VueFlow },
    setup() {
        const flowStore = useStore()
        const edges = ref([])

        function addNode() {
            const newNode = {
                // generate 6 random hex number
                id: Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'),
                type: 'sendMessage',
                data: { label: 'New Node', description: "Description" },
                position: { x: Math.random()*400, y:Math.random()*400 }
            }
            flowStore.addNode(newNode)
        }

        function toggleDrawer(nodeId) {
            this.$router.push(`/node/${nodeId}`)
        }

        return { nodes: flowStore.nodes, edges, addNode, toggleDrawer }
    }
})
</script>