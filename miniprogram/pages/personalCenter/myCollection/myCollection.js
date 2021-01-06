// pages/personalCenter/myCollection/myCollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:false,
    userId: 0,
    productId: 1,
    thingInfo: { 
      productId: 1, 
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
          },
          fail(err) {
            console.log(err);
          }
        })
      }
    })
  },


  toProductDetail(e) {
    var productId = e.currentTarget.dataset.id;
    console.log( productId);
    wx.setStorage({
      data: productId,
      key: 'productId',
    })
    wx.redirectTo({
      url: '../../../pages/show/show',
    })
  },
})