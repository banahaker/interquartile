<template>
  <div class="tool">
    <tool></tool>
  </div>
</template>

<script>
import tool from './components/tool.vue';

export default {
  name: 'App',
  components: {
    tool
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans TC", sans-serif;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(0, 255, 76);
  background: linear-gradient(
    90deg,
    rgba(0, 255, 76, 1) 0%,
    rgba(0, 255, 162, 1) 42%,
    rgba(0, 212, 255, 1) 100%
  );
}
.tool {
  position: relative;
  bottom: 10%;
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90vw;
}
@media screen and (max-width: 500px){
  .tool{
    bottom: 0;
  }
}
</style>
