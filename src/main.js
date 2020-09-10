import Vue from "vue";
import App from "./App.vue";
import Config from "./utils/config";

Vue.config.productionTip = false;

Vue.directive("oss-src", function(el, binding) {
  let imgURL = binding.value;
  if (imgURL) el.setAttribute("src", Config.ossPath + imgURL);
});
Vue.directive("oss-src2", function(el, binding) {
  let imgURL = binding.value;
  if (imgURL) el.setAttribute("src", Config.ossPath2 + imgURL);
});

Vue.filter("globalFormatTime", time => {
  let value = new Date(time);
  let y = value.getFullYear();
  var m = value.getMonth() + 1;
  var d = value.getDate();
  var h = value.getHours();
  var mm = value.getMinutes();
  var s = value.getSeconds();
  return y + "年" + m + "月" + d + "日" + h + "时" + mm + "分" + s + "秒";
});

new Vue({
  render: h => h(App)
}).$mount("#app");
