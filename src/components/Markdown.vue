<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
import {
  ref
} from 'vue'
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // const content = ref < string > (null)
    // // 异步import
    // import(props.path).then(result => {
    //   console.log(result)
    //   content.value = result.default
    // })
    // return {
    //   content
    // }
  }
}
</script>