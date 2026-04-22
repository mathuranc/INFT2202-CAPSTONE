// -----------------------------------------------
// File        : useItems.js
// Author      : Mathuran Chandramohan
// Date        : 2026-04-21
// Description : Custom hook for managing product 
//               state and localstorage persistence
// -----------------------------------------------

import { useEffect, useMemo, useState } from 'react'
const STORAGE_KEY = 'a4_items'

export default function useItems() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('')
  const [sortKey, setSortKey] = useState('title')
  const [sortDir, setSortDir] = useState('asc')
  const [minYear, setMinYear] = useState('')
  const [maxYear, setMaxYear] = useState('')

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) {
        setItems([])
      } else {
        const data = JSON.parse(raw)
        Array.isArray(data) ? setItems(data) : setItems([])
      }
    } catch {
      setItems([])
    }
  }, [])

  // Persist to localStorage when items change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch { }
  }, [items])

  function addItem(data) {
    setItems(prev => [...prev, { id: crypto.randomUUID(), ...data }])
  }

  function updateItem(id, patch) {
    setItems(prev => prev.map(p => (p.id === id ? { ...p, ...patch } : p)))
  }

  function deleteItem(id) {
    setItems(prev => prev.filter(p => p.id !== id))
  }

  const categories = useMemo(() => {
    return Array.from(new Set(items.map(p => p.genre))).sort()
  }, [items])

  // Apply search, genre, min/max and sort
  const derived = useMemo(() => {
    let list = [...items]

    if (search.trim()) {
      const s = search.toLowerCase()
      list = list.filter(i => i.title.toLowerCase().includes(s))
    }

    if (genre) {
      list = list.filter(i => i.genre === genre)
    }

    if (minYear !== '') {
      list = list.filter(i => Number(i.year) >= Number(minYear))
    }
    if (maxYear !== '') {
      list = list.filter(i => Number(i.year) <= Number(maxYear))
    }

    const numericKeys = ['year', 'rating']
    list.sort((a, b) => {
      const valueA = numericKeys.includes(sortKey) ? Number(a[sortKey]) : String(a[sortKey] ?? '').toLowerCase()
      const valueB = numericKeys.includes(sortKey) ? Number(b[sortKey]) : String(b[sortKey] ?? '').toLowerCase()

      if (valueA < valueB) return sortDir === 'asc' ? -1 : 1
      if (valueA > valueB) return sortDir === 'asc' ? 1 : -1
      return 0
    })

    return list
  }, [items, search, genre, minYear, maxYear, sortKey, sortDir])

  return {
    items, setItems,
    search, setSearch,
    genre, setGenre,
    sortKey, setSortKey,
    sortDir, setSortDir,
    minYear, setMinYear,
    maxYear, setMaxYear,
    categories,
    derived,
    addItem, updateItem, deleteItem
  }
}
