// pages/chat/chat.js
var datachat=require('../../data/data_chat.js')
Page({
   
    /**
     * 页面的初始数据
     */
    data: {
        feed_length:0,
        feed: [],
        indicator_dots: true, //是否显示面板指示点
        autoplay: true, //是否自动切换
        interval: 5000, //自动切换时间间隔
        circular: true, //是否采用衔接滑动
        duration: 500, //滑动动画时长
        indicator_color: "D3D3D3", //指示点颜色
        indicator_active_color: "white", //当前选中的指示点颜色
        imgUrls: ["../../images/4.jpg", "../../images/8.jpg", "../../images/12.jpg"], //轮播图地址
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var feed_data = datachat.index.data;
        this.setData({
            feed:feed_data,
            feed_length: feed_data.length
          });
        console.log(feed_data);
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