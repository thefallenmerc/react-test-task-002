import React from 'react'

export default function SmallCard({ name, data }) {
    return (
        <div className="card small-card">
            <div className="card-body">
                <div>{name}</div>
                <div>${data.toLocaleString()}</div>
            </div>
        </div>
    )
}
