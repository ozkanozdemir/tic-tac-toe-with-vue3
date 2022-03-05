<template>
  <div class="scores">
    <span :class="{active: sign === signX}">
      X score : {{ xScore }}
    </span>
    <span :class="{active: sign === signO}">
      O Score : {{ oScore }}
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Scores",
  computed: {
    ...mapGetters([
        'xScore',
        'oScore',
        'sign',
        'signX',
        'signO',
    ])
  }
}
</script>

<style scoped>
  .scores {
    display: flex;
    justify-content: space-around;
    width: 360px;
    padding: 12px;
    background-color: whitesmoke;
    margin-bottom: 22px;
    font-size: 22px;
    border-radius: 6px;
  }
  .scores .active {
    cursor: default;
    color: #0e980e;
    font-weight: bold;
  }
</style>