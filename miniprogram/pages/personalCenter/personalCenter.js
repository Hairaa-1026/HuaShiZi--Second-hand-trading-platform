// pages/personalCenter/personalCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    stuNumber:'',
    userId:'',
    userInfo: {
      nickName: '登录更多精彩',
      avatarUrl: '', 
    },
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //用户已经授权过
            }
          })
        }
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
    var nickName = 'userInfo.nickName';
    var avatarUrl = 'userInfo.avatarUrl';
    wx.getStorage({  //异步获取缓存值stuNumber
      key: 'stuNumber',
      success: function (res) { 
        that.setData({
          stuNumber: res.data
        })
        console.log(that.data.userId);
      }
    }),
    wx.getStorage({  //异步获取缓存值userId
      key: 'userId',
      success: function (res) { 
        that.setData({
          userId: res.data
        })
        console.log(that.data.userId);
      }
    })
    //get缓存值用户名字，并设置
    try {
      var value = wx.getStorageSync('nickName')
      console.log(value);
      if (value) {
        that.setData({
          [nickName]: value
        })
      }
    } catch (e) {
      // Do something when catch error
    }

   //get缓存值用户头像，并设置
   wx.getStorage({
     key: 'avatarUrl',
     success: function(res) {  
       that.setData({
        [avatarUrl]: res.data
       })
     },
   })

  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  onPullDownRefresh(){
    wx.setNavigationBarTitle({
      title: '我的信息'
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载图标
    setTimeout(function () {
      wx.stopPullDownRefresh(); //停止加载
      wx.hideNavigationBarLoading(); //隐藏加载icon
    }, 2000)
  },
  bindGetUserInfo: function(e) {
    var that = this;
    var nickName = that.data.userInfo.nickName;
    var avatarUrl = that.data.userInfo.avatarUrl;
      wx.showModal({
        title: '提示',
        content: '请授权登录',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateBack({
              delta: 1
            })
       //用户按了允许授权按钮
       var userInfo = e.detail.userInfo;
       console.log(userInfo)
      that.setData({
        nickName: userInfo.nickName
      })
      that.setData({
        avatarUrl : userInfo.avatarUrl
      })
      try {//同步设置nickName
        wx.setStorageSync('nickName', userInfo.nickName)
      } catch (e) {
      }
      wx.setStorage({
        key: 'avatarUrl',
        data: userInfo.avatarUrl,
      })
      that.onLoad();
      that.onShow();
          } else {
            console.log('用户点击取消')
          }
        }
      })


  },
  bindClear: function (e) {
    var that = this;
    var nickName = 'userInfo.nickName';
    var avatarUrl = 'userInfo.avatarUrl';
   
    wx.showModal({
      title: '提示',
      content: '是否清除账户数据',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateBack({
            delta: 1
          })
     //用户按了允许按钮
    try {//同步设置nickName
      wx.setStorageSync('nickName', '')
    } catch (e) {
    }

    wx.setStorage({
      key: 'stuNumber',
      data: '',
    })
    wx.setStorage({
      key: 'userId',
      data: '',
    })
    wx.setStorage({
      key: 'phone',
      data: '',
    })
    wx.setStorage({
      key: 'campus',
      data: '',
    })

    wx.setStorage({
      key: 'avatarUrl',
      data: '',
    })
    that.setData({
      [nickName]: '个人信息',
      [avatarUrl]: ''
    })

    wx.showModal({
      title: '提示',
      content: '账号已注销',
      success: function(){
        that.onLoad();
        that.onShow();
      }
    })
        } else {
          console.log('用户点击取消')
        }
      }
    })





  },
  bindLeave: function (e) {
    var that = this;
    var nickName = 'userInfo.nickName';
    var avatarUrl = 'userInfo.avatarUrl';
   
    try {//同步设置nickName
      wx.setStorageSync('nickName', '')
    } catch (e) {
    }
    /*
    wx.setStorage({
      key: 'stuNumber',
      data: '',
    })
    wx.setStorage({
      key: 'userId',
      data: '',
    })
    */
    wx.setStorage({
      key: 'avatarUrl',
      data: '',
    })
    that.setData({
      [nickName]: '个人信息',
      [avatarUrl]: ''
    })

    wx.showModal({
      title: '提示',
      content: '退出账号成功',
      success: function(){
        that.onLoad();
        that.onShow();
      }
    })
  },

})
