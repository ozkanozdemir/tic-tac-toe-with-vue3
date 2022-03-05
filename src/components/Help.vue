<template>
  <div class="help">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div class="help-text">
      You can use the number keys on the keyboard while playing.
    </div>
  </div>
</template>

<script>
export default {
  name: "Help"
}
</script>

<style scoped>
  .help {
    position: absolute;
    left: -4px;
    top: 0;
    width: 36px;
    height: 36px;
    background-color: whitesmoke;
    border-radius: 6px;
    padding: 6px;
    cursor: pointer;
    overflow: hidden;
  }
  .help svg {
    width: 36px;
    height: 36px;
  }
  .help:hover, .help:active {
    color: #FF1731;
    width: 100%;
    display: flex;
  }
  .help-text {
    margin: 6 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: 'Josefin Sans', sans-serif;
  }
</style>