import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
      txtAge: "",
      password: "",
      txtDescription: "",
      sltGender: 1,       //Trạng thái ban đầu của select
      rdLang: "vi",       //Trạng thái ban đầu của radio
      checkStatus: false, //Trạng thái ban đầu của checkbox
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(e) {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    // target.type === 'checkbox' ? target.checked nếu không có dòng này thì kết quả sẻ trả về string chứ không phải là boolean
    this.setState({
      [name]: value,
    });
  }

  onHandleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit} role="form">
                  <div className="form-group">
                    <label>User Name: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtName"
                      placeholder="Enter Your Name"
                      onChange={this.onHandleChange}
                      value={this.state.txtName}
                    />
                  </div>
                  <div className="form-group">
                    <label>User Age: </label>
                    <input
                      type="number"
                      className="form-control"
                      name="txtAge"
                      placeholder="Enter Your Age"
                      onChange={this.onHandleChange}
                      value={this.state.txtAge}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password: </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Your Password"
                      onChange={this.onHandleChange}
                      value={this.state.password}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description: </label>
                    <textarea
                      name="txtDescription"
                      className="form-control"
                      rows="5"
                      placeholder="Enter Your Description"
                      onChange={this.onHandleChange}
                      value={this.state.txtDescription}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Gender: </label>
                    <select
                      name="sltGender"
                      className="form-control"
                      onChange={this.onHandleChange}
                      value={this.state.sltGender}
                    >
                      <option value={0}>Nữ</option>
                      <option value={1}>Nam</option>
                      <option value={2}>Bống</option>
                      {/* {0} là lấy ra giá trị số còn "0" là lấy ra giá trị chuỗi */}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Ngôn ngữ</label>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="rdLang"
                          value="en"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLang === "en"}
                        />
                        Tiếng Anh
                      </label>
                      <br />
                      <label>
                        <input
                          type="radio"
                          name="rdLang"
                          value="vi"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLang === "vi"}
                        />
                        Tiếng Việt
                      </label>
                    </div>

                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="checkStatus"
                          value={true}
                          onChange={this.onHandleChange}
                          checked={this.state.checkStatus === true}
                        />
                        Checkbox
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                  &nbsp;
                  <button type="reset" className="btn btn-danger">
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
