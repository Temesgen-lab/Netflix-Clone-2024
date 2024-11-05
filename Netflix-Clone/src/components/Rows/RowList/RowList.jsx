import React from 'react'
import Row from '../Row/Row'
import requests, { arrRequests } from '../../../utils/requests'

const RowList = () => {


  return (
    <div>
      {
        arrRequests.map((request, index) => {
          const str = request[0].replace(/^fetch/, '');
          return <Row key={index} title={str} fetchPath={request[1]} />;
        })
      }
    </div>
  )
}

export default RowList
