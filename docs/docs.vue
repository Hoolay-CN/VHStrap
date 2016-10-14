<template>
  <div id="app" class="app-wrapper">
    <aside class="sidebar">
      <ul class="list-group">
        <li class="list-group-item">
          <a v-link="{ path: '/' }">Welcome</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/buttons' }">Buttons</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/checkbox' }">Checkbox</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/form' }">Form</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/notifications' }">Notifications</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/icons' }">Icons</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/modal' }">Modal</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/preview' }">Preview</a>
        </li>
      </ul>
    </aside>
    <div class="markdown-body">
      <div class="wrap">
        <section class="l-offset"></section>
        <div class="r-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'docs'
  }
</script>