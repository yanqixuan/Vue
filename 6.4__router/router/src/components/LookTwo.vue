<template>
  <div class="look">{{message}}
    <p>接受的参数:{{$route.params.userid}}</p>
  </div>
  
</template>

<script>
export default {
  name: "Look",
  data() {
    return {
      message: "look2"
    };
  }
};
</script>
