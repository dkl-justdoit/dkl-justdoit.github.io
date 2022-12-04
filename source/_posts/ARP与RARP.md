---
title: ARP与RARP
author: dkl-justdoit
img: /source/images/xxx.jpg
top: true
cover: true
coverImg: /images/1.jpg
toc: false
mathjax: false
categories:
  - Linux
  - 网络
tags:
  - 网络
  - Linux
  - ARP
  - RARP
date: 2022-08-06 13:18:08
password:
summary:
---

在传输一个 IP 数据报的时候，确定了源 IP 地址和目标 IP 地址后，就会通过主机「路由表」确定 IP 数
据包下一跳。然而，网络层的下一层是数据链路层，所以我们还要知道「下一跳」的 MAC 地址。
由于主机的路由表中可以找到下一跳的 IP 地址，所以可以通过 ARP 协议，求得下一跳的 MAC 地址。
那么 ARP 又是如何知道对方 MAC 地址的呢？
简单地说，ARP 是借助 ARP 请求与 ARP 响应两种类型的包确定 MAC 地址的。 
