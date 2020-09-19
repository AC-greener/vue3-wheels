<template>
  <div>
    <div>Dialog 示例</div>
    <h1>示例1111</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog  :visible="x" @update:visible="x = $event" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <h1>hello</h1>
        <h2>world</h2>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
    <h1>示例2222</h1>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
import { ref, h } from 'vue'
import {
  openDialog
} from '../lib/openDialog'
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
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题222'),
        content: '你好111',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      x,
      toggle,
      f1,
      f2,
      showDialog
    }
  }
}
</script>