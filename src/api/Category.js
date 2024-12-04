import Category from '@/data/Category.json'

export default {
  ajaxCategories (cb) {
    setTimeout( function(){
      cb(Category.data)
    } ,10)
  }

}

