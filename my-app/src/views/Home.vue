<template>
  <div class="home">
    home
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import {mapActions} from 'vuex';
import { Action } from 'vuex-class'; //可以提供action,mutation,state类型定义
import { Component } from 'vue-property-decorator';
// ts中创建组件的写法 继承vue
@Component({})
  export default class Home extends Vue {
    // 数据声明
    private cate:string = 'in_theaters';
    private active:number = 0;
    private loading:boolean = true;
    private movieListData = null;
    // 装饰器   ! 强制的从外部引入
    @Action private movieList!:(cate:string) => any;

    // private constructor (){
    //   super();
    //   this.movieList(this.cate).then((res:any) => {
    //     this.movieListData = res.subjects;
    //     this.loading = false;
    //     console.log(res.subjects);
    //   })
    // }
    private created(){
      this.movieList(this.cate).then((res:any) => {
        this.movieListData = res.subjects;
        this.loading = false;
        console.log(res.subjects);
      })
    }
  }
</script>