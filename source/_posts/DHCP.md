---
title: DHCP
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
  - DHCP
date: 2022-08-04 13:16:10
password:
summary:
---

 DHCP 服务器和 DHCP 客户端的交互过程
背景：


　　DHCP（Dynamic Host Configuration Protocol），动态主机配置协议，实现一个主机加入一个网络时，自动获得一个 IP 地址的功能。


DHCP 客户端与 DHCP 服务器的交互过程：

  　　1. DHCP 客户端广播一个 DHCP 发现消息，寻找本网络中的 DHCP 服务器。

  　　2. DHCP 服务器收到消息，并广播一个 DHCP 提供消息，其中包括一个预分配个 DHCP 客户端的 IP 地址。

  　　3. DHCP 客户端收到提供消息，如果接受该 IP 地址，就广播一个 DHCP 请求消息。

  　　4. DHCP 服务器广播 DHCP 确认消息，告知其他主机，我正式把一个 IP 地址分配给新来的客户机。

 


注意事项：

  　　1. 一个网络中可以有多个 DHCP 服务器，新来的主机选择相应最快的那个 DHCP 服务器。

  　　2. 分配给主机的 DHCP 地址是临时的，它隔一段时间就会更新，IP 地址租用期由 DHCP 服务器决定。

  　　3. DHCP 采用客户/服务器工作方式，属于应用层协议，采用广播方式来交互（事先不知道双发的 IP 地址），因此基于 UDP 协议。

