//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
      open:false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    style_cooking: [
        "川", "湘", "鲁", "粤", "苏", "闵", "浙", "徽"
    ],
    chefs: [
      {
        id: 0,
        photo: "../../images/9.jpg",
        average: 15,
        chefphoto: "../../images/chef_1.jpg",
        skill: "川"
      },
      {
        id: 1,
        photo: "../../images/9.jpg",
        average: 15,
        chefphoto: "../../images/chef_1.jpg",
        skill: "湘"
      },
      {
        id: 2,
        photo: "../../images/9.jpg",
        average: 15,
        chefphoto: "../../images/chef_1.jpg",
        skill: "鲁"
      }
    ]
  },
  tap_ch: function(e) {
        if (this.data.open) {
            this.setData({
                open: false
            });
        } else {
            this.setData({
                open: true
            });
        }
    },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  scan() {
    wx.scanCode({
      success: (res) => {
        console.log("扫码结果");
        console.log(res);
        this.setData({
          img: res.result
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },
  //获取当前位置的经纬度
  loadInfo: function(){
  wx.getLocation({
    type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    success: function (res) {
      var latitude = res.latitude//维度
      var longitude = res.longitude//经度
      console.log(res);
    }
  });
  }
})
