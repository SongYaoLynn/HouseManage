<template>
  <Card style="height: 300px">
    <p slot="title">
      {{title}}
    </p>
    <div slot="extra">
      <Button type="text" size="small" @click="$emit('viewMore', title)">查看更多>></Button>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'MyInfoCard',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods:{

  }
}
</script>

<style lang="less">
  .content{
    margin-left: 16px;
  }
</style>
