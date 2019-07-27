// pages/detail/detail.js
import fetch from '../../utils/fetch.js'
import regeneratorRuntime from "../../utils/runtime.js";
Page({
  data: {
    id: '',
    details: {}
  },
  onLoad(options) {
    this.data.id = options['id'];
    this.setData(this.data);
  },
  async onShow() {
    let res = await fetch({
      url: 'https://locally.uieee.com/shops/' + this.data.id
    });
    this.data.details = res.data;
    this.setData(this.data);
  }
})