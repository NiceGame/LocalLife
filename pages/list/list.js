// pages/list/list.js
import fetch from '../../utils/fetch.js'
import regeneratorRuntime from "../../utils/runtime.js";
Page({
  data: {
    id: '',
    current: 1,
    pagesize: 10,
    shopList: [],
    status: 0,
    tip: ''
  },
  onLoad(options) {
    this.data.id = options['id'];
    this.setData(this.data);
  },
  onShow() {
    this.getshopList();
  },
  async onReady(){
    let res = await fetch({ url:'https://locally.uieee.com/categories/'                         +this.data.id});
    wx.setNavigationBarTitle({title:res.data.name});
  },
  // 触底监听事件
  onReachBottom() {
    this.data.current++;
    this.setData(this.data);
    this.getshopList();
  },
  async getshopList() {
    let {
      id,
      current,
      pagesize,
      shopList
    } = this.data;
    let res = await fetch({
      url: 'https://locally.uieee.com/categories/' + id + '/shops?_page='                     +current + '&_limit=' + pagesize
    });
    this.data.shopList = [...shopList, ...res.data];
    this.data.status = res.data.length;
    this.setData(this.data);
    if(res.data.length == 0 ){
      this.data.tip = '该功能尚未上线，期待中。。。';
      this.setData(this.data);
    }
  },
  // 下拉刷新
  onPullDownRefresh(){
    this.data.current = 1;
    this.data.shopList = [];
    this.setData(this.data);
    this.getshopList();
  }

})