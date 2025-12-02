## 1.npm i ts-node typescript tslib @types/node?

- ts-node的作用是将ts文件编译成js文件并执行。
- ts-node的编译ts和类型检查都依赖typescript
- 当tsconfig开启importHelpers时，需要安装tslib，能减少部分重复代码的编译生成
- @types/node为node api提供类型支持

## 2.ts的作用

- 类型检查

  > 开发阶段类型的使用，可以避免运行时类型问题的报错，同时减少一点生产环境中关于类型判断的代码