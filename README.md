<h1 align="center">
No Ad Rule
</h1>
<p align="center">
<sup>
Maintained by <b>eHpo</b>
</sup>
</p>

## 简介

为去广告而努力奋斗，简约、极致。主要维护 **Liby** 与 **Tide** 两个规则片段。包含部分运营商劫持屏蔽、部分数据收集屏蔽、大量应用内广告屏蔽。  
适合有一定基础的人员。

* [适用](#适用)
    * Clash
    * Loon
    * QuantumultX
    * Shadowrocket
    * Surge4
* [List 顺序、说明](#list-顺序说明)
    * Liby、Tide
    * Sub/
    * Apple_API、Apple_CDN
    * AsianMedia、GlobalMedia
    * Domestic、Global
    * Region
* [常见问题](#qa)
* [关于](#关于)
* [鸣谢](#特别鸣谢)
* [License](#license)

---

## 适用

> 需要一定动手能力，如果您有不明白的地方可以详细查看工具的官方说明。

| 工具 | 配置说明文档 | 使用方法点击查看详情 |
| :-: | :-: | :-: |
| Clash | [官方](https://github.com/Dreamacro/clash/blob/master/README.md) | [详请](/Clash/README.md) |
| Loon | [官方](https://github.com/Loon0x00/LoonManual) | [详请](/Loon/README.md) |
| QuantumultX | [官方](https://github.com/crossutility/Quantumult-X) | [详请](/QuantumultX/README.md) |
| Shadowrocket | [官方](https://github.com/Shadowrocket) | [详请](/Shadowrocket/README.md) |
| Surge4 | [官方](https://manual.nssurge.com) | [详请](/Surge4/README.md) |

---

## List 顺序、说明

### Liby.list

通过域名、IP去广告

### Tide.list

通过中间人攻击使用正则表达式实现对广告的精准打击

### Sub/

分站细化规则

### Apple_CDN、Apple_API

> [苹果服务的连接策略推荐](https://blog.dada.li/2019/better-proxy-rules-for-apple-services) @geekdada

CDN 资源类  推荐选择直连  
App 实体文件、Apple Music 音乐文件

API 服务类  推荐选择账号所在区  
购买、发起下载、iCloud 同步（含上传和下载）、Siri

### AsianMedia.list、GlobalMedia.list

亚洲媒体、国际媒体

### Domestic.list、Global.list

国内、国际常用网页

### ChinaMedia.list

回国专用list，回国规则暂无模板，只有一个面向大陆媒体的list

---

## Q&A

### 怎么使用？

> 任凭发挥想象。

### 为什么使用了规则还是有广告？

> 1. 检查证书文件有没有正确安装、信任，这个对于使用效果很关键。或者是应用在屏蔽之前就已经缓存好了广告，解决办法是清除缓存或者卸载重装应用。
> 2. 规则在更新广告也在更新，精力有限，新出现的广告可能还没有来得及屏蔽，可以反馈给我们。

### 好像CA证书是很重要的东西，信任后会不会有危害？

> CA证书的确不能盲目信任，但我们可以保证我们完全不会对您进行任何不利的操作，软件也是仅对 HTTPS 流量进行解密，可放心使用。如果还是不放心的话可自行生成一份证书文件信任，效果是一样的。

---

## 关于

本项目早期基于 [***ConnersHua***](https://github.com/ConnersHua) 去广告规则，参考众多大佬的项目拼凑而成。致力于打造无广告、简洁、舒适的环境。

如果您发现项目有需要改进的地方请通过 **[提交Issue](https://github.com/eHpo1/Rules/issues/new/choose)** 或者在 **[Telegram频道](https://t.me/eHpo2)** 中评论的方式对项目进行补充完善。

---

## 特别鸣谢

* 众多帮助我们与项目成长完善的人
* [ACL4SSR](https://github.com/ACL4SSR/ACL4SSR)
* [Choler](https://github.com/Choler)
* [***ConnersHua***](https://github.com/ConnersHua)
* [gaoyifan](https://github.com/gaoyifan)
* [geekdada](https://github.com/geekdada)
* [GeQ1an](https://github.com/GeQ1an)
* [h2y](https://github.com/h2y)
* [Hackl0us](https://github.com/Hackl0us)
* [langkhach270389](https://github.com/langkhach270389)
* [lhie1](https://github.com/lhie1)
* [neoFelhz](https://github.com/neoFelhz)
* [NobyDa](https://github.com/NobyDa)
* [onewayticket255](https://github.com/onewayticket255)
* [yichahucha](https://github.com/yichahucha)

---

## License

[![License](/.image/license.svg)](/LICENSE)

1. 不得使用本项目组织、参与、进行任何形式的违法犯罪行为。

2. 项目维护者对本项目的任何形式滥用不承担任何责任。使用者自身承当完全责任。

---

<h3 align="center">
<p>感谢围观
<br>祝您心明眼亮</b>
</p>
</h3>
