<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item" :class="{selected: t === selected}" v-for="(t,index) in titles"  @click="select(t)" :key="index">{{t}}</div>
    </div>
    <div class="gulu-tabs-content">
       <component class="gulu-tabs-content-item" :is="current" :key="selected"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const childrenComponents =  context.slots.default()
    
    const titles = childrenComponents.map((c, index) => {
      return c.props.title
    })

    const current = computed(() => {
      console.log('重新 return')
      return childrenComponents.filter((tag) => {
        return tag.props.title === props.selected
      })[0]
    })

    const select = (title: string) => {
      context.emit('update:selected', title)
    }

    return  {
      childrenComponents,
      titles,
      current,
      select
    } 
  }  
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>