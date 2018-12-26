<template>
  <Layout>
    <Content>
      <h1>detail test</h1>
      <h2>{{id}}</h2>
    </Content>
  </Layout>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      id: ''
    }
  },
  created () {
    console.log(this.$route.params)
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

</style>
