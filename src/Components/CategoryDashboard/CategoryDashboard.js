import React, { Component } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryDashboard.css';

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
    const { categoryData } = this.props;

    const mappedCategoryData = categoryData.map(category => {
      return (
        <CategoryCard
          id={category.id}
          type={category.type}
          color={category.color}
        />
      )
    })
    return (
      <section className="category-dashboard-section">
        {mappedCategoryData}
      </section>
    )
  }
}

export default CategoryDashboard;