<template>
  <div class="game">
    <Scores/>
    <Board/>
    <Message/>
    <div class="button-container ">
      <IButton v-if="!started || finished" @click="startGame">
        {{ finished ? 'RESTART' : 'START' }} (s)
      </IButton>
      <IButton v-if="!started || finished" @click="resetScores">
        RESET SCORES (r)
      </IButton>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
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
  watch: {
    cells: {
      handler(val) {
        const signedXValues = val.filter(v => v.sign === this.signX)
        const signedXOrders = signedXValues.map(s => s.order)
        const signedOValues = val.filter(v => v.sign === this.signO)
        const signedOOrders = signedOValues.map(s => s.order)

        // Who won
        if (this.winnerControl(signedXOrders)) {
          this.setMessage('🚀🚀🚀 X Won 🚀🚀🚀')
          this.setMessageStatus('success')
          this.setFinished(true)
          this.setSign(this.signX)
          this.incrementXScore()
        } else if (this.winnerControl(signedOOrders)) {
          this.setMessage('🚀🚀🚀 O Won 🚀🚀🚀')
          this.setMessageStatus('success')
          this.setFinished(true)
          this.setSign(this.signO)
          this.incrementOScore()
        } else {
          // Game over
          if (val.length >= 9) {
            this.setMessage('Game Over. Nobody Won...')
            this.setMessageStatus('danger')
            this.setFinished(true)
          }
        }


      },
      deep: true
    },
  },
  computed: {
    ...mapGetters([
      'cells',
      'started',
      'finished',
      'signX',
      'signO',
      'winningOrder',
      'winningOrders',
    ])
  },
  methods: {
    ...mapActions([
      'incrementOScore',
      'incrementXScore',
      'resetScores',
      'setCrossClass',
      'setFinished',
      'setMessage',
      'setMessageStatus',
      'setSign',
      'setWinningOrder',
      'startGame',
      'winnerControl',
    ]),
    winnerControl(orders) {
      return this.winningOrders.some(w => {
        const result = w.every(value => orders.includes(value))
        if (result) {
          this.setWinningOrder(w)
        }
        return result
      })
    },
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if (e.key === 'r') {
        this.resetScores()
      } else if (e.key === 's') {
        this.startGame()
      }
    })
  },
}
</script>

<style scoped>
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
</style>