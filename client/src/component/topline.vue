<template>
  <div class="topline">
    <a class="title">会议</a>
    <a class="name">用户名</a>
  </div>
</template>

<script>
export default {
    name:"topline"
}
</script>

<style>
    .topline{
        width: 100%;
        height : 35px;
        background: rgb(102,102,102);
        border: none;
        
    }
    .title{
        position: relative;
        color: ivory;
        right: 45%;
        top:15%
    }
    .name{
        position: relative;
        color: ivory;
        left: 45%;
        top: 15%;
    }
</style>