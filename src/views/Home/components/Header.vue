<template>
  <a-layout-header class="header">
    <div class="user-block">
      <a-icon type="user" />
      {{ userName }}
    </div>
    <a-icon type="poweroff" class="logout" @click="logout" />
  </a-layout-header>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }
  .header .right {
    display: flex;
    flex-direction: row;
  }
  .header .user-block {
    font-size: 1.1rem;
    color: #fff;
  }
  .header .logout {
    width: 5rem;
    font-size: 1.1rem;
    cursor: pointer;
    color: #fff;
    line-height: 64px;
  }
  .ant-dropdown-link {
    text-decoration: none;
  }
</style>
