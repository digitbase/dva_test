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
        <div className="login">
          <div className="login-wrap">
            <div className="avatar">
              <img src="assets/imgs/monkey.png" className="img-circle" alt="" />
            </div>
            <form
              className="col-xs-offset-1 col-xs-10"
              onSubmit={(e) => this.doLogin(e)}
            >
              <div className="input-group input-group-lg">
                <span className="input-group-addon">
                  <i className="fa fa-user"></i>
                </span>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="用户名"
                  value={this.state.username}
                  onChange={(e) => {
                    this.changeUserName(e);
                  }}
                />
              </div>
              <div className="input-group input-group-lg">
                <span className="input-group-addon">
                  <i className="fa fa-key"></i>
                </span>
                <input
                  id="pass"
                  type="password"
                  className="form-control"
                  placeholder="密码"
                  value={this.state.password}
                  onChange={(e) => {
                    this.changePassword(e);
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
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
