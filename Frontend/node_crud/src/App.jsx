import { useState } from "react";
import "./App.css";
import CrudTable from "./components/CrudTable";
import CrudFormPage from "./components/CrudFormPage";

function App() {
  return (
    <>
      <CrudTable />
      <CrudFormPage />
    </>
  );
}

export default App;
