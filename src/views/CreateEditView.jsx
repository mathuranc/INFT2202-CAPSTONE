// -----------------------------------------------
// File         : CreateEditView.jsx
// Author       : Mathuran Chandramohan
// Date         : 2026-04-21
// Description  : Handles both creating a new album
//                and editing an existing one based
//                on whether an id param is present.
// -----------------------------------------------

import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemForm from '../components/ItemForm'
import { ItemsContext } from '../context/ItemsContext'

export default function CreateEditView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, addItem, updateItem, categories } = useContext(ItemsContext)

  // Initial if editing; onSave add/update then navigate
  const initial = id ? items.find(i => i.id === id) : null

  function onSave(data) {
    if (id) { updateItem(id, data) }
    else { addItem(data) }
    navigate('/list', { state: { saved: true } })
  }

  return (
    <div>
      <h2 className="h5 mb-3">{id ? 'Edit Album' : 'Add Album'}</h2>
      {error && <Message type="danger" text="Something went wrong. Please try again." />}
      <ItemForm
        initial={initial}
        categories={categories}
        onSave={onSave}
        onCancel={() => navigate(-1)}
      />
    </div>
  )
}
