  // 导入Ajax的promise封装函数
  import fetch from '../../utils/fetch.js';
  // 导入runtime.js,让微信小程序支持async和await
  import regeneratorRuntime from "../../utils/runtime.js";
  Page({
    /**
     * 页面的初始数据
     */
    data: {
      // 轮播图数据
      imageList: [],
      categories: []
    },
    // 获取轮播图数据
    async getimageList() {
      let res = await fetch({
        url: 'https://locally.uieee.com/slides'
      });
      this.data.imageList = res.data;
      this.setData(this.data);
    },
    // 获取九宫格数据
    async getcategories() {
      let res = await fetch({
        url: 'https://locally.uieee.com/categories'
      });
      this.data.categories = res.data;
      this.setData(this.data);
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
      // 获取轮播图数据
      this.getimageList()

      //获取九宫格数据
      this.getcategories()

    }
  })