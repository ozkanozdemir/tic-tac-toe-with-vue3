<template>
  <div class="scores">
    <span :style="{color: sign === signX ? 'darkgreen' : '' }">
      X score : {{ xScore }}
    </span>
    <span :style="{color: sign === signO ? 'darkgreen' : '' }">
      O Score : {{ oScore }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Scores",
  props: ['xScore', 'oScore', 'sign', 'signX', 'signO']
}
</script>

<style scoped>
  .scores {
    display: flex;
    justify-content: space-around;
    width: 360px;
    padding: 12px;
    background-color: whitesmoke;
    margin-bottom: 12px;
    font-size: 20px;
  }
</style>