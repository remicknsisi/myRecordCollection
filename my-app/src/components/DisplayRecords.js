import React from "react";
import Record from "./Record"
import Search from "./Search"
import NewRecordForm from "./NewRecordForm"

function DisplayRecords({ search, setSearch, records, onClickRecord, onSubmit, inCollection, collectionValue }) {

  return (
    <div className="shop">
        {inCollection ? 
        <>
          <div className="my-records">My Vinyls</div>
          <p className="collection-value">Total Value: ${collectionValue}</p>
          {collectionValue === 0 ? <p className="collect-more">***Collect more Vinyls!***</p> : <ul className="collection"></ul>}
        </> : 
        <>
          <div className="shop-name">Welcome to the Vinyl Shop!</div>
          <NewRecordForm onSubmit={onSubmit}/>
          <Search search={search} setSearch={setSearch}/> 
        </>}

        <div className="records-container">
        {records.map(record => {
            return (
                <Record 
                record={record} 
                onClickRecord={onClickRecord} 
                key={record.id}
                inCollectionCard={inCollection}/>
            )
        })}
        </div>
    </div>
  );
}

export default DisplayRecords;