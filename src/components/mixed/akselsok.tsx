'use client'

import { useState } from "react"
import { Search } from "@navikt/ds-react"

export default function AkselSok() {
    const [query, setQuery] = useState("")

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const searchParams = new URLSearchParams(window.location.search)
        searchParams.set('q', query)
        window.history.pushState(null, '', `?${searchParams.toString()}`)
    }

    return (
        <form role="search" onSubmit={handleSubmit}>
            <Search
                label="Søk etter noe"
                variant="primary"
                value={query}
                onChange={(e: any) => setQuery(e.target.value)}
            />
        </form>
    )
}