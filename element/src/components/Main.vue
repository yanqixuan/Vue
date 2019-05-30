<template>
    <div class="main-content">
        <Header></Header>
    </div>
</template>
<script>
import Header from './common/Header'
export default {
    name:'mainContent',
    data(){
        return {
            msg:'hello world'
        }
    },
    components:{
        Header
    }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
</style>


