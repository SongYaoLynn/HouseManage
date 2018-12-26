<template>
    <Layout>
      <Content>
        <my-info-card title="aaa" @viewMore="viewMore">
          <template slot="content">
            <ul v-for="item in infoList">
              <li> <Button type="text" size="small" @click="viewDetail(item.id)">{{item.info}}</Button></li>
            </ul>
          </template>
        </my-info-card>
        <my-info-card title="bbb">
          <template slot="content">test2</template>
        </my-info-card>
        <my-info-card title="bbb">
          <template slot="content">test2</template>
        </my-info-card>
      </Content>
    </Layout>
</template>

<script>
import MyInfoCard from '@/components/my-info-card'
export default {
  name: 'main-page',
  components: {
    MyInfoCard
  },
  data () {
    return {
      infoList: [
        {
          id: 1,
          info: 'info1',
          url: 'https://juejin.im/explore/frontend'
        },
        {
          id: 2,
          info: 'info2',
          url: 'https://bt.byr.cn/'
        }
      ]
    }
  },
  methods: {
    viewMore (id) {
      console.log(id)
      const route = {
        name: 'more',
        params: {
          id
        }
      }
      this.$router.push(route)
    },
    viewDetail (id) {
      console.log(id)
      const route = {
        name: 'detail',
        params: {
          id
        }
      }
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

</style>
