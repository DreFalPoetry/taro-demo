import {request} from './request'

export const getBanners = function(){
  return request({
    url: '/api/user',
  })
}
