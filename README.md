# fyw
这是一个关于房产发布与管理的网站代码
##实现模块有：
首页(index.html)，相关模块页(newhouse-listitem.html)，详情页(details.html),列表页(listitem.html)及用户信息管理页面(user.html)
##实现的功能主要有：
首页：滑动广告、滚动条监听事件，模块页：轮播及右下角弹窗广告，详情页：鼠标移入切换大图，用户管理后台：点击触发事件，使用jquery加载文档片段。另，首页热销楼盘，新房及二手房中间主体模块简单采用后端语言Nodejs实现动态加载数据库数据。
##运行步骤：
###0、导入数据库文件到数据库中,本项目数据库使用mysql;
    参考：0.1、使用xampp客户端,打开xampp并start MySQL;
          0.2、点击shell进入命令界面，输入mysql -uroot -p进入数据库管理;
          0.3、执行`SET NAMES UTF8;`;
          0.4、执行`SOURCE fyw.sql`,这里需将.sql文件(路径：./public/data/fyw.sql)拖拽至SOURCE后面，中间需有空格。
###1、进入到项目根目录命令行执行：npm install;
###2、npm start;
###3、打开浏览器地址栏输入：localhost:8081
