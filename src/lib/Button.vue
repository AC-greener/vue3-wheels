<template>
  <div>
    <button v-bind="$attrs">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    size: String,
    disabled: Boolean 
  },
  inheritAttrs: false,
  setup(props, context) {
    console.log({...props})
    console.log({...context.attrs})
    const  { size, ...rest} = context.attrs
    return {
      size, rest
    }
  }
}
</script>
<style lang="scss" scoped>
  div{
    border: 1px solid red
  }
</style>