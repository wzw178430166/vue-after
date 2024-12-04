import News from '@/data/News.json'
import List from '@/data/List.json'

export default {
  ajaxNews(cb, { id }){
    setTimeout(function(){
      let profile = List.data.find(function(item){ return item.id === Number(id)});
      let detail = News.data.find(function(item){ return item.id === Number(id)});
      cb(Object.assign(profile,detail));
    },10)
  }
}
