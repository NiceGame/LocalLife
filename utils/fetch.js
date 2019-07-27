function fetch(options = {}){
  return new Promise( (resolve,reject)=>{
    wx.request({
      url: options.url,
      method: options.method,
      dataType: options.dataType,
      success:function(res){
        resolve(res);
      },
      fail:function(error){
        reject(error);
      }
    })
  })
}
export default fetch;