import React from 'react'

function TrendTags() {
  return (
    <div className='card py-2' style={{
        borderRadius:'30px'
    }}>
        <h4 className='text-center'>Trending</h4>
        <div className='d-flex flex-column text-success px-4'>
            <span>#TKH</span>
            <span>#Tech</span>
            <span>#Blockchain</span>
            <span>#Motivation</span>
        </div>
    </div>
  )
}

export default TrendTags