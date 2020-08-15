import React from 'react'

export default function MainCard({ data }) {
    return (
        <div className="col-md-6 my-2" >
            <div className="card main-card">
                <div className="card-body">
                    <div>Cost Per {data.name}</div>
                    <div>{data.total}</div>
                </div>
            </div>
        </div>
    )
}
