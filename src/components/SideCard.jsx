import React from 'react'

export default function SideCard({data}) {
    return (
        <div className="side-card card my-2">
            <div className="card-body">
                <div>{data.label}</div>
                <div className="value">{data.value.toLocaleString()}</div>
                <div className="side-card-bottom">
                    <span>vs last Month: {data.lastMonth}</span>
                    <span>to Target: {data.target} ({data.value.toLocaleString()})</span>
                </div>
            </div>
        </div>
    )
}
