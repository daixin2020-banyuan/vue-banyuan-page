<template>
  <div class="header">
    <div class="header-container">
      <img v-oss-src2="'/commonbg/logo.png'" style="width:200px;height:40px" />
      <div>
        <ul class="ul">
          <li style="  padding-right: 50px;">
            首页
          </li>
          <li style="  padding-right: 50px;">
            职前集训
          </li>
          <div class="li-container">
            <li>高校俱乐部</li>

            <img class="club-pic" v-oss-src2="'/commonbg/ic_arrow_down.svg'" />
          </div>
          <div class="login-container">
            <div class="login">登陆</div>
            <div>注册</div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.header {
  box-shadow: 0 3px 10px #efefef;
  width: 100%;
}
.header-container {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  line-height: 80px;
  align-items: center;
}
.ul {
  list-style: none;
  display: flex;
}

.li-container {
  display: flex;
  margin-right: 80px;
  color: #6967ce;
}
.club-pic {
  float: left;
}
.login-container {
  display: flex;
  position: relative;
  width: 76px;
  justify-content: space-between;
  font-weight: 400;
}
.login::after {
  content: "";
  width: 1px;
  height: 14px;
  background-color: #444;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 1px #9c9c9c;
}
</style>
