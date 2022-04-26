import React, { useState } from 'react'

export const Test = () => {
    const [query, setQuery] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        alert(query + 'submitted')
    }
    return (
        <div>
            test
            <form action=""
            onSubmit={onSubmit}>
            <input type="text" onChange={e => setQuery(e.target.value)} placeholder="searhc" className="border"/>
            </form>
           
            <span>{query}</span>
        </div>
    )
}
