# ECMAScript

## 01.变量

### let

- let 变量不能重复声明(var 可以)

  ```js
  let star = 0;
  let star = 0; //报错
  ```

- 块级作用域

  **作用域**：全局，函数，eval(es5 严格模式中)

  ```js
  {
    let star = 0;
  }
  console.log(star); //报错  var可以
  ```

- 不存在变量提升

  **变量提升**：

  ```js
  console.log(star);
  var star = 0;

  效果：
  var star；
  console.log(star);
  star = 0;
  ```

  **实际：**

  ```js
  console.log(star);
  let star = 0; //Cannot access 'star' before initialization

  console.log(star);
  var star = 0; //undefined
  ```

- 不影响作用域链

  ```js
  {
    let star = 0;
    function fn() {
      console.log(star);
    }
    fn(); //可以正常打印0
  }
  ```

### 变量的结构赋值

ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值

**数组**

```js
const arrs = ["hello", "hi"];
const [arr1, arr2] = arrs;
console.log(arr1, arr2); //hello hi
```

**对象**

```js
const obj = {
  name: "zhangsna",
  age: 18,
  play: function () {
    console.log("play");
  },
};
const { name, obj2, obj3 } = obj; //注意1：{}而不是[]
//注意2：name名称要用属性名称
console.log(name, obj2, obj3); //zhangsan undefined undefined
```

### 模板字符串

- 内容里面可以直接换行

  ```js
  const str = `hello
             zhangsan
            `;
  ```

- 变量拼接

  ```js
  const str1 = "zhangsan";
  const str = `hello ${str1}`;
  ```

### 对象的简化写法

```js
const name = "zhangsan";
const play = function () {
  console.log("play");
};
const obj = {
  name, // 注意1，此处等同与 name：name
  play,
  eat() {
    log("eat"); // 注意2，此处省略function
  },
};
```

## 02.常量 const

- 一定到赋初始值
- 尽量用大写
- 值不能修改
- 块级作用域
- 数组和对象元素修改，不算对常量的修改

## 03.函数

### 箭头函数

省略 function

- this 是静态的，this 始终指向函数声明时所在作用域下 this 的值

  ```js
  const getName = function () {
    console.log(this.name);
  };
  const getName2 = () => {
    console.log(this.name);
  };

  window.name = "zhangsna";
  const obj = {
    name: "lisi",
  };

  getName(); // zhangsan
  getName2(); // zhangsan

  getName.call(obj); // lisi
  getName2.call(obj); // zhangsan
  ```

- 不能作为构造函数实例化对象

  ```js
  const School = (name, age) => {
    // 不行
    this.name = name;
    this.age = age;
  };
  ```

- 不能使用 arguments

- 省略

  - 省略()，当形参有且只有一个时

  - 省略{}，当代码提只有一条语句时，此时 return 必须省略

    ```js
    const pow = (n) => n * n;
    console.log(pow(2)); // 4
    ```

**案例**

```js
myDiv.addEventListener("click", function () {
  // this指向myDiv(如果箭头函数，指向windows)
  setTimeout(() => {
    // this指向myDiv(如果function函数，指向windows)
    this.style.background = "red";
  }, 2000);
});

// 有种function找调用者，箭头函数找各层调用者(个人感觉，非常不严谨不准确)
```

**总结**

- 箭头函数适合与 this 无关的回调，定时器，数组的方法

- 箭头函数不合适与 this 有关的回调，事件回调(上面第一层处)，对象方法

### rest 参数

```js
const getData = function (...args) {
  console.log(args); // 结果为数组
};
getData("zhangsan", "lisi", "wangwu");
```

**注意：rest 参数必须放到最后**

## 04.扩展运算符

扩展运算符： ...

```js
rest参数  在函数形参位置
扩展运算符 一般运用在函数实参处 将传入['zs','ls','ww']变成'zs','ls','ww'
```

- 数组合并

  ```js
  const names = ["zs", "ls"];
  const ages = [16, 28];
  const newArrs = names.concat(ages); // 合并方法1
  const newArrs = [...names, ...ages]; // 合并方法2
  ```

- 数组克隆

  ```js
  const names = ["zs", "ls"];
  const newNames = [...names];
  ```

- 将伪数组转成真正数组 方法同上

## 05.复杂数据类型

### Set集合

**简单方法**

```js
// 声明
let s= new Set(['zs','ls','ls']) // log为zs ls
// 长度
s.size
// 添加
s.add('ww')
// 删除
s.delete('zs')
// 查询
s.has('zs')
// 清空
s.clear()
```

**实践**

- 数组去重

  ```js
    const arr=[1,2,3,1,2,3,4,4,3,2,1]
    const s=[...new Set(arr)]
    console.log(s);  // 1,2,3,4
  ```

- 并集

  ```js
      const arr1=[1,2,3,1,2,3,4,4,3,2,1]
      const arr2=[4,4,5,6,4,5]
      const s=[...new Set(arr1)].filter(item=>new Set(arr2).has(item))
  ```


- 合集

  ```js
      const arr1=[1,2,3,1,2,3,4,4,3,2,1]
      const arr2=[4,4,5,6,4,5]
      const s=[...new Set([...arr1,...arr2])]
  ```

- 差集

  并集取反

### Map

```js
// 声明
let s= new Map()
// 长度
s.size
// 添加
s.set('ww','kk')
// 删除
s.delete('ww')
// 查询
s.get('ww')
// 清空
s.clear()
```

