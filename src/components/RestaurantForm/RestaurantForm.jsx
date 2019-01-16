import React, { Component } from "react";
import { getCuisines } from "../../services/cuisineService";
import Input from "../common/Input/Input"

class RestaurantForm extends Component {
  state = {
    cuisines: getCuisines()
  };
  handleClick = () => {
    this.props.history.replace(this.props.returnPath);
  };

  render() {
    const { cuisines } = this.state;
    return (
      <div>
        <h1>Restaurant Form</h1>
        <form>
          <Input name="name" label="Name"/>
          <Input name="address" label="Address" />
          <Input name="opening-time-input" label="Opening Time" type="text" />
          <Input name="closing-time-input" label="Closing Time" type="text" />
          <div className="form-group">
            <label htmlFor="cuisine-input">Cuisine</label>
            <select defaultValue="" className="custom-select">
              <option key="default">Choose one</option>
              {cuisines.map((option, index) => (
                <option value={option._id} key={`${option._id}`}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <Input name="average-price" label="Average Price" type="number" />
          <Input name="image-url" label="Image URL" />
          <button className="btn btn-primary btn-sm" onClick={this.handleClick}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
