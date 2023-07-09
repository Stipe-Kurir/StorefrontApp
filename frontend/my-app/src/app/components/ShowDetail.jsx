import React from 'react'

const ShowDetail = ({name,value}) => {
  return (
    <>
    {value===null?
    <p><b>{name}: </b>Not available</p>
        :
    <p> <b>{name}: </b>{value}</p>
    }
    </>
  )
}

export default ShowDetail
