<h1 align="center">
No Ad Rule
</h1>
<p align="center">
<sup>
Maintained by <b>eHpo</b>
</sup>
</p>

## 使用方法

1. 从URL下载配置文件

   <https://raw.githubusercontent.com/eHpo1/Rules/master/Loon/Main.conf>

2. 继续编辑，将配置文本`[Remote Proxy]`中的`https://www.example.com/example1.txt`替换为您的订阅链接
   > ![Loon编辑](/.image/loonbj.jpg)

3. 将配置文本`[Remote Filter]`中的两个`关键词`（各两处）替换为您所需的
   > ![Loon筛选](/.image/loonsx.jpg)

4. 打开Loon的MITM开关 - 证书管理 - 安装CA证书；然后到系统设置 - 已下载描述文件 - 安装；最后系统设置 - 通用 - 关于本机 - 证书信任设置，信任刚才安装的证书

> 更多支持请查看 [Loon官方说明](https://github.com/Loon0x00/LoonManual)

---

## List

### Liby.list

通过域名、IP去广告

```
https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/Liby.list
```

### Tide.list

通过中间人攻击使用正则表达式实现对广告的精准打击

```
https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/Tide.list
```

### Sub/

分站细化规则

<https://github.com/eHpo1/Rules/tree/master/Surge4/Ruleset/Sub>

### Apple_CDN.list、Apple_API.list

> [苹果服务的连接策略推荐](https://blog.dada.li/2019/better-proxy-rules-for-apple-services) @geekdada

CDN 资源类  推荐选择直连  
App 实体文件、Apple Music 音乐文件

```
https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/Apple_CDN.list
```

API 服务类  推荐选择账号所在区  
购买、发起下载、iCloud 同步（含上传和下载）、Siri

```
https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/Apple_API.list
```

### AsianMedia.list、GlobalMedia.list

亚洲媒体、国际媒体

```
https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/AsianMedia.list
https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/GlobalMedia.list
```

### Domestic.list、Global.list

国内、国际常用网页

```
https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/Domestic.list
https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/Global.list
```

### ChinaMedia.list

回国专用list，回国规则暂无模板，只有一个面向大陆媒体的list

```
https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/ChinaMedia.list
```

---

<h3 align="center">
<p>感谢围观
<br>祝您心明眼亮</b>
</p>
</h3>
