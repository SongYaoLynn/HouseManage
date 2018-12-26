<template>
  <carousel
    title="申请流程3"
    nextText="保存"
    @preDeal="preDeal"
    @nextDeal="nextDeal"
    :maxPages="2">
    <template slot="content">
      <h1>3</h1>
    </template>
  </carousel>
</template>

<script>
import Carousel from '@/components/carousel/carousel.vue'
export default {
  name: 'apply-3',
  components: {
    Carousel
  },
  data () {
    return {
      id: 3
    }
  },
  methods: {
    preDeal () {
      let page = this.id - 1
      this.$router.push('apply-' + page)
    },
    nextDeal () {
    }
  }
}
</script>

<style scoped>

</style>
