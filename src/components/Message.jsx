import React from 'react'

export default function Message({ type = 'success', text }) {
    const cls = type === 'danger' ? 'alert-danger' : 'alert-success'
    return <div className={`alert ${cls}`} role="alert">{text}</div>
}