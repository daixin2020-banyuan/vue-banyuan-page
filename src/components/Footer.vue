<template>
  <div class="footer">
    <div class="foot-container">
      <div class="footer-section_1">
        <img
          v-oss-src2="'/commonbg/logo-footer.png'"
          style="width:146px;margin-bottom:30px"
        />
        <div>
          <p>© 2020 半圆（南京）网络有限公司 版权所有</p>
          <p>苏 ICP备 18056744-1</p>
          <p>营业执照 ICP许可证</p>
        </div>
      </div>
      <div class="footer-section_2">
        <div style="  margin-bottom: 64px;">
          <p>我们的故事</p>
        </div>
        <div>
          <h5>半圆的发展历程和背景，</h5>
          <h5>更清晰的了解我们</h5>
        </div>
      </div>

      <div class="footer-section_3">
        <div style="  margin-bottom: 64px;">
          <p>成为一员</p>
        </div>
        <div>
          <h5>
            半圆学社致力于数字领域的 不断开拓，欢迎志同道合的朋友加入我们。
            和我们交流
          </h5>
        </div>
      </div>
      <div class="footer-section_4">
        <div style="margin-bottom: 64px;">
          <p>和我们交流</p>
        </div>
        <div class="contact-information">
          <img
            v-oss-src2="'/commonbg/phone.svg'"
            style="width:16px;height:16px;margin-right:15px"
          />
          <span>025-58703536</span>
        </div>
        <div class="contact-information" style="margin-bottom:30px">
          <img
            v-oss-src2="'/commonbg/map.svg'"
            style="width:16px;height:16px;margin-right:15px"
          />
          <span> 南京市仙林紫东国际创意园B9栋 </span>
        </div>
        <div class="follow-us-way">
          <div>
            <img v-oss-src2="'/commonbg/weixin.png'" />
          </div>
          <div style="margin-left: 16px;">
            <img v-oss-src2="'/commonbg/weibo.png'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  width: 100%;
  height: 350px;
  background: #303232;
  overflow: hidden;
}
.foot-container {
  margin: 0 auto;
  width: 1200px;
  height: 200px;
  background: #303232;
  padding: 64px 0 85px 0;
  display: flex;
  justify-content: space-between;
}
.footer-section_1 {
  width: 318px;
  font-size: 12px;
  color: aliceblue;
}
.footer-section_1 p {
  padding-bottom: 14px;
}
.footer-section_2 {
  margin-top: 7px;
  width: 154px;
  display: flex;
  flex-direction: column;
  color: aliceblue;
}
.footer-section_2 p {
  font-size: 22px;
  line-height: 30px;
  color: #e3e3e3;
  font-weight: 500;
  cursor: pointer;
}
.footer-section_2 h5 {
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  color: #e3e3e3;
  font-weight: 400;
}
.footer-section_3 {
  margin-top: 7px;
  width: 154px;
  display: flex;
  flex-direction: column;
  color: aliceblue;
}
.footer-section_3 p {
  font-size: 22px;
  line-height: 30px;
  color: #e3e3e3;
  font-weight: 500;
  cursor: pointer;
}
.footer-section_3 h5 {
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  color: #e3e3e3;
  font-weight: 400;
}
.footer-section_4 {
  margin-top: 7px;
  width: 230px;
  display: flex;
  flex-direction: column;
  color: aliceblue;
}
.footer-section_4 p {
  font-size: 22px;
  line-height: 30px;
  color: #e3e3e3;
  font-weight: 500;
  cursor: pointer;
}
.contact-information {
  height: 20px;
  margin-bottom: 10px;
}
.contact-information span {
  width: 154px;
  font-size: 14px;
  line-height: 20px;
}
.follow-us-way {
  display: flex;
}
.follow-us-way img {
  width: 24px;
  height: 24px;
}
</style>
