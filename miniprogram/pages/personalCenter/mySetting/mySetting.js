Component({
  data: {


    stuNumber:'',
    userId:'',
    userInfo: {
      nickName: '',
      avatarUrl: '', 
    },

      userName:'',
      phone:'',
      campus:'',
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
        }
      }),
      wx.getStorage({  //异步获取缓存值nickName
        key: 'nickName',
        success: function (res) {
          that.setData({
            [nickName]: res.data
          })
        }
      })

   //get缓存值用户头像，并设置
   wx.getStorage({
    key: 'avatarUrl',
    success: function(res) {  
      that.setData({
       [avatarUrl]: res.data
      })
    }
  })

    },

      bindStudentCardImageInput: function() { //学生卡图片选择
        var that = this;
        wx.chooseImage({
          count: 1,
          sourceType: ['album', 'camera'],
          success: function(res) {
            var stuCardPhoto = res.tempFilePaths;
            that.setData({
                stuCardPhoto: stuCardPhoto
            })
          },
        })
      },
      
      bindCampusInput: function(e) { //校区
        this.setData({
          campus: e.detail.value
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
            Phone: e.detail.value
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
        var userName = 'aa';  //that.data.userName;
        var phone = 'aa'; //that.data.phone;
        var campus = 'Putuo';  //that.data.campus;
        var stuCardPhoto = '../../../images/collections/exm1.jpg';  //that.data.stuCardPhoto;
        var stuNumber = '10185102210';  //that.data.stuNumber;
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
            if (res.data.data.userId) {
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
                  wx.redirectTo({
                    url: 'pages/personalCenter/personalCenter',
                  })

                }
              })
              try {
                wx.setStorageSync('stuNumberSync', stuNumber)
              } catch (e) {
              }
            } else if (res.data === 0) {
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