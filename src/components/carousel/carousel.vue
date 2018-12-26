<template>
  <Layout>
    <Header style="color: #F0F0F0">
      <h2>{{title}}</h2>
    </Header>
    <Content>
      <slot name="content"></slot>
    </Content>
    <Footer>
      <Button @click="preFun" v-show="preShowState">{{preText}}</Button>
      <Button type="primary" @click="nextFun" v-show="nextShowState">{{nextText}}</Button>
    </Footer>
  </Layout>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    preText: {
      type: String,
      default: '前一页'
    },
    nextText: {
      type: String,
      default: '后一页'
    },
    // preShowState: {
    //   type: Boolean,
    //   default: true
    // },
    // nextShowState: {
    //   type: Boolean,
    //   default: true
    // },
    maxPages: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      id: 0,
      preShowState: true,
      nextShowState: true
    }
  },
  methods: {
    preFun () {
      // if (this.id > 0) {
      //   this.id--
      //   // this.preShowState = true
      //   this.$emit('preDeal', this.id)
      // } else {
      //   // this.preShowState = false
      // }
      this.$emit('preDeal')
    },
    nextFun () {
      // if (this.id < this.maxPages) {
      //   this.id++
      //   // if (this.id > 0) {
      //   //   this.preShowState = true
      //   // } else {
      //   //   this.preShowState = false
      //   // }
      //   this.$emit('nextDeal')
      // }
      this.$emit('nextDeal')
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
