import React, { Component } from "react";

class Dialog extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    isShow: false,
    teacher: {},
  };
  componentDidMount() {
    // const { isShow,teacher} = this.props;
    // this.setState({
    //     isShow,teacher
    // });
  }
  closeDialog() {
    // console.log("颠倒了");
    // this.props.isShow = false;
    // this.setState({});

    this.props.closeDiaLog();
  }
  render() {
    const { isShow, teacher } = this.props;
    return (
      <div
        className={isShow ? "show-modal" : "modal fade show-modal"}
        id="teacherModal"
        onClick={(e) => this.closeDialog()}
      >
        <div className="modal-dialog" style={{ width: 750 }}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>

              <h4 className="panel-title">讲师信息</h4>
            </div>
            <div className="panel-body">
              <table className="table table-bordered table-condensed">
                <tbody>
                  <tr>
                    <th>姓名:</th>
                    <td>{teacher.word}</td>
                    <th>职位:</th>
                    <td colSpan="3">2222</td>
                    <td rowSpan="4" width="128">
                      <div className="avatar">
                        <img src="" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>花名:</th>
                    <td>{teacher.nickname}</td>
                    <th>出生日期:</th>
                    <td colSpan="3">444</td>
                  </tr>
                  <tr>
                    <th>性别:</th>
                    <td>{teacher.gender == 0 ? "男" : "女"}</td>
                    <th>入职日期:</th>
                    <td colSpan="3">666</td>
                  </tr>
                  <tr>
                    <th>手机号码:</th>
                    <td colSpan="2">13051524959</td>
                    <th>邮箱:</th>
                    <td colSpan="2">zhaoyuchuan@itcast.cn</td>
                  </tr>
                  <tr>
                    <th>籍贯:</th>
                    <td colSpan="6">河北省 保定市 曲阳县</td>
                  </tr>
                  <tr>
                    <td colSpan="7">
                      <div className="introduce">
                        <button style={{ zIndex: 999 }}>关闭</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
