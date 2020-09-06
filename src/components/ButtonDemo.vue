<template>
  <Button 
    size='small'
    @click="handelClick" 
    @focus="handelClick" 
    @mouseover="handelClick">
    你好
  </Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  name: 'Switch',
  setup() {
    const handelClick = () => { console.log('click') }
    return {
      handelClick
    }
  },
  components: {
    Button
  }
}
</script>