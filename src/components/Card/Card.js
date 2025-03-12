import React from 'react';
import completedImage from '../../assests/lion.jpg';
import notCompletedImage from '../../assests/ocean.jpg';
import './Card.css';

const Card = ({ todo }) => {
  const imageUrl = todo.completed ? completedImage : notCompletedImage;

  return (
    <div className="card">
      <img src={imageUrl} alt={todo.completed ? 'Completed' : 'Not Completed'} />
      <h3>{todo.title}</h3>
      <p>User ID: {todo.userId}</p>
      <p>ID: {todo.id}</p>
      <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  );
};

export default Card;