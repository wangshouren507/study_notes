# 杂谈

## html元素类型

### 继承链

```mathematica
EventTarget
   ↓
Node
   ↓
Element
   ↓
HTMLElement
   ↓
HTMLXXXElement
```

### 核心继承体系结构图

```php-template
EventTarget
 └── Node
      ├── Document
      ├── DocumentFragment
      ├── CharacterData
      │    ├── Text
      │    └── Comment
      └── Element
           ├── SVGElement
           └── HTMLElement
                ├── HTMLAnchorElement        (<a>)
                ├── HTMLAreaElement          (<area>)
                ├── HTMLAudioElement         (<audio>)
                ├── HTMLBaseElement          (<base>)
                ├── HTMLBodyElement          (<body>)
                ├── HTMLBRElement            (<br>)
                ├── HTMLButtonElement        (<button>)
                ├── HTMLCanvasElement        (<canvas>)
                ├── HTMLDivElement           (<div>)
                ├── HTMLFormElement          (<form>)
                ├── HTMLHeadingElement       (<h1>~<h6>)
                ├── HTMLImageElement         (<img>)
                ├── HTMLInputElement         (<input>)
                ├── HTMLLabelElement         (<label>)
                ├── HTMLLIElement            (<li>)
                ├── HTMLLinkElement          (<link>)
                ├── HTMLMediaElement
                │    ├── HTMLAudioElement    (<audio>)
                │    └── HTMLVideoElement    (<video>)
                ├── HTMLParagraphElement     (<p>)
                ├── HTMLSelectElement        (<select>)
                ├── HTMLSpanElement          (<span>)
                ├── HTMLTableElement         (<table>)
                ├── HTMLTableRowElement      (<tr>)
                ├── HTMLTableCellElement     (<td>, <th>)
                ├── HTMLTextAreaElement      (<textarea>)
                ├── HTMLUListElement         (<ul>)
                └── 以及更多（HTMLIFrameElement、HTMLOptionElement...）

```

### 常用HTML元素类型汇总表

| HTML 标签      | 对应 TypeScript 类型   | 继承自                           |
| -------------- | ---------------------- | -------------------------------- |
| `<div>`        | `HTMLDivElement`       | `HTMLElement`                    |
| `<span>`       | `HTMLSpanElement`      | `HTMLElement`                    |
| `<p>`          | `HTMLParagraphElement` | `HTMLElement`                    |
| `<a>`          | `HTMLAnchorElement`    | `HTMLElement`                    |
| `<img>`        | `HTMLImageElement`     | `HTMLElement`                    |
| `<button>`     | `HTMLButtonElement`    | `HTMLElement`                    |
| `<input>`      | `HTMLInputElement`     | `HTMLElement`                    |
| `<textarea>`   | `HTMLTextAreaElement`  | `HTMLElement`                    |
| `<select>`     | `HTMLSelectElement`    | `HTMLElement`                    |
| `<option>`     | `HTMLOptionElement`    | `HTMLElement`                    |
| `<label>`      | `HTMLLabelElement`     | `HTMLElement`                    |
| `<form>`       | `HTMLFormElement`      | `HTMLElement`                    |
| `<ul>`         | `HTMLUListElement`     | `HTMLElement`                    |
| `<li>`         | `HTMLLIElement`        | `HTMLElement`                    |
| `<table>`      | `HTMLTableElement`     | `HTMLElement`                    |
| `<tr>`         | `HTMLTableRowElement`  | `HTMLElement`                    |
| `<td>`、`<th>` | `HTMLTableCellElement` | `HTMLElement`                    |
| `<canvas>`     | `HTMLCanvasElement`    | `HTMLElement`                    |
| `<video>`      | `HTMLVideoElement`     | `HTMLMediaElement → HTMLElement` |
| `<audio>`      | `HTMLAudioElement`     | `HTMLMediaElement → HTMLElement` |
| `<iframe>`     | `HTMLIFrameElement`    | `HTMLElement`                    |
| `<script>`     | `HTMLScriptElement`    | `HTMLElement`                    |
| `<link>`       | `HTMLLinkElement`      | `HTMLElement`                    |
| `<meta>`       | `HTMLMetaElement`      | `HTMLElement`                    |
| `<body>`       | `HTMLBodyElement`      | `HTMLElement`                    |
| `<head>`       | `HTMLHeadElement`      | `HTMLElement`                    |

### 快速查找某个标签的类型方法

```typescript
document.createElement('标签名')
```

