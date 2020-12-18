//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
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

   bindToSearch(e) {
    var that = this;
    var keyWord = that.data.keyWord;
    console.log(1);
    console.log(keyWord);
    wx.navigateTo({
      url: '../release/release?keyWord=' + keyWord
    })
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
      //注意： push可以是具体的对象
      // resultList.push({
      //   title: item.title,
      //   image: item.images.small,
      //   desc,
      //   id: item.id
      // })
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
  }

/*  onReady: function (e) {

    var context1 = wx.createCanvasContext('firstCanvas')
    context1.fillStyle="#cc2222";
    context1.beginPath();
    context1.arc(32,32,20,Math.PI*2,0,true);
    context1.closePath();
    context1.fill();
    context1.draw();

    var context2 = wx.createCanvasContext('secondCanvas')
    context2.fillStyle="#00aacc";
    context2.beginPath();
    context2.arc(32,32,20,Math.PI*2,0,true);
    context2.closePath();
    context2.fill();
    context2.draw();

    var context3 = wx.createCanvasContext('thirdCanvas')
    context3.fillStyle="#cc00cc";
    context3.beginPath();
    context3.arc(32,32,20,Math.PI*2,0,true);
    context3.closePath();
    context3.fill();
    context3.draw();

    var context4 = wx.createCanvasContext('fourthCanvas')
    context4.fillStyle="#cc2222";
    context4.beginPath();
    context4.arc(32,32,20,Math.PI*2,0,true);
    context4.closePath();
    context4.fill();
    context4.draw();

    var context5 = wx.createCanvasContext('fifthCanvas')
    context5.fillStyle="#00aacc";
    context5.beginPath();
    context5.arc(32,32,20,Math.PI*2,0,true);
    context5.closePath();
    context5.fill();
    context5.draw();

  }
*/
})
