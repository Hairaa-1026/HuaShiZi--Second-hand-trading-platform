// pages/search/search.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放数据
    thingType: ["服装", "美妆", "视频", "卡券", "借用", "教材","其它","护肤"],

    poster:"嗨嗨",
    productId: 0,
    classifier: '', //接收index传过来的关键字类型

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
    var classifier = that.data.classifier;
     wx.getStorage({
       key: 'classifier',
       success:function(res){
         that.setData({
          classifier:res.data,
         })
         classifier=res.data;
         console.log(classifier);
         console.log("ssssssssss");

         wx.request({
          url: 'http://localhost/searchByCategory.php',
          data:{
            productCategory:classifier,
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
     console.log(classifier);
     
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
  },
})