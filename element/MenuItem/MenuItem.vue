<template>
    <component :is="currentItem" :index="item.path">
      <template slot="title">
        <i v-if="item.icon" :class="`el-icon-${item.icon}`"></i>
        <span>{{item.name}}</span>
      </template>
      <!--el-submenu-->
      <template v-if="item.submenu && item.submenu.length">
        <menu-item v-for="(submenuItem, Index) in item.submenu" :key="Index" :item="submenuItem"></menu-item>
      </template>
      <!--el-menu-item-group-->
      <template v-if="item.group && item.group.length">
        <menu-item v-for="(groupItem, Index) in item.submenu" :key="Index" :item="groupItem"></menu-item>
      </template>
    </component>
</template>

<script>
export let MenuItem = {
  name: 'MenuItem',
  props: ['item'],
  computed: {
    currentItem () {
      if (this.item.submenu) {
        return 'el-submenu'
      } else if (this.item.group) {
        return 'el-menu-item-group'
      } else {
        return 'el-menu-item'
      }
    }
  }
}
export default MenuItem
</script>

<style scoped>

</style>
