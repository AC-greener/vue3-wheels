<template>
  <div>
    <Switch v-model:value="checked"  />
    <!-- <Switch :value="checked" @update:value="checked = $event" /> -->
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  name: 'SwitchDemo',
  components: {
    Switch
  },
  setup() {
    const checked = ref(false)
    return {
      checked
    }
  }
}
</script>