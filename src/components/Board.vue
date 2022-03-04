<template>
  <div class="board" :class="crossClass">
    <div v-for="order in [...Array(9).keys()] "
         class="cell"
         :key="order"
         @click="cellClicked(order)">
      {{ getCellSign(order) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
  props: ['crossClass'],
  inject: {
    cells: 'cells',
    cellClicked: 'cellClicked',
    getCellSign: 'getCellSign',
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');

  .board {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 360px;
    height: 360px;
    overflow: hidden;
    position: relative;
  }
  .cell {
    font-family: 'Gochi Hand', cursive;
    width: 120px;
    height: 120px;
    outline: 1px solid whitesmoke;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 110px;
    color: whitesmoke;
  }
  .cross-line {
    z-index: 999;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .cross-line-012 {
    background: linear-gradient(to bottom, rgba(0,0,0,0) calc(16% - 4px), lime , rgba(0,0,0,0) calc(16% + 4px))
  }
  .cross-line-345 {
    background: linear-gradient(to top, rgba(0,0,0,0) calc(50% - 4px), lime , rgba(0,0,0,0) calc(50% + 4px))
  }
  .cross-line-678 {
    background: linear-gradient(to top, rgba(0,0,0,0) calc(16% - 4px), lime , rgba(0,0,0,0) calc(16% + 4px))
  }
  .cross-line-036 {
    background: linear-gradient(to left, rgba(0,0,0,0) calc(16% - 4px), lime , rgba(0,0,0,0) calc(16% + 4px))
  }
  .cross-line-147 {
    background: linear-gradient(to left, rgba(0,0,0,0) calc(50% - 4px), lime , rgba(0,0,0,0) calc(50% + 4px))
  }
  .cross-line-258 {
    background: linear-gradient(to right, rgba(0,0,0,0) calc(16% - 4px), lime , rgba(0,0,0,0) calc(16% + 4px))
  }
  .cross-line-048 {
    background: linear-gradient(to top right, rgba(0,0,0,0) calc(50% - 4px), lime , rgba(0,0,0,0) calc(50% + 4px))
  }
  .cross-line-246 {
    background: linear-gradient(to top left, rgba(0,0,0,0) calc(50% - 4px), lime , rgba(0,0,0,0) calc(50% + 4px))
  }
</style>