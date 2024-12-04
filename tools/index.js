function f_ChangeToJson2() {
    //获得文本框数据
    var sql = $("#txtStart").val();
    //通过正则表达式找到换行符
    //[\r]/g在js中是正则表达式对象，在两个“/”之间的部分是表达式的主体
    //表示要匹配的字符串；“g”表示在整个字符串中搜索。所以这段代码中要匹配的字符串是“[\r]”所代表的字符串，
    //其中“[]”表示字符的可选范围，比如[0-9]表示一位范围在0-9之间的数字，至于\r和\n他们都是具有特殊意义的“保留字”
    //前者表示换行符，后者表示回车符。所以第二行的意思就是把json中的换行符和回车符全部替换成空字符串
    var sqlSpit = sql.replace(/[\r\n]/g, "@");
    var sqlList = sqlSpit.split('@');
    var sqlChange = "{\n";
    for (var i = 0; i < sqlList.length; i++) {
        //通过正则表达式找到制表符
        var l = sqlList[i].trim().replace(/[\t]/g, "#");
        var ll = l.split('#');
        //不是最后一行
        if (i < sqlList.length - 1) {
            //包含制表符
            if (ll.length == 2) {
                sqlChange += "\"" + ll[0].replace(/\s+/g, '') + "\": \"" + ll[1] + "\",\n";
            } //不包含制表符
            else sqlChange += "\"" + sqlList[i].trim().replace(/\s+/g, '') + "\": \"1\",\n";
        } //是最后一行
        else {
            //包含制表符
            if (ll.length == 2) {
                sqlChange += "\"" + ll[0].replace(/\s+/g, '') + "\": \"" + ll[1] + "\"\n";
            } //不包含制表符
            else sqlChange += "\"" + sqlList[i].trim().replace(/\s+/g, '') + "\": \"1\"\n";
        }
    }
    sqlChange = sqlChange + "}";
    $("#txtEnd").val(sqlChange);
}

function f_ChangeToJavaSql() {
    //获得文本框数据
    var sql = $("#txtStart").val();
    //通过正则表达式找到换行符
    var sqlSpit = sql.replace(/[\r\n]/g, "@");
    var sqlList = sqlSpit.split('@');
    var sqlChange = "StringBuilder sql = new StringBuilder();\n";
    for (var i = 0; i < sqlList.length; i++) {
        if (sqlList[i].indexOf(",") > 0) {
            sqlChange += "sql.append(\"" + sqlList[i].trim().replace(/\s+/g, ' ') + "\");\n";
        } else {
            sqlChange += "sql.append(\"" + sqlList[i].trim().replace(/\s+/g, ' ') + " \");\n";
        }
    }
    $("#txtEnd").val(sqlChange);
}