import React, { Component } from 'react';

class CategoryForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      type: '',
      color: 'lightblue',
    }
  }

  componentDidUpdate() {
    const { reviewedCategory } = this.props;
    if (this.state.id !== reviewedCategory.id && reviewedCategory.id !== undefined) {
      this.setState({ id: reviewedCategory.id })
      this.setState({ type: reviewedCategory.type })
      this.setState({ color: reviewedCategory.color })
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitChange = (e) => {
    e.preventDefault();
    const { primaryFormAction, toggleForm, formType } = this.props;
    const newData = { ...this.state };
    primaryFormAction('categoryData', newData);
    toggleForm(formType, false, {});
  }

  render() {

    const possibleColors = ['lightblue', 'lightcoral', 'lightgreen', 'lightsalmon', 'lightgrey'];
    const colorOptions = possibleColors.map(color => {
      return (
        <option value={color}>{color.split('').splice(5)}</option>
      )
    })

    return (
      <form className='category-form'>
        <label className="form-labels">Type</label>
        <input
          className="edit-expense-input"
          name="type"
          value={this.state.type}
          onChange={(e) => this.handleChange(e)}
        />
        <label className="form-labels">Color</label>
        <select
          className="edit-expense-input"
          type='select'
          name="color"
          value={this.state.color}
          onChange={(e) => this.handleChange(e)}
        >
          {colorOptions}
        </select>
        <button onClick={(e) => this.submitChange(e)}>Submit</button>
      </form>
    )
  }
}

export default CategoryForm;