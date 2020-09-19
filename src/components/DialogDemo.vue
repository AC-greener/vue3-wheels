<template>
  <div>
    <div>Dialog 示例</div>
    <h1>示例1111</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog title="我的dialog" :visible="x" @update:visible="x = $event" :ok="f1" :cancel="f2">
      <h1>hello</h1>
      <h2>world</h2>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(true)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {
    }
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
</script>