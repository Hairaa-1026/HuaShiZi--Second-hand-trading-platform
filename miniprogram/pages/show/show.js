// index/details.js
Page({
  data: {
    is_shoucang:0,
    thingInfo: { 
      thingId: 1, 
      postType:"出售",
      diliveryType:"面交",
      thingImage: '',
      thingName: "现代软件工程",
      thingType:  "教材",
      thingConditions: "全新",
      thingConditionIndex: 0,
      thingPrice: "999",
      thingCampus: "中北校区",
      thingCampusIndex: 0,
      thingPhoneNumber: "8888888",
      thingDescribe: "超级无敌棒棒棒的书！",
    },

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
    pjDataList: [{ headpic: '/images/profilePhotos/exm3.jpg', author: '芳芳', add_time: '2021-01-01', content:'请问看完这本书可以让我过软件工程吗'},
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
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
})