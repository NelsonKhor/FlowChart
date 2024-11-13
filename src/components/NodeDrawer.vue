<template>
    <div>
        <h2>Node</h2>
        <div>
            <label>Title:</label>
            <input v-model="nodeData.data.label" />
        </div>
        <div>
            <label>Description:</label>
            <input v-model="nodeData.data.description" />
        </div>
        <button @click="deleteNode">Delete Node</button>
        <div v-if="useNodesData.type === 'sendMessage'">
            <h3>Attachments</h3>
            <input type="file" @change="handleFileUpload" />
            <div v-for="attachment in nodeData.attachments" :key="attachment.id">
                <span>{{ attachment.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from '../stores/store'
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const route = useRoute()
        const router = useRouter()
        const flowStore = useStore()
        const nodeId = route.params.id
        const nodeData = ref (flowStore.nodes.find(node => node.id === nodeId))

        function deleteNode() {
            flowStore.deleteNode(nodeId)
            router.push("/")
        }

        function handleFileUpload() {

        }

        return { nodeData, deleteNode, handleFileUpload}
    }
})
</script>