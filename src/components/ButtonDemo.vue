<template>
  <Button 
    @click="handelClick" 
    @focus="handelClick" 
    @mouseover="handelClick">
    你好
  </Button>
  <Button 
    theme="link"
    @click="handelClick" 
    @focus="handelClick" 
    @mouseover="handelClick">
    你好
  </Button>
  <Button 
    theme="text"
    @click="handelClick" 
    @focus="handelClick" 
    @mouseover="handelClick">
    你好
  </Button>
  <Button 
    theme="button"
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