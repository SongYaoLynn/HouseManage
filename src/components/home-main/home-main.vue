<template>
  <Row type="flex" justify="center" class="content-wrapper">
    <Col span="4"></Col>
    <Col span="16">
      <Layout>
        <Header style="color: #F0F0F0; height:100px">
          <h1 class="header-text">test</h1>
        </Header>
        <Layout>
          <Content>
            <!--<keep-alive>-->
            <router-view></router-view>
            <!--</keep-alive>-->
          </Content>
          <Sider hide-trigger>
            <Card>
              <div style="text-align:center">
                <h3>{{time}}</h3>
              </div>
            </Card>
            <Button type="default" @click="loginModal = true" long>用户管理</Button>
            <Button type="default" @click="download" long>下载专区</Button>
            <Card>
              <p slot="title">相关链接</p>
              <ul v-for="item in links" style="margin-left: 16px">
                <li>
                  <a :href=item.url target="_blank">{{item.info}}</a>
                </li>
              </ul>
            </Card>
          </Sider>
        </Layout>
        <Footer class="layout-footer-center">Footer</Footer>
      </Layout>
    </Col>
    <Col span="4"></Col>
    <Modal
      v-model="loginModal"
      :footer-hide="true"
      title="用户登陆">
      <div>
        <login-form @on-success-valid="handleSubmit"></login-form>
        <p class="login-tip">输入任意用户名和密码即可</p>
      </div>
    </Modal>
  </Row>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  name: 'home-main',
  components: {
    LoginForm
  },
  data () {
    return {
      time: '',
      links: [
        {
          id: 1,
          info: '文字1',
          url: 'https://juejin.im/explore/frontend'
        },
        {
          id: 2,
          info: '文字2',
          url: 'https://bt.byr.cn/'
        }
      ],
      loginModal: false
    }
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    setTime () {
      let date = new Date()
      this.time = date.toLocaleString()
      // setInterval(this.setTime, 30*1000)
    },
    download () {
      let route = {
        name: 'download'
      }
      this.$router.push(route)
    },
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      })
    }
  },
  mounted () {
    this.setTime()
  }
}
</script>

<style less>
  .header-text{
    position: absolute;
    top: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
  .content-wrapper{
    height: 100%;
    overflow: auto;
  }
</style>
