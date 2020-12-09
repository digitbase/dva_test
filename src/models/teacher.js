import request from "../utils/request";
import { routerRedux } from "dva/router";

let teacher = {
  namespace: "teacher",
  state: {
    isLogin: false,
  },
  effects: {
    *doLogin({ payload }, { select, put, call }) {
      let res = yield call(
        request("api/login.php", { data: payload, method: "get" })
      );
      console.log(res.data);
      if (res.data.code == 1) {
        window.sessionStorage.setItem(
          "user",
          JSON.stringify(res.data.data.user)
        );

        yield put({ type: "changeLogin", payload: { isLogin: true } });
        yield put(routerRedux.push("/home/list"));
      } else {
        return alert("user password eror");
      }
    },
  },
  reducers: {
    changeLogin(state, { payload }) {
      console.log("changeLogin");
      return {
        isLogin: payload.isLogin,
      };
    },
  },
};

export default teacher;
