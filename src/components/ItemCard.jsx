// ----------------------------------------------- 
// File        : ItemCard.jsx
// Author      : Mathuran Chandramohan
// Date        : 2026-04-21
// Description : A functional React component that 
//               renders item details in a Bootstrap
//               card format with action callbacks.
// -----------------------------------------------

import React from 'react'
export default function ItemCard({ item, onView, onEdit, onDelete }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        {/* Show album title (and year) */}
        <h5 className="card-title">{item.title} ({item.year})</h5>

        {/* Show artist's name */}
        <p className="card-text mb-1">
          <strong>Artist:</strong> {item.artist}
        </p>

        {/* Show genre */}
        <p className="card-text mb-1">
          <strong>Genre:</strong> {item.genre}
        </p>

        {/* Show rating */}
        <p className="card-text mb-1">
          <strong>Rating:</strong> {item.rating}/10
        </p>

        {/* Show notes */}
        <p className="card-text text-muted">
          {item.notes}
        </p>

        <div className="d-flex gap-2">
          {/* View Button */}
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => onView(item)}
          >
            View
          </button>

          {/* Edit Button*/}
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onEdit(item.id)}
          >
            Edit
          </button>

          {/* Delete Button*/}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
