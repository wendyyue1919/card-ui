<template>
  <div id="app">
    <Demo />
    <m-card
      imgSrc="banner.png"
      summary="教学标题教学标题教学标题教学标题教学标题"
     />
     <m-card
      imgSrc="banner2.png"
      summary="教学标题教学标题教学标题教学标题教学标题"
     >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级  528人报名</div>
          <div class="price">¥299.00</div>
        </div>
      </template>
     </m-card>
     <m-card
      imgSrc="banner.png"
      :width="370"
      :imgHeight="90"
     >
     插槽内容插槽内容插槽内容插槽内容插槽内容
     <template v-slot:footer>
       <div class="footer">
          <div class="level">中级  528人报名</div>
          <div class="price">¥299.00</div>
        </div>
     </template>
     </m-card>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}
</style>
