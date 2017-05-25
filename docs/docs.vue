<template>
  <div id="app" class="app-wrapper">
    <aside class="sidebar" id="docs-sidebar">
      <ul class="list-group" @click="onClickSideList">
        <li class="list-group-item-heading">
          <span>基本</span>
        </li>
        <li class="list-group-item active">
          <router-link to="/">Welcome</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/layout">Layout</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/colors">Colors</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/icons">Icons</router-link>
        </li>
        <li class="list-group-item-heading">
          <span>组件</span>
        </li>
        <li class="list-group-item">
          <router-link to="/buttons">Button</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/dropdown">Dropdown</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/form">Form</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/checkbox">Checkbox</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/radio">Radio</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/input">Input</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/select">Select</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/notifications">Notification</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/modal">Modal</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/tooltip">Tooltip</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/badge">Badge</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/alert">Alert</router-link>
        </li>
        <li class="list-group-item-heading">
          <span>其他</span>
        </li>
        <li class="list-group-item">
          <router-link to="/thanks">Thanks</router-link>
        </li>
      </ul>
       <!-- HOOLAY.cn -->
      <a href="https://github.com/Hoolay-CN/VHStrap" class="logo-link" target="_blank" style="font-size: 13px; width: 100%; text-align: center; right: 0;">
        Made with <vh-icon type="favorite" style="font-size: 12px; color: orangered"></vh-icon> github.com .
      </a>
    </aside>
    <div class="markdown-body">
      <div class="wrap">
        <section class="l-offset"></section>
        <div class="r-content" id="rContent">
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in"
          >
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import $ from 'jquery';
  import { VhIcon } from 'src/components/iconfonts';

  export default {
    name: 'Docs',

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

        document.body.scrollTop = 0
      }
    },

    components: {
      VhIcon
    }
  }
</script>