## 1.npm i ts-node typescript tslib @types/node?

- ts-node的作用是将ts文件编译成js文件并执行。
- ts-node的编译ts和类型检查都依赖typescript
- 当tsconfig开启importHelpers时，需要安装tslib，能减少部分重复代码的编译生成
- @types/node为node api提供类型支持

## 2.ts的作用

- 类型检查，避免运行时报错
- 编译阶段发现问题
- 减少运行时类型判断
- 增强开发体验

## 3.索引签名

- 数字索引是来描述数组的
- 字符串索引是来描述对象的
- 索引签名作用是用来忽略掉对象上一些不确定的属性，允许额外字段存在

## 4.抽象类和接口的区别

- 抽象类是一个模块
- 接口是一个协议

## 5.枚举和多个字面量组成的联合类型的区别

- 字面量联合类型只存在于编译阶段，而枚举在运行阶段也真实存在

## 6.类型推断

- 从实际传递的参数中反推出类型
- 如果ts隐式推断不出，就需要自己显示指定

## 7.类型的使用

- 类型只是辅助工具（保障+辅助），而不是思考的负担

- 在写代码时，重要的是业务实现，而不是类型的编写思考

- 类型系统只是安全带，而不是方向盘

  | 角色                                  | 主要作用             | 开发重点         |
  | ------------------------------------- | -------------------- | ---------------- |
  | 普通类型（string、number、object...） | 约束数据结构         | 防止错误         |
  | 泛型（T、K、V...）                    | 提升复用性与智能提示 | 减少重复类型定义 |
  | 业务逻辑                              | 实现核心功能         | 永远是最重要的   |

## 8.声明文件的查找

1. 内置声明文件
   - 全局的
     - tsc用的、编辑器
   - 本地的
     - 构建工具用的、编辑器
   - 编辑器自带的
     - 编辑器用的
   - tsconfig.js
     - types

1. 三方声明文件
   - node_modules/@types
   - types
2. 自定义声明文件
   - includes
   - typeRoots

## 9.ts文件的编译和类型检查工具汇总

| 工具        | 是否做类型检查 | 是否做语法转译      | 说明                                        |
| ----------- | -------------- | ------------------- | ------------------------------------------- |
| **tsc**     | ✅（完整）      | ✅（完整）           | TypeScript 官方编译器，既检查又转译。       |
| **babel**   | ❌              | ✅                   | 只转译 TS 语法为 JS（类型信息被忽略）。     |
| **esbuild** | ❌              | ✅                   | 高速转译 TS → JS，不进行类型检查。          |
| **swc**     | ❌（默认）      | ✅                   | Rust 写的超快转译器，只负责语法转化。       |
| **vite**    | ❌（默认）      | ✅（底层用 esbuild） | 快速开发环境，只处理语法。                  |
| **rollup**  | ❌（默认）      | ✅（通过插件）       | 一般配合 `@rollup/plugin-typescript` 转译。 |
| **webpack** | ❌（默认）      | ✅（通过 loader）    | 例如 `ts-loader` 或 `babel-loader` 来转译。 |

## 10.编译成js，是以tsconfig.ts为准还是babel.config.ts为准？

这个问题其实有很明显的区别。tsconfig.ts是给tsc用的。babel.config.ts是给babel用的。工程化环境下，打包是用babel的，根本就没涉及到tsc。你说以什么为准？

tsc有两个重要的功能，一个类型检查，一个编译ts文件。

## 11.如何理解代码中的类型？

- 类型是“辅助”，不是”目的“
- 逻辑才是本体，类型是外壳

## 12.extends约束的理解

A extends B

A类型属不属于B类型

## 13.infer的理解

1. 基本概念

   - infer` 只能在 **条件类型**（`X extends Y ? A : B`）的右侧的 `Y` 模式里使用，用来 **“在类型模式匹配时提取一个子类型并给它命名”**，供 `A` 中使用。可以把它想成类型级别的“占位符 + 捕获组”。

2. 示例

   ```typescript
   type ReturnTypeMy<T> = T extends (...args: any[]) => infer R ? R : never;
   
   type A = ReturnTypeMy<() => number>;        // number
   type B = ReturnTypeMy<(x: string) => void>; // void
   ```

   ```typescript
   type FirstArg<T> = T extends (arg: infer A, ...rest: any[]) => any ? A : never;
   
   type C = FirstArg<(x: number, y: string) => void>; // number
   ```

   ```typescript
   type Head<T> = T extends [infer H, ...any[]] ? H : never;
   
   type H1 = Head<[1, 2, 3]>; // 1
   type H2 = Head<string[]>;  // never （string[] 不匹配元组模式）
   ```

## 14.内置类型Record作用

根据指定的一组建和一个值类型，构建一个对象类型

```typescript
type User = Record<"name" | "age", string>;

