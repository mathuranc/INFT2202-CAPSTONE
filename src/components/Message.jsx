// -----------------------------------------------
// File        : Message.jsx
// Author      : Mathuran Chandramohan
// Date        : 2026-04-21
// Description : A reusable alert component that
//               displays a success or danger message
//               using Bootstrap alert styling.
// -----------------------------------------------

import React from 'react'

export default function Message({ type = 'success', text }) {
    const cls = type === 'danger' ? 'alert-danger' : 'alert-success'
    return <div className={`alert ${cls}`} role="alert">{text}</div>
}