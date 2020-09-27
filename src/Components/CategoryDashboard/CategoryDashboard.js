import React, { Component } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryDashboard.css';

class CategoryDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

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