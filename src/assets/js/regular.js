export const regularObj = {
  phoneVa: "^1\d{10}$", //手机号
  telephoneVa: "^(\(0\d{2,3}\)|0\d{2,3}-|\s)?\d{7,8}$", //座机
  allPhoneVa: "(^(\(0\d{2,3}\)|0\d{2,3}-|\s)?\d{7,8}$)|^1\d{10}$", //所有电话号吗
  onlyNumVa: "^[1-9]/d*|0$", //正整数
  floatNumVa: "^[1-9]/d*/./d*|0/./d*[1-9]/d{2,3}$", //正带小数的浮点数,默认为2-3位
  characterVa: "^[A-Za-z]+$", //匹配26英文字母
  chineseVa: "^[/u4e00-/u9fa5]+$", //匹配中文
  emailVa: "/w+([-+.]/w+)*@/w+([-.]/w+)*/./w+([-.]/w+)*", //匹配邮箱
  idCardVa: /^([1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2})$/, //18或者15位身份证
  price: "/^(\-|\+)?\d+(\.\d{1,2})?$/", //数值且最多两位小数的数值
  tonnage: "/^(\-|\+)?\d+(\.\d{1,3})?$/", //数值且最多三位小数的数值
  mile: "/^(\-|\+)?\d+(\.\d{1,1})?$/" //数值且最多一位小数的数值
}
