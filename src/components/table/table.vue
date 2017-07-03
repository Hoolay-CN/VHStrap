<template>
  <table class="vh-table table" :class="this.opts.tableClasses">
    <thead>
      <tr>
        <th v-for="cc in thColumns" @click="_headClick(cc)">
          <span> {{ cc[1] }} </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(el, index) in rows">
        <td v-for="c in tdColumns">
          <slot v-if="`${c.indexOf('__')}` == '-1'" :name="`td-item-${c}`" :row="el" :k="c" :v="el[c]" :index="index">
            {{ el[c] }}
          </slot>

          <!-- select -->
          <div class="td-select" v-if="c === '__select__'">
            <input type="checkbox" v-model="el.__selected" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'VhTable',

    props: {
      rows: {
        type: Array,
      },
      columns: {
        type: Array,
        'default': []
      },
      options: {
        type: Object,
      }
    },

    data () {
      return {
        opts: null,
        thColumns: [],
        tdColumns: [],
        sortableState: null
      }
    },

    created () {
      const opts = {
        sortable: false,
        tableClasses: 'table-bordered table-striped'
      }

      this.opts = Object.assign(opts, this.options || {})

      if (this.opts.sortable) {
        this.sortableState = {
          activeColumn: false,
        }
      }

      this._preparedInternalColumns()

      // `__` feature
      this._supportedPrefixFeature('__select__')
    },

    watch: {
      'columns' () {
        this._preparedInternalColumns()
      },

      'rows' () {
        this._supportedPrefixFeature('__select__')
      }
    },

    computed: {
    },

    methods: {
      _supportedPrefixFeature (feat) {
        if (feat && !!~this.tdColumns.indexOf(feat)) {
          switch (feat.replace(/__/g, '')) {
            case 'select':
              this._injectRowItemField('__selected', false)
              break;
          }
        }
      },
      _injectRowItemField (key, value) {
        this.rows && this.rows.forEach((it) => {
          if (it && !it.hasOwnProperty(key)) {
            this.$set(it, key, value) // force set row field reactive
          }
        })
      },
      _preparedInternalColumns () {
        this.thColumns = []
        this.tdColumns = []

        Array.isArray(this.columns) && this.columns.forEach((it) => {
          let tmp = null

          if (it && !!~it.indexOf('|')) {
            tmp = it.split('|')
            tmp = [tmp[0].trim().toLowerCase(), tmp[1].trim()]
            this.tdColumns.push(tmp[0])
            this.thColumns.push(tmp)
          } else {
            tmp = it.trim()
            this.thColumns.push([tmp, tmp])
            this.tdColumns.push(tmp)
          }
        })
      },

      _orderByColumn (col) {
        this.sortableState.activeColumn = col
        this.$emit('order-by-column', col)
      },

      _headClick (col) {
        this.opts.sortable && this._orderByColumn(col)
      }
    }
  }
</script>