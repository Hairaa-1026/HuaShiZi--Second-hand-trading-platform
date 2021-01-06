// pages/personalCenter/myCollection/myCollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:0,
    thingInfo: { 
      product_id: 1, 
      thingStatus:"",
      thumbnail: '../../../images/collections/exm1.jpg',
      title: "",
      discription: "",
    },
    thingData:[
      { 
        product_id: 1, 
        thingStatus:"",
        thumbnail: '../../../images/collections/exm1.jpg',
        title: "iPad Air4 天蓝色 64G",
        discription: '超盖泡面神器！',
      },
      { 
        product_id: 2, 
        thingStatus:"",
        thumbnail: '../../../images/collections/exm2.jpg',
        title: "李斯丹妮签名照",
        discription: "乘风破浪的姐姐李四蛋亲笔签名，拥有它就拥有了姐姐的爱！",
      },
      { 
        product_id: 3, 
        thingStatus:"",
        thumbnail: '../../../images/collections/exm1.jpg',
        title: "现代软件工程",
        discription: "超级无敌棒棒棒的书！",
      },
    ],
    collectionList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    var userId = that.data.userId;
    wx.getStorage({  //异步获取缓存值studentId
      key: 'stuNumber',
      success: function (res) {
        that.setData({
          stuNumber: res.data
        })
      }
    }),
    wx.getStorage({  //异步获取缓存值userId
      key: 'userId',
      success: function (res) {
        that.setData({
          userId: res.data
        }),
        userId=res.data;
        console.log("data");
        console.log(res.data);
        wx.request({
          url:'http://localhost/viewMyCollection.php',
          method: 'POST',
          data: {
            userId:res.data,
          },
          header: { 'content-type': 'application/x-www-form-urlencoded ' },
          success(res) {
            that.setData({
              collectionList:res.data.data,
            });
            console.log(res.data.data);
          },
          fail(err) {
            console.log(err);
          }
        })
    
      }
    })

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})