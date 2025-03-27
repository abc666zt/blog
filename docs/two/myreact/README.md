# React

学习视频：[黑马程序员前端React18入门到实战视频教程，从react+hooks核心基础到企业级项目开发实战（B站评论、极客园项目等）及大厂面试全通关](https://www.bilibili.com/video/BV1ZB4y1Z7o8/?share_source=copy_web&vd_source=556068448e3e9981758eda02d5e5001b)

## 01.JSX基础

### 安装

- cra

```
npx create-react-app 
```

- vite    [开始 | Vite 官方中文文档](https://vitejs.cn/vite3-cn/guide/) 

```
npm create vite@latest my-vue-app -- --template react-ts
```

### 概念和本质

- **什么是JSX**

  它是js和xml的缩写，表示在  `js代码中编写html模板结构`

- 优势
  - html声明式模板写法
  - js可编程能力

- 怎么解析

  通过  `babel`  解析工具做解析后才能在浏览器中运行

### 列表渲染

```react
function App() {
  const list = [
    { id: 1001, name: "zs" },
    { id: 1002, name: "ls" },
    { id: 1003, name: "ww" },
  ];
  return (
    <div className="App">
      <ul>
          // 渲染部分
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
          
      </ul>
    </div>
  );
}

export default App;
```

### 条件渲染

- 简单

  - &&
  - 三目运算

- 复杂

  eg：新闻列表页中有：无图，一个图，三个图

  ```react
    let pictureNum=0
    const getItem = () => {
        if(pictureNum === 0){
            return <div>无图</div>
        }else if(...)
    };
  // 然后在div中调用getItem函数即可
  ```

### 事件绑定

- 基础绑定

  ```react
    const click = () => {
      console.log("click");
    };
  
    <button onClick={click}>click</button>
  ```

- 事件参数e

  ```react
    const click = (e) => {
      console.log("click",e);
    };
  ```

- 传递自定义参数

  ```react
    const click = (name) => {
      console.log("click",name);
    };
  
    <button onClick={()=>click('zhangsan')}>click</button>
  ```

- 既要传递自定义参数又要事件参数e

  ```react
    const click = (name,e) => {
      console.log("click",name,e);
    };
  
    <button onClick={(e)=>click('zhangsan',e)}>click</button>
  ```

### 组件

- 概念
  - 一个组件就是用户界面的一部分，它有自己的逻辑和外观。可以互相嵌套，多次使用
  - 在react里面，组件就像函数一样

- 使用

  ```react
    const Click = () => {
      return <button>clcik</button>;
    };
  
      <div className="App">
        <Click />
        <Click></Click>
      </div>
  ```

  - 首字母必须  `大写`
  - 两种使用方法

### tab切换高亮

- tab渲染

  设置tab变量(包含tab名称，type[方便高亮操作])，通过map方法渲染

  ```react
  const tabList=[
      {
          type:'hot',
          name:'最热'
      },
      {
          type:'new',
          name:'最新'
      }
  ]
  ```

- 设置变量type为useState存储状态

- 绑定点击函数传参item.type

- 设值高亮

  ```react
  <span 
      key={item.type}
      onClick={()=>click(item.type)}
      className={`nav-item ${type===item.type && 'active'}`}>
      {item.text}
  </span>
  ```

**优化：**

使用classnames

```react
npm i classnames  // 安装
import classnames from 'classnames'  // 引入
className={classnames('nav-item',{active:type===item.type})}  // 使用
```

### 数据排序

- 使用第三方库  `lodash`

  ```
  npm i lodash
  ```

- 引入

  ```
  import _ from "lodash";
  ```

- 使用

  ```
    const listTime = _.orderBy(list, "time", "desc");
  // 参数一list，为需要排序数组
  // 参数二time，为按照什么参数排序
  // 参数三desc，为倒序
  ```

## 02.React基础

### 获取DOM useRef

- 使用useRef创建ref对象，并于JSX绑定
- 在DOM可用时，通过current属性拿到DOM对象(渲染完毕后DOM才生成)

```react
  const inputRef = useRef(null);
    
  const click = () => {
    console.log(inputRef.current);
  };

  return (
    <div className="App">
      <input ref={inputRef}></input>
      <button onClick={click}></button>
    </div>
  );
```

**给输入框聚焦**

```react
inputRef.current.focus()
```

### id和时间处理

**uuid**



**dayjs**



```react
dayjs(new Date()).formmat('MM-DD HH-mm')
```

### 组件通信

#### 父子通信

- 父传子 props

  ```react
  function Son(props) {
    return <div>son {props.msg}</div>;
  }
  
  function App() {
    const msg = "Fa";
    return (
      <div className="App">
        <Son msg={msg} />
      </div>
    );
  }
  
  export default App;
  ```

  - **注意：**props只读不可以修改，父组件才可以修改

  - children在Son里面放别的div等  {props.children}

- 子传父  调用父组件函数传递

  ```react
  function Son({ onGetMsg }) {
    return (
      <div>
        son
        <button onClick={() => onGetMsg("hello")}>click</button>
      </div>
    );
  }
  
  function App() {
    const getMsg = (msg) => {
      console.log(msg);
    };
    return (
      <div className="App">
        <Son onGetMsg={getMsg} />
      </div>
    );
  }
  
  export default App;
  ```

#### 兄弟通信

利用父子通信传两次 `状态提升`

```react
import { useState } from "react";

function A({ onGetA }) {
  return (
    <div>
      <button onClick={() => onGetA("hi")}>click</button>
    </div>
  );
}

function B({ msg }) {
  return <div>B {msg}</div>;
}

function App() {
  const [msg, setMsg] = useState("");
  const getA = (msg) => {
    setMsg(msg);
  };
  return (
    <div className="App">
      <A onGetA={getA} />
      <B msg={msg} />
    </div>
  );
}

export default App;
```

#### 跨层通信

- createContext方法创建一个上下文对象
- 在顶层组件，通过Provider组件提供数据
- 在底层组件，通过useContent钩子函数使用数据

```react
import { createContext, useContext } from "react";
const msgContext = createContext();

function A() {
  return (
    <div>
      A <B />
    </div>
  );
}

function B() {
  const msg = useContext(msgContext);
  return <div>B {msg}</div>;
}

function App() {
  return (
    <div className="App">
      <msgContext.Provider value={"hello"}>
        <A />
      </msgContext.Provider>
    </div>
  );
}

export default App;

```

### useEffect

useEffect用于在React组件中创建不是由事件引起而是由  `渲染本身`  引起的操作，比如发送AJAX请求，更改DOM

**发送AJAX请求**

```react
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://geek.itheima.net/v1_0/channels");
      const jsonRes = await res.json();
      console.log(jsonRes);
    };
    getData();
  });
  return <div className="App">a</div>;
}

export default App;

```



- 空依赖项

  初始执行

  组件更新（比如：useState数据改变）

**消除副作用**

useEffect编写中，由  `渲染本身引起的对接组件外部的操作` ，经常叫做副作用操作。比如，组件卸载时，要把该组件中的定时器清理掉，这个过程就是清理副作用。

清除副作用`最常见`执行时机是`组件卸载时自动执行`  

```react
useEffect(()=>{
    // 实现副作用操作逻辑
    return ()=>{
        
    }
})
```

```react
import { useEffect, useState } from "react";

function A() {
  useEffect(() => {
    const time = setInterval(() => {
      console.log("执行中...");
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);
  return <div>A</div>;
}

function App() {
  const [tag, setTag] = useState(true);
  return (
    <div className="App">
      {tag && <A />}
      <button onClick={() => setTag(false)}>click</button>
    </div>
  );
}

export default App;
```

如果没有return 清除A组件后，定时器还会执行

### 自定义Hook



里面的  `useTest`  即为自定义Hook

```react
import { useState } from "react";

function useTest() {
  const [value, setVulue] = useState(true);

  const change = () => {
    setVulue(!value);
  };

  return {
    value,
    change,
  };
}

function App() {
  const { value, change } = useTest();
  return (
    <div className="App">
      {value && "hello"}
      <button onClick={() => change()}>click</button>
    </div>
  );
}

export default App;
```

### 案例

#### 本地数据->接口请求

 [Day2-17.案例优化-使用useEffect获取数据_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ZB4y1Z7o8?spm_id_from=333.788.player.switch&vd_source=e373613c1b1a0be9067db7cb3cf6caca&p=35) 

## 03.Redux



### 环境准备 

- 安装配套工具

  ```
  npm i @reduxjs/toolkit react-redux
  ```

- 目录结构

  ```
  src
  - store
  - - modules
  - - - channelStore.js
  - - - counterStore.js
  - - index.js
  ```

### 实现counterStore



- store/modules/counterStore.js

  ```react
  import { createSlice } from "@reduxjs/toolkit";
  
  const counterStore = createSlice({
    name: "counter",
    initialState: {
      count: 0,
    },
    reducers: {
      add(state) {
        state.count++;
      },
      del(state) {
        state.count--;
      },
    },
  });
  
  const { add, del } = counterStore.actions;
  const reducer = counterStore.reducer;
  
  export { add, del };
  export default reducer;
  ```

- store/index.js

  ```react
  import { configureStore } from "@reduxjs/toolkit";
  import counterReducer from "./modules/counterStore";
  
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
  
  export default store;
  ```

- src/index.js

  ```react
  import React from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App";
  import store from "./store";
  import { Provider } from "react-redux";
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  
  ```

- App.js

  ```react
  import { useSelector, useDispatch } from "react-redux";
  import { add, del } from "./store/modules/counterStore";
  
  function App() {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
      <div className="App">
        <button onClick={() => dispatch(del())}>-</button>
        {count}
        <button onClick={() => dispatch(add())}>+</button>
      </div>
    );
  }
  
  export default App;
  ```

### 提交action传参



### 异步状态操作



相较于同步，异步将，同步的  `setChannels->fetchChannelList`



 [Day3-05.Redux与React-异步状态操作_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ZB4y1Z7o8?spm_id_from=333.788.player.switch&vd_source=e373613c1b1a0be9067db7cb3cf6caca&p=42) 

### 插件

Redux DevTools

## 04.ReactRouter

### 快速开始

```
npm i react-router-dom
```

**路由模块抽象**

router/index.js

```react
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/1",
    element: <div>11</div>,
  },
]);
export default router;
```

src/index.js

```react
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
```

### 路由跳转

- 声明式

  ```react
  import { Link } from "react-router-dom";
  
  <Link to={"/article"}>to article</Link>
  ```

- 编程式

  ```react
  import { useNavigate } from "react-router-dom";
  
  const navigate = useNavigate();
  <button onClick={() => navigate("/article")}>article</button>
  ```

### 路由传参

- searchParams传参

  login/index.js

  ```react
        <button onClick={() => navigate("/article?id=1001&name=jack")}>
          searchParams传参
        </button>
  ```

  article/index.js

  ```react
  import { useSearchParams } from "react-router-dom";
  
  const [params] = useSearchParams();
  const id = params.get("id");
  ```

- params传参

    login/index.js
    
    ```react
    <button onClick={() => navigate("/article/10001")}>params传参</button>
  ```

  article/index.js

  ```react
  import { useParams } from "react-router-dom";
  
  const params = useParams();
  const id = params.id;
  ```
   router/index.js

  ```react
  path: "/article/:id",
  ```

### 嵌套路由配置

- 再router/index.js中使用children
- 使用<Outlet />

**默认二级路由**

```react
      {
        index: true,
        element: <Login />,
      },
```

**404界面**

在路由末尾写

```react
  {
    path: "*",
    element: <div>404</div>,
  },
```

### 案例

####  项目别名配置

[Day4-10.记账本-配置别名路径@_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ZB4y1Z7o8?spm_id_from=333.788.player.switch&vd_source=e373613c1b1a0be9067db7cb3cf6caca&p=61) 

#### 数据Mock

 [Day4-11.记账本-数据Mock实现_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ZB4y1Z7o8?spm_id_from=333.788.videopod.episodes&vd_source=e373613c1b1a0be9067db7cb3cf6caca&p=62) 

#### 主题颜色定制

 [Day4-13.记账本-antD主题色定制_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ZB4y1Z7o8?spm_id_from=333.788.player.switch&vd_source=e373613c1b1a0be9067db7cb3cf6caca&p=64) 

## 05.项目

246810

### 开始配置

**安装**

npx create-react-app 

**项目目录**



### 登录

#### **表单失去焦点时验证**

```react
<Form validateTrigger="onBlur">
```

一般都，点击登录做校验。但输入框失焦时，也做个校验，用户体验感更好

#### **手机号验证**

```react
             {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号不可以为空!",
              },
```

#### **axios封装**

```react
import axios from "axios";

const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export { request };
```

#### 路由守卫

components/AuthRoute.js

```react
import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

function AuthRoute({ children }) {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"} replace />;
  }
}
export default AuthRoute;
```

router/index.js

```react
  {
    path: "/",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
  },
```

### 主页Layout

#### 根据路由路径高亮菜单

刷新后菜单依旧高亮

```react
  const location = useLocation();

          <Menu
            selectedKeys={location.pathname}
          ></Menu>
```

#### 处理token失效

一般接口返回401

```react
// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 对401错误处理
    if (error.response.status === 401) {
      removeToken();
      router.navigate("/login");
      window.location.reload(); // 强制刷新
    }
    return Promise.reject(error);
  }
);
```

#### 接口传参

Query

```react
export function getArticleListAPI(params) {
  return request({
    url: "/map/articles",
    method: "GET",
    params
  });
}
```

#### 删除列表更新

注意async异步，不然很可能更新失败

```react
  const onDel = async (value) => {
    await delArticleAPI(value.id);
    setReqData({
      ...reqData,
    });
  };
```

### 打包优化

#### 路由懒加载

router/index.js

```react
// 引入方式
const Home = lazy(() => import("@/pages/Home"));

// 元素写法
       element: (
          <Suspense fallback={"loading..."}>
            <Home />
          </Suspense>
        ),
```

#### 包体积可视化分析

```
npm i source-map-explorer
```

在package.json中的`scripts`添加命令 运行即可

'build/static/js/*.js'是分析的文件

```react
    "analyze":"source-map-explorer 'build/static/js/*.js'"
```

#### 优化-配置CDN

 [Day9-12.打包优化-CDN配置_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ZB4y1Z7o8?spm_id_from=333.788.player.switch&vd_source=e373613c1b1a0be9067db7cb3cf6caca&p=132) 

**分析说明**：通过 craco 来修改 webpack 配置，从而实现 CDN 优化
**核心代码**
`craco.config.js`

```javascript
// 添加自定义对于webpack的配置

const path = require('path')
const { whenProd, getPlugin, pluginByName } = require('@craco/craco')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
    },
    // 配置webpack
    // 配置CDN
    configure: (webpackConfig) => {
      let cdn = {
        js:[]
      }
      whenProd(() => {
        // key: 不参与打包的包(由dependencies依赖项中的key决定)
        // value: cdn文件中 挂载于全局的变量名称 为了替换之前在开发环境下
        webpackConfig.externals = {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
        // 配置现成的cdn资源地址
        // 实际开发的时候 用公司自己花钱买的cdn服务器
        cdn = {
          js: [
            'https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js',
          ]
        }
      })

      // 通过 htmlWebpackPlugin插件 在public/index.html注入cdn资源url
      const { isFound, match } = getPlugin(
        webpackConfig,
        pluginByName('HtmlWebpackPlugin')
      )

      if (isFound) {
        // 找到了HtmlWebpackPlugin的插件
        match.userOptions.files = cdn
      }

      return webpackConfig
    }
  }
}
```

`public/index.html`

```html
<body>
  <div id="root"></div>
  <!-- 加载第三发包的 CDN 链接 -->
  <% htmlWebpackPlugin.options.files.js.forEach(cdnURL => { %>
    <script src="<%= cdnURL %>"></script>
  <% }) %>
</body>
```

### ts代码相关

相比js，ts有些格外要求，和需要注意的点

day11所有

 [Day11-01.React+TS基础环境创建_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ZB4y1Z7o8?spm_id_from=333.788.videopod.episodes&vd_source=e373613c1b1a0be9067db7cb3cf6caca&p=146) 

## 06.React高阶

### useRedcer



### useMemo

类似useEffect，但是作用为计算属性类似。减少状态更新的重复渲染

```react
  const computedCount=useMemo(()=>{
      return fun(count)
  },[count])
```

### React.memo()

父组件状态更新，通常会让子组件也更新。但是有时候子组件没有改变，更新有点多余

- 基础用法

```react
import { useState, memo } from "react";

// 用memo包裹即可
const MemoSon = memo(function Son() {
  console.log("gx");
  return <div>Son</div>;
});

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      app<button onClick={() => setCount(count + 1)}>+{count}</button>
      <MemoSon />
    </div>
  );
}

export default App;
```

- 子组件有父组件props时

  - 简单类型props

    数据改变时，重新渲染

  - 复杂类型props

    会一直渲染

    解决方法，使用usMemo包裹

    **原理：**





### useCallback

props为函数的时候，相当于复杂类型，父组件变化，会一直渲染子组件。使用useCallback包裹函数即可。类似useMemo用法

```react
  const fun = (value) => {
    console.log(value);
  };
  const callFun=useCallback((value) => {
    console.log(value);
  },[])
```

### forwardRef

父组件拿到子组件的ref

```react
import { forwardRef, useRef } from "react";

// 使用forwardRef包裹组件
const Son = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

function App() {
  const sonRef = useRef(null);
  const show = () => {
    console.log(sonRef);
    sonRef.current.focus();
  };

  return (
    <div className="App">
      app<button onClick={show}>click</button>
      <Son ref={sonRef} />
    </div>
  );
}

export default App;
```

### useInperativeHandlle



### zustand

 [Day10-11.zustand-基础用法_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ZB4y1Z7o8?spm_id_from=333.788.player.switch&vd_source=e373613c1b1a0be9067db7cb3cf6caca&p=143) 



























