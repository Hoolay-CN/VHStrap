<template>
  <div id="app" class="app-wrapper">
    <aside class="sidebar" id="docs-sidebar">
      <ul class="list-group" @click="onClickSideList">
        <li class="list-group-item-heading">
          <span>基本</span>
        </li>
        <li class="list-group-item active">
          <a v-link="{ path: '/' }">Welcome</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/layout' }">Layout</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/colors' }">Colors</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/icons' }">Icons</a>
        </li>
        <li class="list-group-item-heading">
          <span>组件</span>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/buttons' }">Button</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/dropdown' }">Dropdown</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/form' }">Form</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/checkbox' }">Checkbox</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/select' }">Select</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/radio' }">Radio</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/notifications' }">Notification</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/modal' }">Modal</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/badge' }">Badge</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/alert' }">Alert</a>
        </li>
        <li class="list-group-item-heading">
          <span>其他</span>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/preview' }">Preview</a>
        </li>
        <li class="list-group-item">
          <a v-link="{ path: '/thanks' }">Thanks</a>
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
  import $ from 'jquery';

  export default {
    name: 'docs',

    methods: {
      onClickSideList(e) {
        let target = $(e.target);

        target = target.hasClass('list-group-item') ? target : target.closest('.list-group-item');

        if (target.hasClass('active')) {
          return;
        }

        $('#docs-sidebar')
               .find('.list-group-item')
               .filter('.active')
               .add(target)
               .toggleClass('active');
      }
    }
  }
</script>