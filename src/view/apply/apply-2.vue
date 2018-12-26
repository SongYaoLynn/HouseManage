<template>
  <carousel
    title="申请流程2"
    nextText="保存"
    @preDeal="preDeal"
    @nextDeal="nextDeal"
    :maxPages="2">
    <template slot="content">
      <h1>2</h1>
    </template>
  </carousel>
</template>

<script>
import Carousel from '@/components/carousel/carousel.vue'
export default {
  name: 'apply-2',
  components: {
    Carousel
  },
  data () {
    return {
      id: 2
    }
  },
  methods: {
    preDeal () {
      let page = this.id - 1
      this.$router.push('apply-' + page)
    },
    nextDeal () {
      let page = this.id + 1
      this.$router.push('apply-' + page)
    }
  }
}
</script>

<style scoped>

</style>
