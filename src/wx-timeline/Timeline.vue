<template>
  <div class="wrap">
    <div class="header">
      <label>前端小课</label>
      <div class="user">
        <label>周益</label>
        <img src="../assets/header.png" />
      </div>
    </div>
    <ul class="list">
      <li class="cell">
        <img src="../assets/header.png" alt="" />
        <div class="content">
          <label class="name">周一</label>
          <p>
            纪念《前端小课》第二阶段课程圆满结束，这一阶段主要搞定CSS布局。以实现一个朋友圈为实践。就是这么牛。
          </p>
          <div class="images">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div class="other">
            <label>2小时以前</label>
            <img src="../assets/star.png" alt="" />
          </div>
          <div class="comment-zone">
            <div>后厂村程序员</div>
            <div>
              <span class="comment-name">西二旗</span>:
              虽然没看懂，感觉很厉害的样子。
            </div>
          </div>
        </div>
      </li>
      <li class="cell">
        <img src="../assets/header.png" alt="" />
        <div class="content">
          <label class="name">后厂村高T</label>
          <p>
            偶尔发现前端小课真心不错，可以从零开始学习前端。
          </p>
          <div class="page-link">
            <img src="../assets/1.png" alt="" />
            <label>第10天：买一块地盖一处院子</label>
          </div>
          <div class="other">
            <label>2小时以前</label>
            <img src="../assets/star.png" alt="" />
          </div>
        </div>
      </li>
      <li class="cell">
        <img src="../assets/header.png" alt="" />
        <div class="content">
          <label class="name">前端小课</label>
          <p>
            第一阶段20天学习了HTML与CSS，第二阶段学习了CSS布局，可以用它来做网站了，开心。
          </p>
          <img class="big-image" src="../assets/3.png" alt="" />
          <div class="other">
            <label>2小时以前</label>
            <img src="../assets/star.png" alt="" />
          </div>
          <div class="comment-zone">
            <div>小花猫</div>
            <div>
              <span class="comment-name">大强</span>: 厉害了，学好教教我做网站。
            </div>
          </div>
        </div>
      </li>
      <li class="cell">
        <img src="../assets/header.png" alt="" />
        <div class="content">
          <label class="name">Lefex</label>
          <p>
            觉得不错就关注和我一起学习前端吧，用微信扫描下面的二维码。
          </p>
          <img class="big-image" src="../assets/2.png" alt="" />
          <div class="other">
            <label>2小时以前</label>
            <img src="../assets/star.png" alt="" />
          </div>
          <div class="comment-zone">
            <div>蒸蒸日上</div>
            <div><span class="comment-name">小灰兔</span>: 关注了！！！</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
wrap {
  width: 100%;
  padding: 0px 0px;
  margin: 0px 0px;
}

.header {
  width: 100%;
  height: 319px;
  background-image: url(../assets/4.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.header > label {
  display: inline-block;
  font-size: 44px;
  width: 100%;
  line-height: 319px;
  text-align: center;
  color: white;
}

.user {
  display: flex;
  flex-direction: row;
  margin-bottom: -20px;
  margin-right: 20px;
  align-items: center;
  position: absolute;
  right: 12px;
  bottom: 5px;
}

.user > label {
  font-size: 17px;
  margin-right: 20px;
  display: inline-block;
  color: white;
}

.user > img {
  width: 71px;
  height: 71px;
  border-radius: 6px;
}

.list {
  list-style: none;
  margin-top: 64px;
}

.cell {
  padding: 11px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f3f3f3;
}

.cell > img {
  width: 44px;
  height: 44px;
  border-radius: 4px;
  min-width: 44px;
}

.cell > .content {
  margin-left: 10px;
  font-size: 17px;
}

.content > label {
  color: #4d638f;
  line-height: 24px;
}

.content > p {
  margin-top: 10px;
  line-height: 24px;
  color: #121212;
}

.images {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 0;
  flex-wrap: wrap;
  margin-top: 5px;
}

.images > img {
  background-color: #d4bebe;
  width: 80px;
  height: 80px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.other {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-top: 5px;
}

.other > label {
  font-size: 14px;
  line-height: 20px;
  color: #b7b7b7;
}

.other img {
  width: 29px;
  height: 19px;
}

.page-link {
  height: 48px;
  background-color: #f3f3f5;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.page-link > img {
  width: 42px;
  height: 42px;
}

.page-link > label {
  font-size: 15px;
  line-height: 21px;
  color: #121212;
  margin-left: 10px;
}

.comment-zone {
  background-color: #f3f3f5;
  padding: 5px;
  margin-top: 5px;
}

.comment-zone div {
  padding: 2px 5px;
}

.comment-zone div:nth-child(1) {
  font-size: 15px;
  line-height: 21px;
  color: #536892;
  border-bottom: 1px solid #ebebec;
}

.comment-zone div:nth-child(1)::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  background-image: url("../assets/star_small.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 4px;
  margin-right: 4px;
  width: 11px;
  height: 9px;
}

.comment-zone div:nth-child(2) {
  font-size: 15px;
  line-height: 21px;
  color: #000000;
  margin-top: 5px;
}

.comment-name {
  font-size: 15px;
  line-height: 21px;
  color: #536892;
}

.big-image {
  max-width: 260px;
  max-height: 250px;
  margin-top: 10px;
  margin-bottom: 5px;
}
</style>