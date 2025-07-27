import { useParams } from 'next/navigation'
import React from 'react'

function SearchQueryResult() {
  const { libId } = useParams();
  return (
    <div>SearchQueryResult</div>
  )
}

export default SearchQueryResult