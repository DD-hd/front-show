- float

  - 包裹性
  - 高度塌陷
    - 会让父元素的高度塌陷
  - 块状化
    - 一旦元素 float 的属性不为 none，则其 display 计算值就是 block 或者 table
  - 没有任何 margin 合并

- clear

  - 元素盒子的边不能和前面的浮动元素相邻
  - 缺陷

    - margin-top 无效
    - 文字环绕现象。

- BFC

  - BFC 全称 block formatting context，中文为"块级格式化上下文"。BFC 的表现原则为：如果一个元素具有 BFC，那么它的内部子元素再怎么翻江倒海，都不会影响外部的元素。因此，BFC 元素是不可能发生 margin 重叠的，另外，BFC 元素也可以用来清除浮动的影响。
