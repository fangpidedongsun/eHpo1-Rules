<h1 align="center">
No Ad Rule
</h1>
<p align="center">
<sup>
Maintained by <b>eHpo</b>
</sup>
</p>

## 使用方法

1. 开启Surge配置同步 - iCloud同步

2. 通过iOS [快捷指令](https://www.icloud.com/shortcuts/9042a9dd0a3348fa93b6e382959f1ae8) 转换托管链接（筛选2个名称关键词），生成的4个文件全部保存在iCloud的Surge目录下。

	> ![Surge快捷指令](/.image/surgekjzl.jpg)

3. Surge首页 - 打开MitM开关 - 安装证书；然后到系统设置 - 已下载描述文件 - 安装；最后系统设置 - 通用 - 关于本机 - 证书信任设置，信任刚才安装的证书

更多支持请查看 [Surge官方说明](https://manual.nssurge.com)

---

## List 顺序、说明

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
