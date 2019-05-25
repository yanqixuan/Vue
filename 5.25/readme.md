#添加类名
- v-bind:class="{cool:isGood}"
- v-bind:class=" isGood ? 'cool' :'notcool' "
- v-bind:class="[activeClass]"

#v-for
- <li v-for="item in todos">{{item.text}}</li>

#v-model
数据双向绑定
- <p>{{content}}</p>
- <input type="text" v-model="content">

#v-on
绑定事件
- 点击事件 v-on:click="reverseMessage"

#this作用域
通过call修改 this指向data   