// index/details.js
Page({
 
  /**
   * 页面的初始数据
   */
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
      {'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'},
      {'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
      {'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
      {'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
      ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    pjDataList: [{ headpic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', author: '小明', add_time: '2021-01-01', content:'请问看完这本书可以让我过软件工程吗'},
      { headpic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', author: '小红', add_time: '2021-01-01', content: '要买要买！私聊' }
    ],//评价数据
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
      current: current, // 当前显示图片的http链接  
      urls: imglist// 需要预览的图片http链接列表  
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
})