const obj: User = {
  name: "Alice",
  age: "18",
};
```

## 15.as的用法

1. 类型断言

   ```typescript
   const el = document.querySelector(".title");
   const div = el as HTMLDivElement;
   div.innerHTML = "Hello";
   ```

2. 常量断言

   ```typescript
   const arr = [1, 2, 3] as const;
   ```

3. 映射类型中重命名键

   ```typescript
   type PrefixKeys<T> = {
     [P in keyof T as `prefix_${string & P}`]: T[P]
   }
   
   type Example = {
     id: number
     name: string
   }
   
   type Prefixed = PrefixKeys<Example>
   ```

4. 映射类型中过滤键

   ```typescript
   type HYOmit<T, K extends keyof T> = {
     [P in keyof T as P extends K ? never : P]: T[P]
   }
   
   type Person = {
     name: string
     age: number
     gender: string
   }
   
   type NewType = HYOmit<Person, "age" | "gender">
   ```

## 16.什么是keyof？

获取类型 `T` 所有 **可作为键（property key）的类型**，并返回一个 **联合类型**。

1. keyof any
   - number | string |symbol
2. keyof {name:string,age:number}
   - 'name' | 'age'

## 17.映射类型in的右边类型有什么限制吗？只能是联合联系吗？

1. in右边类型必须是“可以被遍历的联合类型”
2. 也可以是这样：in keyof T。当然，keyof T的结果必须能返回一个联合类型

## 18.内置工具InstanceType

1. 作用

   - 获取构造函数类型的示例类型

2. 示例

   ```typescript
   class Person {
     name = 'John';
   }
   
   type HYInstanceType<T extends new (...args: any) => any> =
     T extends new (...args: any) => infer R ? R : never;
   
   type P = HYInstanceType<typeof Person>;
   ```

## 19.class定义的类是什么类型？

1. 类本身是一个实例类型
2. typeof Person是一个构造函数类型

## 20.类型兼容

只要不会导致实际运行时出问题（语义上合理、结构上匹配）——就被认为是类型兼容。

- 对象兼容

  ```typescript
  interface Person {
    name: string
  }
  
  interface Dog {
    name: string
  }
  
  let p: Person = { name: '张三' }
  let d: Dog = { name: '旺财' }
  
  p = d // ✅ 没有问题
  ```

- 函数兼容

  ```typescript
  interface Person {
    name: string
  }
  
  interface Dog {
    name: string
    age: number
  }
  
  let p: Person = { name: '张三' }
  let d: Dog = { name: '旺财', age: 3 }
  
  p = d // ✅ OK，因为 Dog 的属性更多，能满足 Person
  d = p // ❌ Error，因为 Person 少了 age 属性
  ```

## 21.类型保护

TypeScript 的类型保护机制，说到底就是开发者在**运行时提供“类型线索”**，让编译器能在静态分析时正确推断出更精确的类型

| 保护方式           | 关键字/机制         | 示例                                     | 用途                                                         |
| ------------------ | ------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| **typeof**         | JS 原生操作符       | `typeof x === 'string'`                  | 基础类型（string、number、boolean、symbol、bigint、undefined） |
| **instanceof**     | JS 原生操作符       | `x instanceof Date`                      | 类实例判断                                                   |
| **in**             | JS 原生操作符       | `'name' in obj`                          | 判断对象是否含有某属性                                       |
| **字面量判断**     | 比较操作            | `x === 'success'`                        | 联合字面量类型                                               |
| **自定义类型谓词** | `param is SomeType` | `function isString(x: any): x is string` | 自定义复杂类型判断                                           |

## 22.is的理解

1. 不能单独使用
2. 只能出现在函数返回类型的位置
3. 主要用于类型收窄的函数上，指定某个变量是一个确定的类型

## 23.ThisType

让对象方法中的this指定类型

```typescript
const obj: {
  x: number
  getX(): number
} & ThisType<{ x: number }> = {
  x: 123,
  getX() {
    return this.x; // ✅ 正确推断：this 是 { x: number }
  }
}
```

## 24. 宽泛类型

- Object
- object
- {}
- any
- unknown