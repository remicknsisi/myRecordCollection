import React from "react";
import Record from "./Record"
import Search from "./Search"
import NewRecordForm from "./NewRecordForm"

function RecordShop({ search, setSearch, records, onPurchase, onSubmit, collectionValue, setCollectionValue }) {

  return (
    <div className="shop">
        <div className="shop-name">Welcome to the Vinyl Shop!</div>
        <NewRecordForm onSubmit={onSubmit}/>
        <Search search={search} setSearch={setSearch} />
        <div className="records-container">
        {records.map(record => {
            return (
                <Record collectionValue={collectionValue} setCollectionValue={setCollectionValue} record={record} onPurchase={onPurchase} key={record.id}/>
            )
        })}
        </div>
    </div>
  );
}

export default RecordShop;