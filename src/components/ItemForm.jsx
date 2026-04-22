// -----------------------------------------------
// File        : ItemForm.jsx
// Author      : Mathuran Chandramohan
// Date        : 2026-04-21
// Description : A reusable form component for creating
//               and editing product details with
//               built-in validation and Bootstrap styling.
// -----------------------------------------------
import React, { useEffect, useState } from 'react'

const EMPTY = { title: '', artist: '', genre: '', year: '', rating: '', notes: '' }
const isYear = value => (/^\d{4}$/.test(String(value))) && (Number(value) >= 1900) && (Number(value) <= new Date().getFullYear())
const isRating = value => Number(value) >= 1 && Number(value) <= 10 && !isNaN(Number(value))

export default function ItemForm({ initial = null, categories = [], onSave, onCancel }) {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const editing = !!initial

  useEffect(() => {
    if (initial) setForm({
      ...initial,
      year: String(initial.year),
      rating: String(initial.rating),
    })
  }, [initial])

  function validate(blurField) {
    const e = {}

    if (!form.title.trim()) { e.title = 'Title is required' }
    if (!form.artist.trim()) { e.artist = 'Artist is required' }
    if (!form.genre) { e.genre = 'Genre is required' }
    if (!isYear(form.year)) { e.year = `Year must be between 1900 and ${new Date().getFullYear()}` }
    if (!isRating(form.rating)) { e.rating = 'Rating must be a number between 1 and 10' }

    if (blurField) { setErrors(prev => ({ ...prev, [blurField]: e[blurField] })) }
    else { setErrors(e) }

    return (Object.keys(e).length === 0)
  }

  // Validate + Save
  function onSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    onSave({ ...form, year: Number(form.year), rating: Number(form.rating) })
  }

  return (
    <form className="row g-3" onSubmit={onSubmit} noValidate>

      {/* Title */}
      <div className="col-md-6">
        <label className="form-label">Title</label>
        <input
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          onBlur={() => validate('title')}
        />
        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
      </div>

      {/* Artist */}
      <div className="col-md-6">
        <label className="form-label">Artist</label>
        <input
          className={`form-control ${errors.artist ? 'is-invalid' : ''}`}
          value={form.artist}
          onChange={e => setForm({ ...form, artist: e.target.value })}
          onBlur={() => validate('artist')}
        />
        {errors.artist && <div className="invalid-feedback">{errors.artist}</div>}
      </div>

      {/* Genre */}
      <div className="col-md-4">
        <label className="form-label">Genre</label>
        <select
          className={`form-select ${errors.genre ? 'is-invalid' : ''}`}
          value={form.genre}
          onChange={e => setForm({ ...form, genre: e.target.value })}
          onBlur={() => validate('genre')}
        >
          <option value="">Choose…</option>
          {[...new Set(['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Electronic', 'R&B', 'Classical', 'Country', 'Metal', ...categories])].map(g => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        {errors.genre && <div className="invalid-feedback">{errors.genre}</div>}
      </div>

      {/* Year */}
      <div className="col-md-4">
        <label className="form-label">Year</label>
        <input
          className={`form-control ${errors.year ? 'is-invalid' : ''}`}
          value={form.year}
          onChange={e => setForm({ ...form, year: e.target.value })}
          onBlur={() => validate('year')}
          placeholder="e.g. 2023"
        />
        {errors.year && <div className="invalid-feedback">{errors.year}</div>}
      </div>

      {/* Rating */}
      <div className="col-md-2">
        <label className="form-label">Rating</label>
        <input
          className={`form-control ${errors.rating ? 'is-invalid' : ''}`}
          value={form.rating}
          onChange={e => setForm({ ...form, rating: e.target.value })}
          onBlur={() => validate('rating')}
          placeholder="1–10"
        />
        {errors.rating && <div className="invalid-feedback">{errors.rating}</div>}
        <div className="form-text">Score out of 10</div>
      </div>

      {/* Notes */}
      <div className="col-12">
        <label className="form-label">Notes <span className="text-muted">(optional)</span></label>
        <textarea
          className="form-control"
          rows="3"
          value={form.notes}
          onChange={e => setForm({ ...form, notes: e.target.value })}
        />
      </div>

      {/* Buttons */}
      <div className="col-12 d-flex gap-2">
        {/* Update/Save */}
        <button className="btn btn-primary" type="submit">
          {editing ? 'Update' : 'Save'}
        </button>

        {/* Cancel button in edit mode */}
        <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>

    </form>
  )
}