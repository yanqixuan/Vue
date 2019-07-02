## TS
state:State 类型约束
### interface.ts
数据类型约束定义

- vue-cli 3.0+  create-vue-app  原生命令行支持 typescript
    react 最早拥抱ts,vue 加入

- 项目多加20% ts代码, 减少60%的潜在bug(js 弱类型)
  良好的代码提示，让团队合作体验更好。

- 重要的对象(组件,state,prop,vuex/redux,函数)，声明类型。
  vuex中最大的对象是state。
  类型约束一般使用 interface。 interface中是一个结构体