declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}
declare module '*.md' {
  const string: string
  export default string
}