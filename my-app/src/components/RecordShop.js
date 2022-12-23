import React from "react";
import Record from "./Record"
import Search from "./Search"
import NewRecordForm from "./NewRecordForm"

function RecordShop({ records, setRecords, onSearchChange, isInCollection, onPurchase }) {
  return (
    <div className="shop">
        <div className="shop-name">Welcome to the Vinyl Shop!</div>
        <NewRecordForm records={records} setRecords={setRecords}/>
        <Search onSearchChange={onSearchChange} />
        <div className="records-container">
        {records.map(record => {
            return (
                <Record onPurchase={onPurchase} isInCollection={isInCollection} key={record.id} title={record.title} artist={record.artist} id={record.id} image={record.image} value={record.value} sideA={record.sideA} sideB={record.sideB}/>
            )
        })}
        </div>
    </div>
  );
}

export default RecordShop;