<template>
  <div class="board" :class="crossClass">
    <div v-for="order in [...Array(9).keys()] "
         class="cell"
         :key="order"
         @click="cellClicked(order)">
      <span>
        {{ getCellSign(order) }}
      </span>
      <div class="cell-number" :data-number="order + 1"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Board",
  data() {
    return {
      processing: false,
    }
  },
  computed: {
    ...mapGetters([
      'cells',
      'finished',
      'crossClass',
      'sign',
      'signO',
      'signX',
      'started',
    ])
  },
  methods: {
    ...mapActions([
        'addCell',
        'setSign',
    ]),
    cellClicked(order) {
      if (this.started && !this.finished && !this.processing) {
        // current cell of entered order
        const currentCell = this.cells.find(c => c.order === order)

        // if current cell exist, don't anything
        if (!currentCell) {
          this.processing = true;

          // add cell to cell - store
          this.addCell({order: order, sign: this.sign})

          // change sign
          this.setSign(this.sign === this.signX ? this.signO : this.signX)

          setTimeout(() => {
            this.processing = false
          }, 333)
        }
      }
    },
    getCellSign(order) {
      // find the cell
      const cell = this.cells.find(c => c.order === order)

      if (!cell) {
        return ''
      }

      return cell.sign
    },
  },
  mounted() {
    // listen keydown and click cell
    document.addEventListener('keydown', e => {
      const number = parseInt(e.key);
      if (number > 0 && number < 10) {
        this.cellClicked(number - 1)
      }
    })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');

.board {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 420px;
  height: 420px;
  overflow: hidden;
  position: relative;
}

.cell {
  position: relative;
  font-family: 'Gochi Hand', cursive;
  width: 140px;
  height: 140px;
  outline: 1px solid whitesmoke;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 130px;
  color: whitesmoke;
}

.cell-number {
  position: absolute;
  width: 100%;
  height: 100%;
}
.cell span:empty + .cell-number:after {
  display: flex;
  justify-content: center;
  content: attr(data-number);
  color: rgba(255, 255, 255, 0.05);
}

.cross-line {
  z-index: 999;
  position: absolute;
  width: 100%;
  height: 100%;
}

.cross-line-012 {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) calc(16% - 4px), lime, rgba(0, 0, 0, 0) calc(16% + 4px))
}

.cross-line-345 {
  background: linear-gradient(to top, rgba(0, 0, 0, 0) calc(50% - 4px), lime, rgba(0, 0, 0, 0) calc(50% + 4px))
}

.cross-line-678 {
  background: linear-gradient(to top, rgba(0, 0, 0, 0) calc(16% - 4px), lime, rgba(0, 0, 0, 0) calc(16% + 4px))
}

.cross-line-036 {
  background: linear-gradient(to right, rgba(0, 0, 0, 0) calc(16% - 4px), lime, rgba(0, 0, 0, 0) calc(16% + 4px))
}

.cross-line-147 {
  background: linear-gradient(to left, rgba(0, 0, 0, 0) calc(50% - 4px), lime, rgba(0, 0, 0, 0) calc(50% + 4px))
}

.cross-line-258 {
  background: linear-gradient(to left, rgba(0, 0, 0, 0) calc(16% - 4px), lime, rgba(0, 0, 0, 0) calc(16% + 4px))
}

.cross-line-048 {
  background: linear-gradient(to top right, rgba(0, 0, 0, 0) calc(50% - 4px), lime, rgba(0, 0, 0, 0) calc(50% + 4px))
}

.cross-line-246 {
  background: linear-gradient(to top left, rgba(0, 0, 0, 0) calc(50% - 4px), lime, rgba(0, 0, 0, 0) calc(50% + 4px))
}
</style>