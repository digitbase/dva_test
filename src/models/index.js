/* eslint-disable require-yield */
//import request from "../utils/request.js";

import request from "../utils/request.js";

let index = {
  namespace: "index",
  state: { num: 1 },
  effects: {
    // 异步action
    *changeNum({ payload }, { select, put, call }) {
      {
        payload: {
          num: 5;
        }
      }

      let res = yield call(request("api/search_list.php", { name: "test" }));
      console.log(res);

      //return "2";
    },
  },
  reducers: {
    addNum(state, { payload }) {
      return {
        // 返回一个新值,值不可变性
        num: state.num + payload.num,
      };
    },
  },
};

export default index;
