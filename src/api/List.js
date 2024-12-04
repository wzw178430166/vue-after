import List from '@/data/List.json'


export default {

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



  // 通过搜索关键词来获取数据列表
  ajaxListBySearchword(cb,{searchword}){
    setTimeout(function(){
      cb(List.data.filter(function(item){
        return item.title.indexOf(searchword) != -1
      }))
    },10)

  }
}
