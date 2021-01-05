// pages/search/search.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放数据

    poster:"嗨嗨",
    productId: 0,
    keyword: '', //接收search传过来的关键字

    goodLastId: '',// 每组数据的最后一个的id
    goodSearchLength: 5,
    isGoodSearchShow: false,

    resultList: [],
    thingInfo: { 
      productId: 1, 
      creatorId:0,
      
      postType:"出售",
      pickupWay:"面交",
      thumbnail: '../../images/search/dior.jpg',
      title: "现代软件工程",
      type:  "教材",
      price: "999",
      campus: "中北校区",
    },//仅用于测试
    thingData: [
      { 
        thingId: 1, 
        poster:"嗨嗨",
        
        postType:"出售",
        diliveryType:"面交",
        thingImagePath: '../../images/search/dior.jpg',
        thingName: "11",
        thingType:  "教材",
        thingPrice: "999",
        thingCampus: "中北校区",
        thingPagePath:" ",
      },
      { 
        thingId: 2, 
        poster:"hh",
        
        postType:"出售",
        diliveryType:"面交",
        thingImagePath: '../../images/search/dior.jpg',
        thingName: "现代软件工程",
        thingType:  "教材",
        thingPrice: "2222",
        thingCampus: "中北校区",
        thingPagePath:" ",
      },
      { 
        thingId: 3, 
        poster:"嗨嗨",
        
        postType:"出售",
        diliveryType:"面交",
        thingImagePath: '../../images/search/dior.jpg',
        thingName: "现代软件工程",
        thingType:  "教材",
        thingPrice: "999",
        thingCampus: "中北校区",
        thingPagePath:" ",
      },
      { 
        thingId: 4, 
        poster:"嗨嗨",
        
        postType:"出售",
        diliveryType:"面交",
        thingImagePath: '../../images/search/dior.jpg',
        thingName: "44",
        thingType:  "教材",
        thingPrice: "999",
        thingCampus: "中北校区",
        thingPagePath:" ",
      },
      ],
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var keyword = that.data.keyword;
     wx.getStorage({
       key: 'keyword',
       success:function(res){
         that.setData({
           keyword:res.data,
         })
         keyword=res.data;
         console.log(keyword);
         console.log("ssssssssss");

         wx.request({
          url: 'http://localhost/searchByKeyWord.php',
          data:{
             keyword:keyword,
          },
          method: "POST",
          header: { 'content-type': 'application/x-www-form-urlencoded ' },
          success(res) {
           console.log(res);
           that.setData({
           resultList:res.data.data,
           })
         },
         fail(err) {
           console.log(err);
         }
   
        })

       }
     })
     console.log(keyword);
     
  },

  /**+
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  /*
  onPullDownRefresh: function () {
    wx.setNavigationBarTitle({
      title: '搜索结果'
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载图标
    setTimeout(function () {
      wx.stopPullDownRefresh(); //停止加载
      wx.hideNavigationBarLoading(); //隐藏加载icon
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  /*
  onReachBottom: function () {
    this.searchResult();
  },

  /**
   * 用户点击右上角分享
   */
  /*
  onShareAppMessage: function () {

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
  },
  searchResult() {
    var that = this;
    var keyWord = that.data.keyWord;
    var goodLastId = that.data.goodLastId;
    var resultList = that.data.resultList;
    var goodSearchLength = that.data.goodSearchLength;
    var isGoodSearchShow = that.data.isGoodSearchShow;
    console.log(keyWord, goodLastId);
    
    var url = app.globalData.huanbaoBase + 'showgoodsbykeyword.php';
    //微信请求方式的写法
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000,
    })
    wx.request({
      url,
      method: 'POST',
      data: {
        keyWord: keyWord,
        lastId: goodLastId,
      },
      header: { 'content-type': 'application/x-www-form-urlencoded ' },
      success(res) {
        console.log(res.data.data);
        var data = res.data.data;
        if (data == undefined) {
          wx.hideToast();
          that.setData({
            isGoodSearchShow: true
          })
          return
        }
        
        that.handleData(res.data.data);
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  handleData(data) {
    var goodLastId = this.data.goodLastId;
    var goodSearchLength = this.data.goodSearchLength;
    console.log(goodSearchLength, goodLastId);
    goodSearchLength = data.length;
    var resultList = this.data.resultList ;

    this.setData({
      goodLastId: data[goodSearchLength-1].goodid,
      goodSearchLength: data.length
    })
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
  toBookDetail(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + id, //跳转到商品详情页
    })
  }

  */

})