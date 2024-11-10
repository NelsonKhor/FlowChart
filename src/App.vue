<script setup>
import { ref } from 'vue'
import { VueFlow } from '@vue-flow/core'

import SpecialNode from './components/SpecialNode.vue'
import SpecialEdge from './components/SpecialEdge.vue'

// these are our nodes
const nodes = ref([
  { 
    id: '1',
    type: 'input', 
    position: { x: 250, y: 5 },
    data: { label: 'Node 1' },
  },
  { 
    id: '2', 
    position: { x: 100, y: 100 },
    data: { label: 'Node 2' },
  },
  { 
    id: '3', 
    type: 'output', 
    position: { x: 400, y: 200 },
    data: { label: 'Node 3' },
  },
  {
    id: '4',
    type: 'special',
    position: { x: 400, y: 200 },
    data: {
      label: 'Node 4',
      hello: 'world',
    },
  },
])

// these are our edges
const edges = ref([
  { 
    id: 'e1->2',
    source: '1', 
    target: '2',
  },
  { 
    id: 'e2->3',
    source: '2', 
    target: '3', 
    animated: true,
  },
  {
    id: 'e3->4',
    type: 'special',
    source: '3',
    target: '4',
    data: {
      hello: 'world',
    }
  },
])
</script>

<template>
  <div style="width: 100vw; height: 100vh">
    <VueFlow :nodes="nodes" :edges="edges">
      <!-- bind your custom node type to a component by using slots, slot names are always `node-<type>` -->
      <template #node-special="specialNodeProps">
        <SpecialNode v-bind="specialNodeProps" />
      </template>

      <!-- bind your custom edge type to a component by using slots, slot names are always `edge-<type>` -->
      <template #edge-special="specialEdgeProps">
        <SpecialEdge v-bind="specialEdgeProps" />
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