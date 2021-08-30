export default {
  pages: [
    'pages/login/index',
    'pages/index/index',
    'pages/menu/index',
    'pages/mine/index',
  ],
  subpackages: [
    {
      'root': 'subpage',
      'pages': [
        'demo/index'
      ]
    }
  ],
  tabBar: {
    list: [{
      'iconPath': 'static/imgs/tabbar/home-off.png',
      'selectedIconPath': 'static/imgs/tabbar/home-on.png',
      pagePath: 'pages/index/index',
      text: '主页'
    }, {
      'iconPath': 'static/imgs/tabbar/menu-off.png',
      'selectedIconPath': 'static/imgs/tabbar/menu-on.png',
      pagePath: 'pages/menu/index',
      text: '菜单'
    }, {
      'iconPath': 'static/imgs/tabbar/my-off.png',
      'selectedIconPath': 'static/imgs/tabbar/my-on.png',
      pagePath: 'pages/mine/index',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Demo',
    navigationBarTextStyle: 'black'
  }
}
