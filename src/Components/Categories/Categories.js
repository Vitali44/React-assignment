import React from "react";
import "./Categories.css";

export default class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoriesList: [],
      newCategory: "",
    };
  }

  getInput = (e) => {
    this.setState({
      newCategory: e.target.value,
    });
  };

  addCategory = () => {
    const newCategory = {
      id: 1 + Math.random(),
      value: this.state.newCategory,
    };

    this.setState((prevState) => ({
      categoriesList: [...prevState.categoriesList, newCategory],
      newCategory: "",
    }));
  };

  deleteCategory = (id) => {
    const list = [...this.state.categoriesList];
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({
      categoriesList: updatedList,
    });
  };

  editCategory = (value, id) => {
    const { categoriesList } = this.state;
    const newList = categoriesList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          value,
        };
      }
      return item;
    });

    this.setState({
      categoriesList: newList,
    });
  };

  render() {
    return (
      <div className="mainCategory">
        <div className="catergories">
          <input
            id="input-category"
            type="text"
            placeholder="Enter category title"
            value={this.state.newCategory}
            onChange={this.getInput}
          />
          <button className="btn btn-primary" type="button" value="Add" onClick={this.addCategory}>
            Add
          </button>
          <br />
          {this.state.categoriesList.map((item) => {
            return (
              <div key={item.id} className="listitem">
                <input
                  className="inputCategory"
                  type="text"
                  id={item.id}
                  value={item.value}
                  // onChange={(e) => {
                  //   this.editCategory(e.target.value, item.id);
                  // }}
                ></input>
                <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={() => this.deleteCategory(item.id)}
                >
                  <i className="fa fa-times"/>
                </button>
                <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={() => this.deleteCategory(item.id)}
                >
                  <i className="fa fa-plus-square"/>
                </button>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    );
  }
}
