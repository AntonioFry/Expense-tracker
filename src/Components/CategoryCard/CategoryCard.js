import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ id, type, color, toggleForm, removeData }) => {
  const backgroundColor = {
    'backgroundColor': color
  }
  return (
    <article className="category-card" style={backgroundColor}>
      <header>
        <h3 className='category-title'>Category: {type}</h3>
      </header>
      <div className='category-card-btn-container'>
        <button
          className='category-card-btn'
          onClick={() => toggleForm('edit', true, { id, color, type })}
          >Edit
        </button>
        <button className='category-card-btn' onClick={() => removeData('categoryData', id)}>Remove</button>
      </div>
    </article>
  )
}

export default CategoryCard;