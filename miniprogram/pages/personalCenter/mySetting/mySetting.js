Component({
  data: {
    stuNumber:'',
    userId:0,
    userInfo: {
      nickName: '',
      avatarUrl: '', 
    },

    status:false,
      userName:'',
      phone:'',
      campus:['中北校区' , '闵行校区'],
      campus1:['Putuo' , 'Minhang'],
      campusIndex:0,
      stuCardPhoto: '',

      showTopTips: false,
      buttonLoading:false,
      
      rules: [ {
          name: 'stuCardPhoto',
          rules: {required: true, message: '图片必填'},
      }, {
          name: 'campus',
          rules: [{required: true, message: '校区必填'}, {campus: true, message: '校区格式不对'}],
      }, {
          name: 'stuNumber',
          rules:[{required: true, message: '学号必填'},{stuNumber:true,message:'学号格式不对'}],
      }]
  },
  methods: {
    onShow: function () {
      var that = this;
      var stuNumber = that.data.stuNumber;
      var userId = that.data.userId;
      var nickName = that.data.nickName;
      var phone = that.data.phone;
      wx.getStorage({  //异步获取缓存值stuNumber
        key: 'stuNumber',
        success: function (res) {
          that.setData({
            stuNumber: res.data
          })
  
        }
      })
      wx.getStorage({  //异步获取缓存值userId
        key: 'userId',
        success: function (res) {
          that.setData({
            userId: res.data
          })
          if (res.data==''){
            that.setData({
              status: false
            })
          }
          else{
            that.setData({
              status: true
            })

          }
        }
      })
      wx.getStorage({  //异步获取缓存值stuNumber
        key: 'phone',
        success: function (res) {
          that.setData({
            phone: res.data
          })
  
        }
      })

     //get缓存值用户名字，并设置
    try {
      var value = wx.getStorageSync('nickName')
      console.log("aaa");
      console.log(value);
      if (value) {
        that.setData({
          [nickName]: value
        })
      }
    } catch (e) {
      // Do something when catch error
    }



    },

      bindStudentCardImageInput: function() { //学生卡图片选择
        var that = this;
        wx.chooseImage({
          count: 1,
          sourceType: ['album', 'camera'],
          success: function(res) {
            var stuCardPhoto = res.tempFilePaths;
            console.log(stuCardPhoto);
            console.log("get it");
            that.setData({
                stuCardPhoto: stuCardPhoto
            })
          },
        })
      },
      
      bindCampusInput: function(e) { //校区
        this.setData({
          campusIndex: e.detail.value
        });
        //console.log(this.data.campus);
      },
      bindStuNumberInput: function(e) { //学号
        this.setData({
            stuNumber: e.detail.value
        })
      },
      bindPhoneInput: function(e) { //电话号
        this.setData({
            phone: e.detail.value
        })
      },
      bindAgreeChange: function (e) {
          this.setData({
              isAgree: !!e.detail.value.length
          });
      },

      bindSubmit: function () {
        var that = this;
        this.setData({
          buttonLoading: true
        })
        var that = this;
        var userName = wx.getStorageSync('nickName')
        console.log('test:'+userName);
        var phone =that.data.phone;
        var campus = that.data.campus[that.data.campusIndex];
        var stuNumber =that.data.stuNumber;
        var stuCardPhoto = 'a'  ;//that.data.stuCardPhoto;
        console.log(stuCardPhoto);
        var url = 'http://localhost/personalAuthentication.php';
        wx.request({
          url,
          data: {
            userName:userName,
            phone:phone,
            campus:campus,
            stuCardPhoto: stuCardPhoto,
            stuNumber:stuNumber,
          },
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded '
          },
          success: function (res) {
            console.log(res);
            if (res.data.data) {
              wx.showModal({
                title: '提示',
                content: '身份验证成功',
                success: function () {
                  wx.navigateBack({
                    delta: 1
                  }),
                  wx.setStorage({
                    key: "stuNumber",// 异步缓存学号
                    data: stuNumber //学号
                  })
                  wx.setStorage({
                    key: "userId",// 异步缓存ID
                    data: res.data.data.userId
                  }),
                  wx.setStorage({
                    key: "phone",// 异步缓存电话号码
                    data: phone
                  }),
                  wx.setStorage({
                    key: "campus",// 异步缓存校区
                    data: campus
                  }),
                  wx.redirectTo({
                    url: 'pages/personalCenter/personalCenter',
                  })

                }
              })
              try {
                wx.setStorageSync('stuNumberSync', stuNumber)
              } catch (e) {
              }
            } else {
              wx.showModal({
                title: '提示',
                content: '身份验证失败,请重试！',
                success: function () {
                  wx.redirectTo({
                    url: './mySetting',
                  })
                }
              });
            }
          },
          fail: function (res) {
            console.log(JSON.stringify(res));
            wx.showModal({
              title: '提示',
              content: '身份验证失败,请重试！',
              success: function () {
                wx.redirectTo({
                  url: './mySetting',
                })
              }
            });
    
          },
        })
    
      },

  }
});