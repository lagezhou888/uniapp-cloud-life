'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  let food = await db.collection("food").get()
  console.log(food.data)
  return {
	  code:200,
	  msg:'数据获取成功',
	  data:food.data
  }
};
