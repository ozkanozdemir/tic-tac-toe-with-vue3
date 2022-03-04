<template>
  <div class="scores">
    <span>
      X score : {{ xScore }}
    </span>
    <span>
      O Score : {{ oScore }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Scores",
  props: ['xScore', 'oScore']
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