### 数值扩展

- 最小精度 

  ```js
      // 判断浮点数是否相等
      function myEqual(num1,num2){
        return Math.abs(num1-num2)<Number.EPSILON
      }
      console.log(0.1+0.2===0.3);          // false
      console.log(myEqual(0.1+0.2,0.3));   // true
  ```

- 进制

  ```js
  // 二进制  0b
  // 八进制  0o
  // 十六进制  0x
  ```

### 数组方法

- 判断是否存在

  ```js
      const arr=[1,2,3]
      console.log(arr.includes(1)); // 相比indexOf返回booolean更方便
  ```

- 次方

  ```js
      console.log(2 ** 10);  // 等同与Math.pow(2,10)
  ```

### Symbol

给对象添加属性和方法

- 创建 Symbol

  ```js
  方法1;
  const s1 = Symbol("kk");
  const s2 = Symbol("kk"); // s1===s2  false

  方法2;
  const s3 = Symbol.for("kk");
  const s4 = Symbol.for("kk"); // s3===s4  true
  ```

- 给对象添加 symbol 属性

  **原因：** 当对象很复杂，你不知道里面有没有该属性时，可以使用 symbol

  - 方法一

    ```js
    const obj = {};

    let methods = {
      play: Symbol(),
      eat: Symbol(),
    };

    obj[methods.play] = function () {
      console.log("play");
    };
    ```

  - 方法二

    ```js
    const obj = {
      name: "",
      [Symbol("play")]: function () {
        console.log("play");
      },
    };
    ```

## 06.迭代器

迭代器Iterator是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作。

**for...of遍历**

```js
    const arr=['zs','ls']

    for(let i of arr){
      console.log(i);     // zs ls
    }
    for(let i in arr){
      console.log(i);     // 0 1
    }
```

**原理**

- 创建一个指针，指向当前数据结构起点
- 第一次调用next()，指针自动指向第一个成员
- 接下来调用，一直往后移
- 每调用一次返回包含value和done属性的对象

```js
    const arr=['zs','ls']
    const myIterator=arr[Symbol.iterator]()

    console.log(myIterator.next());   // {value: 'zs', done: false}
    console.log(myIterator.next());   // {value: 'ls', done: false}
    console.log(myIterator.next());   // {value: undefined, done: true}
```

**案例**  给obj迭代器用法

```js
const obj = {
        name: "zs",
        arr: ["li", "ww"],
        [Symbol.iterator]() {
          let index = 0;
          return {
            next:() =>{
              if (index < this.arr.length) {
                return { value: this.arr[index++], done: false };
              } else {
                return { value: undefined, done: true };
              }
            },
          };
        },
      };
```

## 07.**异步编程**

### 生成器

ES6提供的一种**异步编程**解决方法

在一般函数中间加了 ` *  ` 号

```js
   function * gen(){
      console.log(111);
      yield 'kk1'
      console.log(222);
      yield 'kk2'
      console.log(333);
    }
    const myIterator=gen()
    console.log(myIterator.next());  //111  {value: 'kk1', done: false}
    console.log(myIterator.next());  //222  {value: 'kk2', done: false}
    console.log(myIterator.next());  //333  {value: undefined, done: true}
```

**参数**

```js
    function * gen(arg){
      console.log(arg);
      let one=yield 'kk1'
      console.log(one);
      let two=yield 'kk2'
      console.log(two);
    }
    const myIterator=gen(111)
    // 111  {value: 'kk1', done: false}
    console.log(myIterator.next());  
    // 222  {value: 'kk2', done: false}  参数为第一个yield 的返回值
    console.log(myIterator.next(222));  
    //333  {value: undefined, done: true}  参数为第二个yield 的返回值
    console.log(myIterator.next(333));  
```

**案例**

1s发111 之后2s发222 之后3s发333 

```js
      const one = () => {
        setTimeout(() => {
          console.log(111);
          iterator.next();
        }, 1000);
      };

      const two = () => {
        setTimeout(() => {
          console.log(222);
          iterator.next();
        }, 2000);
      };

      const three = () => {
        setTimeout(() => {
          console.log(333);
          iterator.next();
        }, 3000);
      };

      function* gen() {
        yield one();
        yield two();
        yield three();
      }

      let iterator = gen();
      iterator.next();
```


### Promise

ES6提供的一种**异步编程**解决方法

**简单使用**

```js
      const myPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
          // resolve("sucess");
          reject("fail");
        }, 1000);
      });

      myPromise.then(
        function (value) {
          console.log(value);
        },
        function (reason) {
          console.error(reason);
        }
      );
```

### await和async

类似Promise里面的then()

## 08.模块化

防止命名冲突；代码复用；好维护

**暴露数据**

```js
// 1.分别加export
export const s='zs'
// 2.一起
const s='zs'
const arr=['zs','ls']
export {s,arr}
// 3.默认暴露
export default{s:'zs'}
```

## 09.正则式

- 命名捕获

  ```js
        const str = '<a href="https://baidu.com">百度</a>';
        const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
        const result = reg.exec(str);
        console.log(result.groups.url);   // https://baidu.com
        console.log(result.groups.text);  // 百度
  ```

- 反向断言

  ```js
        // 获取212
        const str='wkqek12133efnjwea212ndkj'
        const reg1=/\d+(?=n)/
        const reg2=/(?<=a)\d+/
        const result=reg1.exec(str)
        console.log(result);
  ```

