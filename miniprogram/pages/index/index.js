//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goodsList:[]
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
  },

  toProductDetail(e) {
    var productId = e.currentTarget.dataset.id;
    console.log(e);
    wx.setStorage({
      data: productId,
      key: 'productId',
    })
    wx.redirectTo({
      url: '../show/show',
    })
  }

})
