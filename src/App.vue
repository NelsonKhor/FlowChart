<script setup>
import { ref } from 'vue'
import { VueFlow, useVueFlow, Panel } from '@vue-flow/core'
import SpecialNode from './components/SpecialNode.vue'

// these are our nodes
const nodes = ref([
  { 
    id: '1', 
    position: { x: 50, y: 50 },
    data: { label: 'Node 1' },
  },
])

// Create node function
function createNode() {
  // Generate Id
  const newNodeId = `${nodes.value.length + 1}`
  nodes.value.push({
    id: newNodeId,
    type: 'default',
    position: {x: 400, y: 400},
    data: { label: `Node ${newNodeId}`}
  })
}
</script>

<template>
  <div style="width: 500px; height: 500px">
    <button @click="createNode">Create Node</button>
    <VueFlow :nodes="nodes" :edges="edges">
      <!-- bind your custom node type to a component by using slots, slot names are always `node-<type>` -->
      <template #node-special="specialNodeProps">
        <SpecialNode v-bind="specialNodeProps" />
      </template>
    </VueFlow>
</div>
</template>

<style>
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';
</style>