Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate: 'loading'
});

//首页显示
Router.route('/',{
    name : 'container'
});

//用户信息页
Router.route('/userInfo',{
    name : 'userInfo',
    data : function(){
        return
    }
})

//删除帖子
// Router.route();
