//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    keyword:'',
    classifier:'',
    thingType: [ "教材", "卡券", "美妆","护肤","服装","食品", "租借","其它"],
    goodsList:[]
  },
   //获取输入框内容
   searchGood: function(e){
    var that=this;
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



  searchGood0: function(e){
    var that=this;
    this.setData({
      classifier: that.data.thingType[0]
    })
    that.bindToClassify();
  },
  searchGood1: function(e){
    var that=this;
    this.setData({
      classifier: that.data.thingType[1]
    })
    that.bindToClassify();
  },
  searchGood2: function(e){
    var that=this;
    this.setData({
      classifier: that.data.thingType[2]
    })
    that.bindToClassify();
  },
  searchGood3: function(e){
    var that=this;
    this.setData({
      classifier: that.data.thingType[3]
    })
    that.bindToClassify();
  },
  searchGood4: function(e){
    var that=this;
    this.setData({
      classifier: that.data.thingType[4]
    })
    that.bindToClassify();
  },
  searchGood5: function(e){
    var that=this;
    this.setData({
      classifier: that.data.thingType[5]
    })
    that.bindToClassify();
  },
  searchGood6: function(e){
    var that=this;
    this.setData({
      classifier: that.data.thingType[6]
    })
    that.bindToClassify();
  },
  searchGood7: function(e){
    var that=this;
    this.setData({
      classifier: that.data.thingType[7]
    })
    console.log( that.data.classifier);
    that.bindToClassify();
  },

  bindToClassify(e) {
    var that = this;
    var classifier = that.data.classifier;
    console.log(classifier);
    wx.setStorage({
      data: classifier,
      key: 'classifier',
    })
    wx.navigateTo({
      url: '/pages/release_classify/release'
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
