<template>
  <div>
    <Header></Header>
    <div class="content">
      <div class="content-container">
        <div
          v-for="(item, index) in list"
          :key="'list' + index"
          class="content-div"
        >
          <Content :item="item" :index="index" :time="time"> </Content>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default {
  name: "Home",
  data() {
    return {
      time: new Date().getTime(),
      list: [
        {
          src: "/WEB_css.jpeg",
          major: "CSS入门",
          article:
            "CSS是一种能为网页增添样式的语言。它能够修改网页中的字体样式、颜色、背景，增加华丽的动画与3D 效果，是给网页增添设计感的工具。"
        },
        {
          src: "/WEB_css_block.jpeg",
          major: "CSS工具箱",
          article:
            "在你进一步了解CSS样式和布局之前，这里为你提供一个助你写出合格CSS和理解所有基本理论的工具箱。"
        },
        {
          src: "/WEB_css_style.png",
          major: "CSS样式文字",
          article:
            "在这里我们开始学习为文本添加样式的基础，包括设置字体、粗细、斜体、行还有字符间距、阴影以及文本的其他特征。"
        },
        {
          src: "/WEB_css_layout.jpg",
          major: "CSS布局",
          article:
            "接下来我们将介绍如何把你想要的内容放在正确位置上，将涉及浮动和定位等相关的布局方法。"
        }
      ]
    };
  },
  components: {
    Header,
    Footer,
    Content
  }
};
</script>

<style>
.content {
  width: 100%;
  margin: 50px 0;
}

.content-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.content-div {
  width: 50%;
  box-sizing: border-box;
  padding-left: 100px;
}
</style>
