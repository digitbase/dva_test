import React, { Component, Fragment } from "react";
import { connect } from "dva";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.btnClick = this.btnClick.bind(this);
  }

  btnClick() {
    console.log("点击");
    this.props.dispatch({
      type: "index/changeNum",
      payload: { num: 8 },
    });
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div>数据是:{this.props.num}</div>
        <button onClick={this.btnClick}>变量</button>
      </Fragment>
    );
  }
}

export default connect((state) => {
  return {
    num: state.index.num,
  };
})(Home);
