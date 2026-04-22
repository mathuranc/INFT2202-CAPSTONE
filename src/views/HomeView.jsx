// -----------------------------------------------
// File        : HomeView.jsx
// Author      : Mathuran Chandramohan
// Date        : 2026-04-21
// Description : Landing page for the Albums app.
//               Introduces the app and links to
//               the list and create views.
// -----------------------------------------------

import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeView() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">

          <h1 className="display-5 fw-bold mb-3">🎵 Album Collection 🎵</h1>
          <p className="lead text-muted mb-4">
            Keep track of your favorite albums. Browse your collection,
            filter by genre, sort by year or rating, and add new entries anytime.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Link to="list" className="btn btn-primary btn-lg">
              Browse Collection
            </Link>
            <Link to="new" className="btn btn-outline-secondary btn-lg">
              Add Album
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}