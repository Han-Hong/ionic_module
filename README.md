# ionic_module

### 使用ionic自动生成工程的时候，里面的所有controller跟service都是在同一个文件，这样导致代码不简介，所以最好的方法就是通过requirejs来帮助我们管理js。
### 该代码片断是根据小虎Oni同学的[博客](http://blog.inet198.cn/?onil_chen?viewmode=contents "博客") 代码提炼成的，再加入了自己对leancloud的集成测试。
### 使用的时候直接在你本地新建好工程，替换www文件夹就可以了。
### 注意需要在app.js里面替换自己leancloud的key  AV.initialize('', '');
