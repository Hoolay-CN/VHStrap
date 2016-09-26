<template lang="html">
  <div class="carousel slide" @mouseenter="pause()" @mouseleave="start()">
    <!-- Indicators -->
    <ol class="carousel-indicators" v-show="indicators">
      <li v-for="i in indicator" @click="indicatorClick($index)" v-bind:class="{active:$index === index}"><span></span></li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <slot></slot>
    </div>
    <div v-show="controls" class="carousel-controls hidden-xs">
      <a class="left carousel-control" role="button" @click.stop.prevent="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      </a>
      <a class="right carousel-control" role="button" @click.stop.prevent="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      </a>
    </div>
  </div>
</template>

<script>
const DIRECTION = {
  rtl: {
    outgoing: 'left',
    incoming: 'right',
    overlay: 'next',
  },
  ltr: {
    outgoing: 'right',
    incoming: 'left',
    overlay: 'prev',
  }
};

export default {
  data () {
    return {
      indicator: [],
      index: 0,
      direction: DIRECTION.rtl,
      isAnimating: false,
    }
  },
  props: {
    indicators: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  watch: {
    index(newVal, oldVal) {

      this.slide(newVal, oldVal);
    },
  },
  methods: {
    indicatorClick(index) {
      if(this.index === index) {return false;}
      this.isAnimating = true;
      (this.index > index) && (this.direction = DIRECTION.ltr);
      this.index = index;
    },
    slide(newVal, oldVal) {
      if (!this.$el) { return; }
      let items = this.$el.querySelectorAll('.carousel-item');

      items[newVal].classList.add(this.direction.incoming, this.direction.overlay);

      items[newVal].offsetWidth;

      items[newVal].classList.add('active');

      items[oldVal].classList.add(this.direction.outgoing);
      items[newVal].classList.remove(this.direction.incoming);

      let _carouselAnimation = setTimeout(() => {
        items[oldVal].classList.remove(this.direction.outgoing, 'active');
        items[newVal].classList.remove(this.direction.overlay);
        this.direction = DIRECTION.rtl;
        this.isAnimating = false;
      }, 600);
    },
    prev() {
      if(this.isAnimating) {return false}
      this.direction = DIRECTION.ltr;
      this.index === 0 ? this.index = this.indicator.length - 1 : this.index -= 1
    },
    next() {
      if(this.isAnimating) {return false}
      (this.index + 1) < this.indicator.length ? this.index += 1 : this.index = 0
    },
    pause() {
      if (this.interval === 0 || typeof this.interval === 'undefined') {return}
      clearInterval(this._intervalId);
    },
    start() {
      if (this.interval === 0 || typeof this.interval === 'undefined') {return}
      this._intervalId = setInterval(() => {
        this.next()
      }, this.interval)
    }
  },
  ready() {
    this.start();
  }
}
</script>

<style lang="css">
.carousel-control {
  cursor: pointer;
}
</style>
