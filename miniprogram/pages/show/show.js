// index/details.js
Page({
  data: {
    is_shoucang:0,
    issuer:'鸿雁',
    status:false,
      userId: 0,
      type:"出售",
      pickupWay:"面交",
      thumbnail: '',
      title: "现代软件工程",
      quality: "全新",
      price: "999",
      campus: "中北校区",
      description: "超级无敌棒棒棒的书！",
      thingPhoneNumber: "13879447821",
      thingType:  "教材",
      /*
      thingId: 1, 
      thingConditionIndex: 0,
      thingCampusIndex: 0,
      */

    thingImg: [
      {'img': '/images/shows/book1.jpg'},
      {'img': '/images/shows/book2.jpg' },
      {'img': '/images/shows/book3.jpg' },
      {'img': '/images/shows/book4.jpg' },
      ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    pjDataList: [
      { headpic: '/images/profilePhotos/exm3.jpg', author: '芳芳', add_time: '2021-01-01', content:'我好喜欢！'},
      { headpic: '/images/profilePhotos/exm2.jpg', author: '海海', add_time: '2021-01-01', content: '要买要买！私聊' }
    ],
  },
 
 
  previewImage: function (e) {
    var current = e.target.dataset.src;
    var href = this.data.imghref;
    var thingimg = this.data.thing_img;
    var imglist = [];
    for (var i = 0; i < thingimg.length; i++) {
      imglist[i] = href + thingimg[i].img
    }
    wx.previewImage({
      current: current, 
      urls: imglist 
    })
  },

  bindtoCollection:function(){
    
  },
 
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function () {
    var that = this;
    var productId = that.data.productId;
    console.log("test1");
    wx.getStorage({  //异步获取缓存值studentId
      key: 'stuNumber',
      success: function (res) {
        that.setData({
          stuNumber: res.data
        })
      }
    }),
    console.log("test1");
    wx.getStorage({  //异步获取缓存值
      key: 'productId',
      success: function (res) {
        that.setData({
          productId: res.data
        }),
        productId=res.data;
        console.log("test1");
        wx.request({
          url:'http://localhost/viewProductDetails.php',
          method: 'POST',
          data: {
            productId:res.data,
          },
          header: { 'content-type': 'application/x-www-form-urlencoded ' },
          success(res) {
            that.setData({
              issuer:res.data.data[0].creatorId,
              type:res.data.data[0].type,
              pickupWay:res.data.data[0].pickupWay,
              thumbnail: res.data.data[0].thumbnail,
              title: res.data.data[0].title,
              quality: res.data.data[0].quality,
              price:res.data.data[0].price,
              campus: res.data.data[0].campus,
              description: res.data.data[0].description,
              
              //thingPhoneNumber:res.data.data.,
              //thingType: res.data.data.,
            });
            console.log("test");
            console.log(res.data.data[0].title);
          },
          fail(err) {
            console.log(err);
          }
        })
    
      }
    })

  },




})