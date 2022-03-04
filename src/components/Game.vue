<template>
  <div class="game">
    <Scores :xScore="xScore" :oScore="oScore" />
    <Board :crossClass="crossClass" />
    <Message :message="message" :status="status" />
    <IButton v-if="!started || finished" @click="startGame" class="start-button">
      START
    </IButton>
  </div>
</template>

<script>
import Board from './Board'
import Message from './Message'
import Scores from './Scores'
import IButton from './ui/IButton'

export default {
  name: "Game",
  components: {
    Board,
    Scores,
    Message,
    IButton,
  },
  data() {
    return {
      cells: [],
      crossClass: {},
      sign: 'x',
      signX: 'x',
      signO: 'o',
      started: false,
      finished: false,
      status: 'danger',
      message: '',
      winningOrder: [],
      winningOrders: [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ],
      xScore: 0,
      oScore: 0,
    }
  },
  watch: {
    cells: {
      handler(val) {
        const signedXValues = val.filter(v => v.sign === this.signX)
        const signedXOrders = signedXValues.map(s => s.order)
        const signedOValues = val.filter(v => v.sign === this.signO)
        const signedOOrders = signedOValues.map(s => s.order)

        // Who won
        if (this.winnerControl(signedXOrders)) {
          this.message = 'X Won'
          this.status = 'success'
          this.finished = true
          this.xScore++
        } else if (this.winnerControl(signedOOrders)) {
          this.message = 'O Won'
          this.status = 'success'
          this.finished = true
          this.oScore++
        } else {
          // Game over
          if (val.length >= 9) {
            this.message = 'Game Over!'
            this.status = 'danger'
            this.finished = true
          }
        }


      },
      deep: true
    },
    winningOrder: {
      handler(val) {
        console.log('val', val)
        if (val && val.length > 0) {
          this.crossClass = {
            'cross-line-012': val.every(w => [0, 1, 2].includes(w)),
            'cross-line-345': val.every(w => [3, 4, 5].includes(w)),
            'cross-line-678': val.every(w => [6, 7, 8].includes(w)),
            'cross-line-036': val.every(w => [0, 3, 6].includes(w)),
            'cross-line-147': val.every(w => [1, 4, 7].includes(w)),
            'cross-line-258': val.every(w => [2, 5, 8].includes(w)),
            'cross-line-048': val.every(w => [0, 4, 8].includes(w)),
            'cross-line-246': val.every(w => [2, 4, 6].includes(w)),
          }
        }
      },
      deep: true
    }
  },
  provide() {
    return {
      cells: this.cells,
      crossClass: this.crossClass,
      cellClicked: this.cellClicked,
      getCellSign: this.getCellSign,
    }
  },
  methods: {
    cellClicked(order) {
      if (this.started && !this.finished) {
        this.cells.push(
            {order: order, sign: this.sign}
        )
        this.sign = this.sign === this.signX ? this.signO : this.signX
      }
    },
    winnerControl(orders) {
      return this.winningOrders.some(w => {
        const result = w.every(value => orders.includes(value))
        if (result) {
          this.winningOrder = w
        }
        return result
      })
    },
    getCellSign(order) {
      const cell = this.cells.find(c => c.order === order)

      if (!cell) {
        return ''
      }

      return cell.sign
    },
    startGame() {
      // Initial values for new game
      this.message = '';
      this.sign = this.signX;
      this.started = true;
      this.finished = false;
      this.winningOrder = [];
      this.crossClass = {};
      this.cells = []
    },
  }
}
</script>

<style scoped>
  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
  .start-button {
    margin-top: 16px;
  }
</style>