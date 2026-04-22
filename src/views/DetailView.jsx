// -----------------------------------------------
// File         : DetailView.jsx
// Author       : Mathuran Chandramohan
// Date         : 2026-04-21
// Description  : Displays a detailed read-only view
//                of a single album's information
//                based on the URL ID parameter.
// -----------------------------------------------

import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ItemsContext } from '../context/ItemsContext'

export default function DetailView() {
  const { id } = useParams()
  const { items } = useContext(ItemsContext)

  // Find item by id
  const item = items.find(i => i.id === id)

  // Item doesn't exist
  if (!item) {
    return (
      <div>
        <div className="mb-3">
          <Link className="btn btn-sm btn-outline-secondary" to="/list">← Back to list</Link>
        </div>
        <div className="alert alert-warning">Album not found.</div>
      </div>
    )
  }

  // Render fields
  return (
    <div>
      <div className="mb-3">
        <Link className="btn btn-sm btn-outline-secondary" to="/list">← Back to list</Link>
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{item.title} ({item.year})</h3>
          <div className="small text-muted mb-3">{item.artist}</div>
          <div className="mb-2"><strong>Genre:</strong> {item.genre}</div>
          <div className="mb-2"><strong>Year:</strong> {item.year}</div>
          <div className="mb-2"><strong>Rating:</strong> {item.rating}/10</div>
          {item.notes && <p className="mb-0 mt-3 text-muted">{item.notes}</p>}
        </div>
      </div>
      <div className="mt-3 d-flex gap-2">
        <Link className="btn btn-primary btn-sm" to={`/edit/${item.id}`}>Edit</Link>
        <Link className="btn btn-outline-secondary btn-sm" to="/list">← Back to list</Link>
      </div>
    </div>
  )
}