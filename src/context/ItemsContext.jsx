// -----------------------------------------------
// File        : ItemsContext.jsx
// Author      : Mathuran Chandramohan
// Date        : 2026-04-21
// Description : Context provider that initializes
//               useItems and exposes all state and
//               handlers to the component tree.
// -----------------------------------------------

import React, { createContext } from 'react'
import useItems from '../hooks/useItems'

export const ItemsContext = createContext(null)

export function ItemsProvider({ children }) {
  // Initialize state and handlers (consider a custom useItems hook)
  const {
    items, setItems,
    search, setSearch,
    genre, setGenre,
    sortKey, setSortKey,
    sortDir, setSortDir,
    minYear, setMinYear,
    maxYear, setMaxYear,
    categories,
    derived,
    addItem, updateItem, deleteItem,
  } = useItems()

  // Expose items, derived list, filter state, CRUD handlers
  const value = {
    items, setItems,
    search, setSearch,
    genre, setGenre,
    sortKey, setSortKey,
    sortDir, setSortDir,
    minYear, setMinYear,
    maxYear, setMaxYear,
    categories,
    derived,
    addItem, updateItem, deleteItem,
  }

  return (
    <ItemsContext.Provider
      value={value}>{children}
    </ItemsContext.Provider>)
}
