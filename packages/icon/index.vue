<template>
  <i :class="classObject" />
</template>

<script>
import create from '../utils/create'

export default create({
  name: 'icon',

  props: {
    type: {
      type: String,
      required: true
    },
    large: Boolean
  },

  computed: {
    classObject () {
      let classType = `weui-icon-${this.type}`

      return {
        [classType]: true,
        'weui-icon_msg': this.large
      }
    }
  }
})
</script>
