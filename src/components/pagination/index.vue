  <div class="vh-pagination" v-show="labels.length > 0">
    <ul class="pagination pagination-{{ size }}">
      <li @click="_moveSlide(-1, false)"
          :class="{
            'page-item': true,
            'disabled': currentSlide === 1
          }"
      >
        <a href="javascript:void(0);" class="page-link">&laquo;</a>
      </li>
      <li v-for="($index, n) in labels"
          track-by="$index"
          :class="{
            'page-item': true,
            'active': current == n
          }"
      >
        <a href="javascript:void(0);" @click="onPage(n)" class="page-link">{{ n }}</a>
      </li>
      <li @click="_moveSlide(1, false)"
          :class="{
            'page-item': true,
            'disabled': currentSlide === totalSlide
          }"
      >
        <a href="javascript:void(0);" class="page-link">&raquo;</a>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">

  export default {
    name: 'VhPagination',

    data: () => {
      return {
        labels: [], // calculated page
        currentSlide: 1
      }
    },
    props: {
      limit: {
        type: Number,
        default: 20
      },
      total: {
        type: Number,
        required: true
      },
      size: {
        type: String,
        default: 'sm' // `lg` `md(default)`
      },
      offset: {
        type: Number,
        default: 8
      },
      current: { // Current page number
        type: Number,
        default: 1,
        twoWay: true
      }
    },
    computed: {
      'pages'() {
        return Math.ceil(this.total / this.limit);
      },
      'totalSlide'() {
        return Math.ceil(this.pages / this.offset);
      }
    },
    methods: {
      /**
       * If dir `false` . To which slide of current page .
       * @param dir, -1 or +1 , boolean
       * @param calculateCurrentSlide current page for slide show
       * @private
       */
      _moveSlide: function (dir, calculateCurrentSlide = true) {
        let labels = [];

        let lastSlide = this.totalSlide;
        // go to next slide
        let currentSlide = calculateCurrentSlide ? (this.current <= 0 ? 1 : Math.ceil(this.current / this.offset)) : this.currentSlide;

        // Which slide to go ?
        let whichSlide = currentSlide + (dir === false ? 0 : dir);

        dir !== false && ( whichSlide = whichSlide <= 0 ? 1 : (whichSlide > lastSlide ? lastSlide : whichSlide));

        let starter = (whichSlide - 1) * this.offset;

        // set current slide
        this.currentSlide = whichSlide;

        while (++starter) {
          if (labels.length == this.offset || this.pages < starter) {
            break;
          }

          labels.push(starter);
        }

        // add header & footer
        if (whichSlide != 1) {
          labels.unshift(labels[0] - 1);
        }

        if (whichSlide != lastSlide) {
          labels.push(labels[labels.length - 1] + 1);
        }

        // check current label
        if (this.labels[0] != labels[0]) {
          this.$set('labels', labels);
        }
      },
      _updatePageState: function () {
        // step for no pager
        if (this.total == 0 || this.total < this.limit) {
          this.labels = [];
          return;
        }

        this._moveSlide(false);
      },

      onPage: function(n) {
        this.current = n;
        // Update State
        this._updatePageState();
      }
    },
    watch: {
      total: function(a, b) {
        this.current = 1;
        this.labels = [];

        this._updatePageState();
      }
    },
    ready: function () {
      if (this.offset < 6) {
        throw new Error('Offset number must be greater than Six(6).');
      }
      this._updatePageState();
    }
  }
</script>

<style>
  .page-link:focus, .page-link:hover {
    text-decoration: none;
  }
</style>
