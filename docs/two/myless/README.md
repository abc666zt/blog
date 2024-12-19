# Less

**安装**

```shell
npm install
```

- 全局安装

  全局安装后，就是给命令行**提供命令**

  ```shell
  npm i -g xxx
  ```

- 项目依赖

  给当前项目使用的 

  ```shell
  npm i -S/-D
  ```

  - -S   `--save-dev` 开发和上线都需要使用的模块，不写默认为-S
  - -D   `--save` 只在开发阶段使用

以上推荐直接使用 `Easy LESS `  VSCode插件

## 变量

```less
@widch:500px;
div{
    width:@width;
}
```

## 嵌套

```less
div{
    p{
        color:red
    }
}
```

&:

```less
div{
    &:hover{           // div变色
       color:red
    }
}
```

## 混合

```less
// 情况一
.myLess(){
  color:white
}
div {
  .myLess()
}
// 情况二
.myLess(@w){
  color:@w
}
div {
  .myLess(white)
}
// 情况三
.myLess(@w:white){
  color:@w
}
div {
  .myLess()
}
```

## 引入

```less
@import './test.less';
```

