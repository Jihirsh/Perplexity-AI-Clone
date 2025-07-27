"use client";
import { useParams } from 'next/navigation'
import React from 'react'

function SearchQueryResult() {
  const { libId } = useParams();
  console.log(libId);
  return (
    <div>SearchQueryResult</div>
  )
}

export default SearchQueryResult