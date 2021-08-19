import Taro from '@tarojs/taro'

export const request = ({url, method = 'get', data = {} }) => {
  const baseUrl = 'http://192.168.56.1:8000'
  return new Promise((resolve, reject) => {
    Taro.request({
      url: baseUrl + url,
      method: method,
      data: data,
      success: (res)=>{
        if(res.statusCode === 200){
          const resData = res.data
          if(resData.code === 1010){
            Taro.navigateTo({
              url: '/pages/login/index'
            })
          }
          resolve(resData)
        }
      },
      fail: (err)=>{
        reject(err)
      }
    })
  })
}
