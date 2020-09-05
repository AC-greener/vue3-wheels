<template>
<h1>
  导航栏
  <br />
  <router-link to='/'>首页</router-link>
  <router-link to='/xxx'>Hello</router-link>
</h1>
<router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
