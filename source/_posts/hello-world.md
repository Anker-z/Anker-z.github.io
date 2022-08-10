---
title: jenkins 构建时选择分支
date: 2022-8-8
updated:
type: jenkins
comments:
description:
keywords:
top_img:
mathjax:
katex:
aside:
aplayer:
highlight_shrink:
---

### jenkins 构建时选择分支

Jenkins选择分支需要安装 Git Parameter 插件

![插件](https://cdn.baiwuwu.com/%E6%8F%92%E4%BB%B6.png)

安装完毕之后在打开当前工程的配置选项

![配置](https://cdn.baiwuwu.com/%E9%85%8D%E7%BD%AE.png)

然后找到**General**，选中`This project is parameterized`

![img](https://cdn.baiwuwu.com/2261659777344_.pic.jpg)

点击添加参数按钮，选择 **Git Parameter**

![img](https://cdn.baiwuwu.com/2271659777373_.pic_hd.jpg)

输入名称变量为**branch**，输入描述，参数类型选择**分支或标签**，默认值可以填写自己默认的分支

![img](https://cdn.baiwuwu.com/2281659777842_.pic_hd.jpg)

然后切换到源码管理选项，在指定分支处填入刚刚的名称变量 **$branch**，然后保存即可。

![img](https://cdn.baiwuwu.com/2291659778018_.pic_hd.jpg)

最后返回到工程，点击`build with Paramenters`, 就可以选择项目的分支部署啦

![img](https://cdn.baiwuwu.com/2301659778074_.pic_hd.jpg)





