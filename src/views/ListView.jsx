// -----------------------------------------------
// File        : ListView.jsx
// Author      : Mathuran Chandramohan
// Date        : 2026-04-21
// Description : Displays the filtered, sorted album
//               collection with search, genre filter,
//               year range, and sort controls.
// -----------------------------------------------

import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import Message from '../components/Message'
import { ItemsContext } from '../context/ItemsContext'

export default function ListView() {
  // Use ctx.derived and filters
  const {
    search, setSearch,
    genre, setGenre,
    sortKey, setSortKey,
    sortDir, setSortDir,
    minYear, setMinYear,
    maxYear, setMaxYear,
    categories,
    derived,
    deleteItem,
  } = useContext(ItemsContext)

  const navigate = useNavigate()

  return (
    <div>
      <div className="row g-2 align-items-end mb-3">
        {/* Success feedback */}
        {showSaved && <Message type="success" text="Album saved successfully!" />}

        {/* Search */}
        <div className="col-md-3">
          <label className="form-label mb-1">Search</label>
          <input
            className="form-control"
            placeholder="Search by title…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Genre filter*/}
        <div className="col-md-2">
          <label className="form-label mb-1">Genre</label>
          <select
            className="form-select"
            value={genre}
            onChange={e => setGenre(e.target.value)}
          >
            <option value="">All genres</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Min year */}
        <div className="col-md-2">
          <label className="form-label mb-1">From year</label>
          <input
            className="form-control"
            placeholder="e.g. 1990"
            value={minYear}
            onChange={e => setMinYear(e.target.value)}
          />
        </div>

        {/* Max year */}
        <div className="col-md-2">
          <label className="form-label mb-1">To year</label>
          <input
            className="form-control"
            placeholder="e.g. 2024"
            value={maxYear}
            onChange={e => setMaxYear(e.target.value)}
          />
        </div>

        {/* Sort key */}
        <div className="col-md-2">
          <label className="form-label mb-1">Sort by</label>
          <select
            className="form-select"
            value={sortKey}
            onChange={e => setSortKey(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="artist">Artist</option>
            <option value="year">Year</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Sort direction */}
        <div className="col-md-1">
          <label className="form-label mb-1">Dir</label>
          <select
            className="form-select"
            value={sortDir}
            onChange={e => setSortDir(e.target.value)}
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>

      </div>

      {/* Empty state */}
      {derived.length === 0 && (
        <div className="alert alert-info">
          No albums found.
        </div>
      )}

      {/* Map ctx.derived to ItemCard */}
      <div className="row g-3">
        {derived.map(item => (
          <div className="col-md-4" key={item.id}>
            <ItemCard
              item={item}
              onView={item => navigate(`/item/${item.id}`)}
              onEdit={id => navigate(`/edit/${id}`)}
              onDelete={deleteItem}
            />
          </div>
        ))}
      </div>

    </div>
  )
}
