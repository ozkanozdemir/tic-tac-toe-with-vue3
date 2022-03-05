<template>
  <div v-if="message"
       class="message"
       :class="{'bg-danger': (messageStatus === 'danger'), 'bg-success': (messageStatus === 'success')}">
    {{ message }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Message",
  computed: {
    ...mapGetters([
        'message',
        'messageStatus'
    ])
  }
}
</script>

<style scoped>
  .message {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    position: fixed;
    padding: 16px;
    font-size: 24px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    color: whitesmoke;
    line-height: 42px;
  }
  .bg-danger {
    background-color: #FF1731;
  }
  .bg-success {
    background-color: #529a08;
  }
</style>