<h1 align="center">
No Ad Rule
</h1>
<p align="center">
<sup>
Maintained by <b>eHpo</b>
</sup>
</p>

## 使用方法

1. 下载配置文件

   <https://raw.githubusercontent.com/eHpo1/Rules/master/QuantumultX/Main.conf>

2. 替换配置文本`[server_remote]`中的`https://www.example.com/example1`替换为您的订阅链接

   > ![QuantumultX编辑](/.image/qxbj.jpg)

3. 打开MitM开关 - 点击安装证书；然后到系统设置 - 已下载描述文件 - 安装；最后系统设置 - 通用 - 关于本机 - 证书信任设置，信任刚才安装的证书

> 图标选自 [Qure](https://github.com/Koolson/Qure) 项目

> 更多支持请查看 [QuantumultX官方说明](https://github.com/crossutility/Quantumult-X)

---

## List 顺序、说明

### Liby.list

通过域名、IP去广告

```
https://raw.githubusercontent.com/eHpo1/Rules/master/QuantumultX/Filter/Liby.txt
```

### Sub/

分站细化规则

<https://github.com/eHpo1/Rules/tree/master/QuantumultX/Filter/Sub>

### Apple_CDN.list、Apple_API.list

> [苹果服务的连接策略推荐](https://blog.dada.li/2019/better-proxy-rules-for-apple-services) @geekdada

CDN 资源类  推荐选择直连  
App 实体文件、Apple Music 音乐文件

```
https://raw.githubusercontent.com/eHpo1/Rules/master/QuantumultX/Filter/Apple_CDN.txt
```

API 服务类  推荐选择账号所在区  
购买、发起下载、iCloud 同步（含上传和下载）、Siri

```
https://raw.githubusercontent.com/eHpo1/Rules/master/QuantumultX/Filter/Apple_API.txt
```

### AsianMedia.list、GlobalMedia.list

亚洲媒体、国际媒体

```
https://raw.githubusercontent.com/eHpo1/Rules/master/QuantumultX/Filter/AsianMedia.txt
https://raw.githubusercontent.com/eHpo1/Rules/master/QuantumultX/Filter/GlobalMedia.txt
```

### Domestic.list、Global.list

国内、国际常用网页

```
https://raw.githubusercontent.com/eHpo1/Rules/master/QuantumultX/Filter/Domestic.txt
https://raw.githubusercontent.com/eHpo1/Rules/master/QuantumultX/Filter/Global.txt
```

### Rewrite.txt

URL重写（包含 Tide.list）

```
https://raw.githubusercontent.com/eHpo1/Rules/master/QuantumultX/Rewrite.txt
```

### ChinaMedia.txt

回国专用list，回国规则暂无模板，只有一个面向大陆媒体的list

```
https://raw.githubusercontent.com/eHpo1/Rules/master/QuantumultX/Filter/ChinaMedia.txt
```

---

<h3 align="center">
<p>感谢围观
<br>祝您心明眼亮</b>
</p>
</h3>
