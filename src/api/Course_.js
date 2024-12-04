import course from '@/data/course.json'
import data from '@/data/course.js'
export default {
  ajaxCourse (cb) {
    setTimeout( function(){
      cb(course.data)
    } ,10)
  },
  getList_test (cb) {
    setTimeout( function(){
      cb(data.data)
    } ,10)
  },
  ajaxCourse3 (cb) {
    setTimeout( function(){
      cb(data.teacher)
    } ,10)
  },
    // 通过导航栏的分类来获取数据列表
    ajaxListByCategory(cb,{potwords}){
      setTimeout(function(){
        let result = [];
        switch (potwords) {
          case '':
            result = List.data;
            break
          case '推荐':
            result = List.data.filter( function(item){
              return item.isRec;
            })
            break
          case '热点':
            result = List.data.filter( function(item){
              return item.isHot;
            })
            break
          default:
            result = List.data.filter( function(item){
              return item.category === potwords;
            })
            break
        }
        cb(result);
      },10)
    },

}

