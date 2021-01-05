//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
<<<<<<< HEAD
      goodsList:[
        /*{
          "url": "/pages/show/show",
          "src": "//gd2.alicdn.com/imgextra/i2/1825264591/O1CN01i8WSLt1jmiwL1zoAx_!!1825264591.jpg",
          "information": "全新韩版女款双肩包，可以放13寸电脑",
          "location": "中北校区",
          "approach": "送货上门",
          "price": "￥40"
        },
        {
          "url": "/pages/show/show",
          "src": "//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608055964103&di=4f5e06e9724d41b9ce04a68c84760929&imgtype=0&src=http%3A%2F%2Fimg4.haitao.com%2Fpromo%2F2018%2F03%2F15%2F05%2F20180315054824_30594.jpg",
          "information": "菌菇水  从朋友手里买的小样　50ml",
          "location": "闵行校区",
          "approach": "自提",
          "price": "￥40"
        },
        {
          "url": "/pages/show/show",
          "src": "//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608056006925&di=0d6a033ab7465387d2beac4df405228d&imgtype=0&src=http%3A%2F%2Fimg.022sunny.com%2F2019%2F11%2FC97z1886x98f.png",
          "information": "零食大礼包",
          "location": "中北校区",
          "approach": "送货上门",
          "price": "￥40"
        },
        {
          "url": "/pages/show/show",
          "src": "//gd3.alicdn.com/imgextra/i1/192722266/O1CN01KoHyHT1Sbs1P75SRc_!!192722266.jpg_50x50.jpg_.webp",
          "information": "网红零食大礼包",
          "location": "闵行校区",
          "approach": "自提",
          "price": "￥40"
        },*/
      ],

=======
    keyword:'',
    navbarActiveIndex: 0,
    navbarTitle: [
    "首页",
    "服装鞋帽",
    "教材书籍",
    "美妆护肤",
    "卡券交易"
    ]
  },
  
  onNavBarTap: function (event) {
      // 获取点击的navbar的index
      let navbarTapIndex = event.currentTarget.dataset.navbarIndex
      // 设置data属性中的navbarActiveIndex为当前点击的navbar
      this.setData({
          navbarActiveIndex: navbarTapIndex      
      })
   },
  
   onBindAnimationFinish: function ({detail}) {
      // 设置data属性中的navbarActiveIndex为当前点击的navbar
      this.setData({
          navbarActiveIndex: detail.current
      })
   },

   canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
   },

   //获取输入框内容
  searchGood: function(e){
    this.setData({
      keyword: e.detail.value
    })
  },

   bindToSearch(e) {
    var that = this;
    var keyword = that.data.keyword;
    console.log(keyword);
    wx.setStorage({
      data: keyword,
      key: 'keyword',
    })
    wx.navigateTo({
      url: '/pages/release/release'
    })
>>>>>>> e2c2506cf1df21f3d13cff3087ff31985b5aa4fc
  },
  
  searchBar(e) {
    var that = this;
    var keyWord = that.data.keyWord;
    var value = e.detail.value; //input输入的值
    console.log(value);
    that.setData({
      keyWord: value
    })
    // var url = app.globalData.doubanBase + app.globalData.ResourcesURL + value + "&&start=0&&count=10"; 
    var url = app.globalData.huanbaoBase + 'search.php';
    //微信请求方式的写法
    wx.request({
      url,
      method: 'POST',
      data: {
        keyword: value
      },
      header: { 'content-type': 'application/x-www-form-urlencoded ' },
      success(res) {
        console.log(res);
        that.handleData(res.data.data);
      },
      fail(err) {
        console.log(err);
      }
    })
  },

  handleData(data) {
    var resultList = []
    data.forEach(item => {
      resultList.push(item)
    })
    this.setData({ resultList: resultList });//将此处resultList的值放在数据data的resultList中
  },

  bindToSearchList(e) {
    console.log(e.currentTarget.dataset.value);
    var that = this;
    var url = app.globalData.huanbaoBase + 'search.php';
    var value = e.currentTarget.dataset.value;
    var keyWord = value;
    wx.navigateTo({
      url: '../release/release?keyWord=' + keyWord
    })
  },

   //响应事件
   bindsearchTypeInput: function(e) { //搜索类别
    this.setData({
      searchTypeIndex: e.detail.value
    })
  },

  //搜索的响应事件
  bindToSearch(e) {
    var that = this;
    var keyWord = that.data.keyWord;
    var searchTypeIndex = that.data.searchTypeIndex; //搜索类型索引
    var searchType = that.data.searchType[searchTypeIndex]; //搜索类型
    wx.request({
      data: {
        searchType: searchType,
      },
    })
    console.log(1);
    console.log(keyWord);
    wx.navigateTo({
      url: '../release/release?keyWord=' + keyWord,
    });
  },

  onLoad: function(options) {
    var that = this;
    wx.request({
      url:'http://localhost/viewHomepage.php',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded ' },
      success(res) {
        that.setData({
          goodsList: res.data.data
        })
      },
      fail(err) {
        console.log(err);
      }
    })
  }

})
