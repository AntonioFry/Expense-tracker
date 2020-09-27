import React, { Component } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryDashboard.css';
import CategoryForm from '../CategoryForm/CategoryForm';

class CategoryDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormToggled: false,
      addFormToggled: false,
      reviewedCategory: {},
    }
  }

  toggleForm = async (type, boolean, data) => {
    if (type === 'edit') {
      await this.setState({ editFormToggled: boolean });
      await this.setState({ reviewedCategory: data });
    } else if (type === 'add') {
      await this.setState({ addFormToggled: boolean })
    }
  }

  render() {
    const { categoryData, changeData, addData, removeData } = this.props;

    const mappedCategoryData = categoryData.map(category => {
      return (
        <CategoryCard
          id={category.id}
          removeData={(type, targetDataId) => removeData(type, targetDataId)}
          type={category.type}
          color={category.color}
          toggleForm={(type, boolean, data) => this.toggleForm(type, boolean, data)}
        />
      )
    })
    return (
      <section className="category-dashboard-section">
        {mappedCategoryData}
        { this.state.addFormToggled === true ? <CategoryForm 
          reviewedCategory={this.state.reviewedCategory}
          toggleForm={(type, boolean, data) => this.toggleForm(type, boolean, data)}
          formType={'add'}
          primaryFormAction={(type, newData) => addData(type, newData)}
        /> : null }
        {this.state.editFormToggled === true ? <CategoryForm
          reviewedCategory={this.state.reviewedCategory}
          toggleForm={(type, boolean, data) => this.toggleForm(type, boolean, data)}
          formType={'edit'}
          primaryFormAction={(type, newData) => changeData(type, newData)}
        /> : null}
      </section>
    )
  }
}

export default CategoryDashboard;