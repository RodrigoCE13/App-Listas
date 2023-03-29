import { useState } from "react";
import './App.css';
import { Add } from "./components/Add";
import { List } from "./components/List";
import { useList } from "./hooks/useList";

function App(){
  const {
    series,
    seriesCount,
    pendingSeriesCount,
    handleNewList,
    handleDeleteList,
    handleCompleteList,
    handleUpdateList
  } = useList()

  return(
    <>
      <h1>Lista de series</h1>
    <div className="counter-todos">
          <h3>N° Series: <span>{seriesCount}</span></h3>
          <h3>Pendientes: <span>{pendingSeriesCount}</span></h3>
        </div>
      <div className="card-list">
        <div className="add-obra">
          <h3>Agregar serie</h3>
          <Add handleNewList={handleNewList}/>
        </div>
      </div>
      <div className="list-series">
        <List
          series={series}
          handleUpdateList={handleUpdateList}
          handleDeleteList={handleDeleteList}
          handleCompleteList={handleCompleteList}
        />
      </div>
    </>
  );
}
export default App;