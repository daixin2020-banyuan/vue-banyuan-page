<template>
  <div>
    <img v-oss-src="item.src" style="width:400px;height:198px" />
    <div class="content-title">
      <p>{{ item.major }}</p>
    </div>
    <div class="article-container">
      {{ item.article }}
      <div class="time">{{ time | globalFormatTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    },
    time: {
      type: Number
    }
  }
};
</script>

<style>
.content-title {
  width: 400px;
  height: 68px;
  font-size: 18px;
  color: #000;
  letter-spacing: 1.08px;
  line-height: 68px;
  padding-left: 10px;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.article-container {
  max-width: 400px;
  word-wrap: break-word;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #505050;
  line-height: 20px;
  margin-bottom: 50px;
}
.time {
  padding-top: 30px;
  float: right;
}
</style>
