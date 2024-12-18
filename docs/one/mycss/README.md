# CSS

CSS 指层叠样式表 (**C**ascading **S**tyle **S**heets)，样式定义**如何显示** HTML 元素

## 01.CSS 基础

**1、语法**

```css
h1    { color : red ;}
选择器    属性     值
```

**2、注释**

```css
/*  */
```

**3、id 和 class 选择器**

```
id      #id
class  .class
```

**4、插入样式表的方法**

```
               优先级
1.外部样式表       3
2.内部样式表       2
3.内联样式         1(优先级最高)
```

**5、选择器（高优先级->低优先级）**

```
!important
内联样式
id
class
元素选择器
*
```

### 盒子模型

`标准盒子` `怪异盒子`

```css
  box-sizing: content-box
   /**是标准盒子模型   宽高为content*/
  box-sizing: border-box
   /*是怪异盒子模型    宽高为border+padding+content*/
```

## 02.CSS 布局

### 1.定位 position

- `static ` 默认定位 ， 遵循正常的文档流布局规则

  ```
  不承认 top、bottom、left、right 或 z-index 属性，这意味着这些属性不会对该元素产生任何效果
  ```

- `relative` 相对定位 ， 相对自身偏移 **仍然占据原来的空间**

  ```
  可以使用 top、bottom、left、right 来定义元素偏移量，并且支持 z-index 来控制堆叠顺序
  ```

- `fixed` 相对**浏览器窗口**定位**固定**

- `absolute` 绝对定位 ， 根据祖先定位 ， 脱离文档流

- `sticky` 介于 `relative` 和 `fixed` 之间

  ```
  当页面滚动到一定位置时，sticky 元素会“粘”在指定的位置（如顶部），类似于 fixed，但在达到其父容器边界之前它是 relative 的
  ```

### 2.浮动 float

会使元素向左或向右移动，其周围的元素也会重新排列

清楚浮动方法

```css
clear: both;
```

### 2.flex 布局

弹性盒子布局

**使用方法**

```css
display: flex;
```

**常用属性**

```
flex-direction  设置主轴方向
flex-wrap 元素是否可以换行，默认不换行
justify-content  主轴的对齐方式
align-items  交叉轴上的对齐方式
flex 设置比例
```

## 03.CSS 响应式设计

### 1.百分比布局

```
计算困难，如果我们要定义一个元素的宽度和高度，按照设计稿，必须换算成百分比单位
```

### 2.媒体查询

```css
@media screen and (min-width: 576px) {
  body {
    background-color: red;
  }
}
```

### 3.rem

- rem 是相对于 html 根元素的字体大小的单位。
- 我们通过修改 html 中 font-size 的字体大小来控制 rem 的大小

`flexible.js` 适配不同的浏览器，实现等比例的缩放

```
px: 像素的基本单位
rem: 相对html的字体单位一般16px
em: 相对父盒子的字体单位
vw wh: 相对视口（viewport）的1/100
```

### 4.vw、vh

### 5.flex 布局

## 04.动画

**过渡**

```css
/*  宽度变化过程中的过渡效果  */

div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 1s linear;
}
div:hover {
  width: 200px;
}
```

**动画**

```css
@keyframes myfirst {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}
/*  使用  */
animation: myfirst 5s;
```

## 05.实战
