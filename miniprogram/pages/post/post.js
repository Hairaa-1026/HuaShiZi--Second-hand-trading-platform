// post.js
var Bmob = require('../../utils/bmob.js');
var util = require('../../utils/util.js')
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //导航栏的数据,现取消
    Quit:false ,
    postThing: true,
    thingsList: false,

    userId:0,
    nickName:'',
    stuNumber:'',

    productId:0,

    //物品发布的数据
    postType:["出售","求购"],
    postType1:["sell","buy"],
    postTypeIndex: 0,
    diliveryType:["面交","邮寄"],
    diliveryType1:['SelfPick','Delivery'],
    diliveryTypeIndex: 0,

    thingImage: '../../images/tabBar/post.jpg',
    thingName: '',
    thingType: ["服装", "美妆", "视频", "卡券", "借用", "教材","其它","护肤"],
    thingTypeIndex: 0,
    thingConditions: ['全新', '几乎全新', '九成新', '八成新', '五成新', '五成新以下'],
    thingConditions1:['100','95','90','80','50'],
    thingConditionsIndex: 0,
    thingPrice: 0,
    thingCampus: ["中北校区", "闵行校区"],
    thingCampus1:['Putuo' , 'Minhang'],
    thingCampusIndex: 0,
    thingPhoneNumber: '',
    thingDescribe: '',
    buttonLoadingThing: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that=this;
    wx.getStorage({  //异步获取缓存值userId
      key: 'userId',
      success: function (res) {
        that.setData({
          userId: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    var stuNumber = that.data.stuNumber;
    var nickName = that.data.nickName;
    wx.getStorage({
      key: 'stuNumber',
      success: function(res) {
        that.setData({
          stuNumber: res.data
        })
      },
    }),
    wx.getStorage({
      key: 'nickName',
      success: function(res) {
        that.setData({
          nickName: res.data
        })
      },
    })
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.setNavigationBarTitle({
      title: '消息发布'
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
  onReachBottom: function() {

  },
  //导航栏的响应事件
  chooseLeave: function(e) {
    var that = this;
    that.setData({
      leave: true,
      postThing: false,
      thingsList: false
    })
  },
  choosePostThing: function(e) {
    var that = this;
    that.setData({
      leave: false,
      postThing: true,
      thingsList: false
    })
  },
  chooseList: function(e) {
    var that = this;
    that.setData({
      leave: false,
      postThing: false,
      thingsList: true
    })
  },


  //响应事件
  bindPostTypeInput: function(e) { //交易类别
    this.setData({
      postTypeIndex: e.detail.value
    })
  },
  bindDiliveryTypeInput: function(e) { //取货方式
    this.setData({
      diliveryTypeIndex: e.detail.value
    })
  },

  bindThingImageInput: function() { //商品图片选择
    var that = this;
    wx.chooseImage({
      count: 1,
      sourceType: ['album', 'camera'],
      success: function(res) {
        var thingImage = res.tempFilePaths;
        that.setData({
          thingImage: thingImage
        })
      },
    })
  },
  bindThingNameInput: function(e) { //商品名字
    this.setData({
      thingName: e.detail.value
    })
  },
  bindThingTypeInput: function(e) { //商品类型
    this.setData({
      thingTypeIndex: e.detail.value
    })
  },                  
  bindThingConditionsInput: function(e) { //商品成色
    this.setData({
      thingConditionsIndex: e.detail.value
    })
  },
  bindThingPriceInput: function(e) { //商品价格
    this.setData({
      thingPrice: e.detail.value
    })
  },
  bindThingCampusInput: function(e) { //校区
    this.setData({
      thingCampusIndex: e.detail.value
    })
  },
  bindThingPhoneNumberInput: function(e) { //联系电话
    this.setData({
      thingPhoneNumber: e.detail.value
    })
  },
  bindThingDescribeInput: function(e) { //商品描述
    this.setData({
      thingDescribe: e.detail.value
    })
  },

  //发布物品的响应事件
  bindSubmitThing: function() {
    var that = this;
    var stuNumber = that.data.stuNumber;
    if (!stuNumber) {
      wx.showModal({
        title: '提示',
        content: '请验证您的学生身份',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateTo({
              url: '../personalCenter/mySetting/mySetting',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      this.setData({
        buttonLoadingThing: true
      })
      var userId=that.data.userId;
      var postTypeIndex = that.data.postTypeIndex; //交易类型索引
      var postType = that.data.postType1[postTypeIndex]; //交易类型
      var diliveryTypeIndex = that.data.diliveryTypeIndex; //运送方式索引值
      var diliveryType =that.data.diliveryType1[diliveryTypeIndex]; //运送方式

      var thingImage = 'images/collections/exm1.jpg'; //that.data.thingImage; //图片
      var thingName = that.data.thingName; //名字
      var thingTypeIndex = that.data.thingTypeIndex; //物品类型索引值
      var thingType = that.data.thingType[thingTypeIndex]; //物品类型

      var thingConditionsIndex = that.data.thingConditionsIndex; //成色索引值
      var thingConditions =that.data.thingConditions1[thingConditionsIndex]; //成色

      var thingCampusIndex = that.data.thingCampusIndex; //校区索引值
      var thingCampus = that.data.thingCampus1[thingCampusIndex]; //校区
      var thingDescribe = that.data.thingDescribe || '无备注或描述'; //备注
      //var thingPhoneNumber = that.data.thingPhoneNumber; //电话
      var thingPrice = that.data.thingPrice; //价格
      var stuNumber = that.data.stuNumber;
      //var nickName = that.data.nickName;
      var url = 'http://localhost/' + 'addProduct.php';
      //var urlImg = app.globalData.huanbaoBase + 'thingimg.php';
      wx.request({
        url,
        data: {
          userId:userId,
          type: postType,
          thumbnail: thingImage,
          title: thingName,
          category: thingType,
          quality: thingConditions,
          campus: thingCampus,
          pickupWay:diliveryType,
          description: thingDescribe,
          price: thingPrice,
        },
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          console.log(res);
          if(res.data){
          var productId = res.data.data.productId;
          console.log(productId);
          that.setData({
            productId: res.data.data.productId,
          })
              wx.showToast({
                title: '发布成功',
                icon: 'succes',
                duration: 2500,
                mask: true
              })
              that.setData({
                buttonLoadingThing: false,
                thingImage: '',
                thingName: '',
                thingDescribe: '',
                thingPrice: '',
              })
              wx.setStorage({
                data: res.data.data.productId,
                key: 'productId',
              })
              wx.redirectTo({
                url: '../show/show',
              })
          }
          else{
            wx.showToast({
              title: '发布失败',
              icon: 'loading',
              duration: 2000
            })
            that.setData({
              buttonLoadingThing: false
            })
          }
        },
        fail: function(res) {
          console.log(JSON.stringify(res));
          wx.showToast({
            title: '发布失败',
            icon: 'loading',
            duration: 2000
          })
          that.setData({
            buttonLoadingThing: false
          })
        },
      })
    }
  },
})