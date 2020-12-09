import React, { Component, Fragment } from "react";
import { connect } from "dva";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  changeUserName(e) {
    console.log("change");
    this.setState({
      username: e.target.value,
    });
  }
  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  doLogin(e) {
    e.preventDefault();
    let { username, password } = this.state;

    this.props.dispatch({
      type: "teacher/doLogin",
      payload: {
        username,
        password,
      },
    });
  }
  render() {
    return (
      <Fragment>
        <div class="login">
          <div class="login-wrap">
            <div class="avatar">
              <img src="assets/imgs/monkey.png" class="img-circle" alt="" />
            </div>
            <form
              class="col-xs-offset-1 col-xs-10"
              onSubmit={(e) => this.doLogin(e)}
            >
              <div class="input-group input-group-lg">
                <span class="input-group-addon">
                  <i class="fa fa-user"></i>
                </span>
                <input
                  id="name"
                  type="text"
                  class="form-control"
                  placeholder="用户名"
                  value={this.state.username}
                  onChange={(e) => {
                    this.changeUserName(e);
                  }}
                />
              </div>
              <div class="input-group input-group-lg">
                <span class="input-group-addon">
                  <i class="fa fa-key"></i>
                </span>
                <input
                  id="pass"
                  type="password"
                  class="form-control"
                  placeholder="密码"
                  value={this.state.password}
                  onChange={(e) => {
                    this.changePassword(e);
                  }}
                />
              </div>
              <button type="submit" class="btn btn-lg btn-primary btn-block">
                登 录
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect((state) => {
  return {
    isLogin: state.teacher.isLogin,
  };
})(Signin);
