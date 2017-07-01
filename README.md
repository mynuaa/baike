# 南航百科

南航人共享的百科全书。

## 安装方法

0. 安装并配置 parsoid、memcached，安装并启用 PHP 的 APC、memcached 和 intl 扩展；
1. 复制并修改 libsso 下的 config.php.example，然后执行 initialize.sh；
2. 进入百科的首页，按照网页提示进行安装：
    * 数据库编码选择 utf8
    * 记得将最后生成的 LocalSettings.php 文件保存到百科的目录下
3. 将 LocalSettings.php.append 中的全部内容添加到 LocalSettings.php 中；
4. 运行 parsoid 和 memcached，然后从 SSO 登录后即可编辑。

----

== MediaWiki ==

MediaWiki is a free and open-source wiki software package written in PHP. It
serves as the platform for Wikipedia and the other Wikimedia projects, used
by hundreds of millions of people each month. MediaWiki is localised in over
350 languages and its reliability and robust feature set have earned it a large
and vibrant community of third-party users and developers.

MediaWiki is:

* feature-rich and extensible, both on-wiki and with hundreds of extensions;
* scalable and suitable for both small and large sites;
* simple to install, working on most hardware/software combinations; and
* available in your language.

For system requirements, installation, and upgrade details, see the files
RELEASE-NOTES, INSTALL, and UPGRADE.

* Ready to get started?
** https://www.mediawiki.org/wiki/Special:MyLanguage/Download
* Looking for the technical manual?
** https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Contents
* Seeking help from a person?
** https://www.mediawiki.org/wiki/Special:MyLanguage/Communication
* Looking to file a bug report or a feature request?
** https://bugs.mediawiki.org/
* Interested in helping out?
** https://www.mediawiki.org/wiki/Special:MyLanguage/How_to_contribute

MediaWiki is the result of global collaboration and cooperation. The CREDITS
file lists technical contributors to the project. The COPYING file explains
MediaWiki's copyright and license (GNU General Public License, version 2 or
later). Many thanks to the Wikimedia community for testing and suggestions.
