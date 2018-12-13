<template>
    <el-button
      :size="button.size"
      :autofocus="button.autofocus"
      :native-type="button.nativeType"
      :type="buttonType"
      :class="buttonClass"
    >
      <i v-if="button.content.icon" :class="button.content.icon"></i>
      {{button.content.words}}
    </el-button>
</template>

<script>
import {colorToType} from './MapBetweenColorAndType'
function is (className) {
  return 'is-' + className
}
export let Button = {
  props: ['button'],
  data () {
    return {
      buttonType: '',
      buttonClass: ''
    }
  },
  watch: {
    button: {
      deep: true,
      immediate: true,
      handler: function (newValue) {
        let res = []
        let buttonType
        let reg = /plain/g

        if (newValue.type) {
          newValue.type = newValue.type.toLowerCase().replace(/\s/g, '')

          reg.test(newValue.type) && res.push(is('plain'))

          buttonType = newValue.type.replace(reg, '')

          this.buttonType = (buttonType in colorToType) ? colorToType[buttonType] : buttonType
        }

        newValue.shape && res.push(is(newValue.shape))
        newValue.status && res.push(is(newValue.status))

        this.buttonClass = res.join(' ')
      }
    }
  }
}
export default Button
</script>

<style scoped>

</style>
