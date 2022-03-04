<template>
  <div v-show="message"
       class="message"
       :class="{'bg-danger': (status === 'danger'), 'bg-success': (status === 'success')}">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ['message', 'status']
}
</script>

<style scoped>
  .message {
    width: 360px;
    padding: 16px;
    margin: 18px 0;
    font-size: 20px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    color: whitesmoke;
  }
  .bg-danger {
    background-color: #FF1731;
  }
  .bg-success {
    background-color: #3f7908;
  }
</style>