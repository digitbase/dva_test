import request from "../utils/request";
import { routerRedux } from "dva/router";

let teacher = {
  namespace: "teacher",
  state: {
    isLogin: false,
  },
  effects: {
    *search({ payload }, { select, put, call }) {
      console.log("search", payload);

      payload.type = "teachers";
      var res = yield call(
        request("api/login.php", {
          params: payload,
          method: "post",
        })
      );

      yield put({
        type: "update",
        payload: {
          teachers: res.data.data,
          total: res.data.total,
        },
      });
    },

    // 更新teachers
    *updateTeacher({ payload }, { select, put, call }) {
      try {
        payload.type = "teachers";
        var res = yield call(
          request("api/login.php", {
            params: payload,
            method: "post",
          })
        );

        // 将teacher信息保存到state中
        yield put({
          type: "update",
          payload: {
            teachers: res.data.data,
            total: res.data.total,
          },
        });
      } catch (e) {
        console.log("捕获异常了，不能发请求，没有登录");
      }
    },

    *doLogin({ payload }, { select, put, call }) {
      payload.type = "checkLogin";
      let res = yield call(
        request("api/login.php", { params: payload, method: "get" })
      );
      console.log(res.data);
      if (res.data.code == 1) {
        window.sessionStorage.setItem(
          "user",
          JSON.stringify(res.data.data.user)
        );

        yield put({ type: "changeLogin", payload: { isLogin: true } });
        yield put(routerRedux.push("/home"));
      } else {
        return alert("user password eror");
      }
    },
  },
  reducers: {
    saveEditTeacher(state, { payload }) {
      return {
        teacher: payload.teacher,
      };
    },
    update(state, { payload }) {
      //console.log(payload.teachers);
      return {
        teachers: payload.teachers,
        total: payload.total,
      };
    },
    changeLogin(state, { payload }) {
      return {
        isLogin: payload.isLogin,
      };
    },
  },
};

export default teacher;
