<h1 align="center">
No Ad Rule
</h1>
<p align="center">
<sup>
Maintained by <b>eHpo</b>
</sup>
</p>

## 使用方法

1. 添加远程配置

   <https://raw.githubusercontent.com/eHpo1/Rules/master/Shadowrocket/Main.conf>

2. 编辑配置 - HTTPS解密 - 打开开关 - 安装证书；然后到系统设置 - 已下载描述文件 - 安装；最后系统设置 - 通用 - 关于本机 - 证书信任设置，信任刚才安装的证书

> 更多支持请查看 [Shadowrocket官方说明](https://github.com/Shadowrocket)

---

## 包含的 List

### Liby.list

通过域名 / IP去广告

### Tide.list

通过中间人攻击使用正则表达式实现对广告的精准打击

### Apple_CDN.list / Apple_API.list

> [苹果服务的连接策略推荐](https://blog.dada.li/2019/better-proxy-rules-for-apple-services) @geekdada

CDN 资源类  默认直连  
App 实体文件、Apple Music 音乐文件

API 服务类  默认直连  
购买、发起下载、iCloud 同步（含上传和下载）、Siri

### AsianMedia.list / GlobalMedia.list

亚洲媒体 / 国际媒体

### Domestic.list / Global.list

国内 / 国际常用网页

### Region.list

用于修正规则，包含 LAN / GeoIP,CN

---

<h3 align="center">
<p>感谢围观
<br>祝您心明眼亮</b>
</p>
</h3>
