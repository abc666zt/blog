# Vue

## 基础

- 创建

  - vue-cli 基于**webpack**

  - vite   `官方推荐`  

    ```shell
    pnpm run dev时出现报错：X [ERROR] Expected identifier but found "import"
    
    解决方法 package.json 中添加 resolutions 字段
    "resolutions": {
       "esbuild": "0.24.0"
    }
    ```

- main.js

  ```vue
  import './assets/main.css'
  
  import { createApp } from 'vue'
  import App from './App.vue'
  
  createApp(App).mount('#app')
  // 创建应用，根组件为App，创建成功后的位置在'#app'
  ```

### setup

- 返回值

  ```vue
  1. return {name,age}
  2. return ()=>'hello'   // 界面直接显示hello
  ```

- setup data methods区别

  - setup和data methods可以共存
  - data methods可以读取setup内数据；setup不可以

- 文件命名问题

  

​        具体看：D:\AAATool\笔记\vue学习\尚硅谷-vue3   `3.2setup语法糖`  

## 语法

### ref和reactive

**响应式数据**：

- ref 基本类型，对象类型对可以

  - ref定义对象类型时，利用的是reactive
  - ref数据后必须，`.value`

- reactive  只能定义对象类型

  - 不可以修改整个数据

    ```vue
    const car=reactive({name:'zs',price:10})
    
    car={name:'ls',price:100}  // 这种写法不行
    Object.assign(car,{name:'ls',price:100})  // 这种可以
    ```

**自动添加value**

`Vue-Office`  配置 勾选 Dot Value

**ref和reactive选择**

- 基本类型 只能 ref
- 对象类型 都可
- 表单等数据层级深的 建议reactive

### toRefs和toRef

用于解构对象，并且使之任然具备响应式能力

```vue
const car=reactive({name:'zs',price:10})
let { name, price } = car // 这样写，改变name 不能改变car.name

let { name, price } = toRefs(car)  // 正确写法，该种方式 car.name和name 两个的值都是一起改变

// toRef 用的较少 与 toRefs区别为 它解构单个值
let name = toRef(car,'name')
```

### computed

计算属性，一般只读

如果想改：

```vue
let name=computed({
  get(){},     
  set(val){}
})
```

### watch

监视四种数据

- 1.ref定义数据

  - ref定义的基础数据

    ```vue
    let age = ref(18)
    
    watch(age, (newVal, oldVal) => {     // 不要.value 因为监视ref类型
      console.log(newVal, oldVal);
    })
    
    // 解除监听
    const stopWatch = watch(age, (newVal, oldVal) => {
      console.log(newVal, oldVal);
      if (age.value > 20) {
        stopWatch()
      }
    })
    ```

  - ref定义的对象数据

    ```vue
    let person = ref({
      name: 'zsan',
      age: 18
    })
    
    watch(person, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    }, { deep: true })     // 没有deep name,age改变时不会监听
    // 注意： name,age改变后 newVal和oldVal一样
    
    // immediate属性，不止改变时监听，第一次赋值也有
    ```

- 2.reactive定义对象类型

  ```vue
  let person = reactive({
    name: 'zsan',
    age: 18
  })
  
  watch(person, (newVal, oldVal) => {
    console.log(newVal, oldVal);
  })     // reactive监听时，默认了深度deep监听，而且无法关闭
  ```

- 3.ref/reactive(响应式类型)对象类型里面的数据

  **总结**：都用() => person.属性   `getter函数`   方法

  - 里面的非对象类型

    ```vue
    let person = ref({
      name: 'zsan',  // 这种非对象类型
      age: 18,
      car: {
        c1: '11',
        c2: '22',
      }
    })
    
    // 需要变成有一个返回值函数(getter函数)
    watch(() => person.value.name, (newVal, oldVal) => {  
      console.log(newVal, oldVal);
    })
    ```

  - 里面的对象类型

    ```vue
    let person = ref({
      name: 'zsan',  // 这种非对象类型
      age: 18,
      car: {
        c1: '11',
        c2: '22',
      }
    })
    
    // 只监视整个car里面的变化,不监听car本身
    watch(person.value.car, (newVal, oldVal) => {   
      console.log(newVal, oldVal);
    },{deep:true})
    // 只监视整个car,里面的变化不监听 
    watch(() => person.value.car, (newVal, oldVal) => {   
      console.log(newVal, oldVal);
    })
    所有正确写法
    watch(() => person.value.car, (newVal, oldVal) => {   
      console.log(newVal, oldVal);
    },{deep:true})
    ```

- 4.监听多个数据情况

  ```vue
  watch([() =>person.value.car,()=>person.value.name], (newVal, oldVal) => {   
    console.log(newVal, oldVal);
  },{deep:true})
  ```


### watchEffect

和watch差不多用法。watchEffect不需要填需要监听的参数，适合有大量需要监听的数据情况

```vue
let num = ref(0)
let age = ref(10)

watch([num, age], (val) => {      // 需要写监听数据
  let [newNum, newAge] = val
  if (newNum > 5 || newAge > 50) {
    console.log('kkk');
  }
})
watchEffect(() => {               // 不需要写监听数据
  if (num.value > 5 || age.value > 50) {
    console.log('kkk');
  }
})
```

### ref属性

作用：用于注册模板引用。

> * 用在普通`DOM`标签上，获取的是`DOM`节点。
>
> * 用在组件标签上，获取的是组件实例对象。

- html元素上

  ```vue
  <template>
    <div>
      <h1 ref="kk">121</h1>
      <button @click="onDd">dd</button>
    </div>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  let kk = ref()
  console.log(kk.value);   // undefine
  
  let onDd = () => {
    console.log(kk.value);  // <h1 data-v-7a7a37b1>121</h1>
  }
  </script>
  ```

**注意：**

```vue
<h1 a="1+1" :b="1+1" :c="kk" ref="kk">
    kk
</h1>

一般带:会做处理 b处为2 c处为kk变量值 
但是ref不需要: 也会当作变量处理
```

### props

父组件传值子组件

父组件：

```vue
<Son :list="lists"></Son>
```

子组件：

```vue
// 第一种写法：仅接收
const props = defineProps(['list'])

// 第二种写法：接收+限制类型Persons
defineProps<{list:Persons}>()

// 第三种写法：接收+限制类型+指定默认值+限制必要性?
let props = withDefaults(defineProps<{list?:Persons}>(),{
  list:()=>[{id:'asdasg01',name:'小猪佩奇',age:18}]
})
```

### 声明周期

* `Vue2`的生命周期

  > 创建阶段：`beforeCreate`、`created`
  >
  > 挂载阶段：`beforeMount`、`mounted`
  >
  > 更新阶段：`beforeUpdate`、`updated`
  >
  > 销毁阶段：`beforeDestroy`、`destroyed`

* `Vue3`的生命周期

  > 创建阶段：`setup`
  >
  > 挂载阶段：`onBeforeMount`、`onMounted`
  >
  > 更新阶段：`onBeforeUpdate`、`onUpdated`
  >
  > 卸载阶段：`onBeforeUnmount`、`onUnmounted`

* 常用的钩子：`onMounted`(挂载完毕)、`onUpdated`(更新完毕)、`onBeforeUnmount`(卸载之前)



















