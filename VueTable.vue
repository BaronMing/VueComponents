<template>
  <table>
    <thead>
    <tr>
      <td v-for="(item, index) in tableHead" :key="index" @click.stop="sort">
        {{item}}
      </td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in tableBody" :key="index">
      <td v-for="(key, index) in tableHead" :key="index">
        {{item[key]}}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
function makeSortRule (key, toggle) {
  return function (o, p) {
    let a = o[key]
    let b = p[key]
    if (a === b) {
      return 0
    } else if (toggle) {
      if (typeof a === typeof b) {
        return a < b ? -1 : 1
      } else {
        return typeof a < typeof b ? -1 : 1
      }
    } else {
      if (typeof a === typeof b) {
        return a > b ? -1 : 1
      } else {
        return typeof a > typeof b ? -1 : 1
      }
    }
  }
}

export VueTable {
  data () {
    return {
      tableHead: [],
      tableBody: [],
      toggle: true
    }
  },
  methods: {
    sort (event) {
      let text = event.target.textContent.trim()
      this.toggle = !this.toggle

      let byThisRule = makeSortRule(text, this.toggle)

      if (~this['tableHead'].indexOf(text)){
        this['tableBody'].sort(byThisRule)
      }
    }
  }
}
export default VueTable
</script>

<style scoped>

</style>
