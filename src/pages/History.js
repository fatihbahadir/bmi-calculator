import React, { useState, useEffect } from "react";

import SpinnerComponent from "../components/SpinnerComponent";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearData } from "../features/bmiInfo/bmiInfoSlice";

const History = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));
  const dispatch=useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  if (loading) {
    return <SpinnerComponent />;
  }
  return (
    <div style={{ padding: "50px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>BmiValue</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.bmi}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={{ textAlign: "center" }} colSpan={3}>
                THE LIST IS EMPTY
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button onClick={()=>{
        if(data){
          setData("")
          dispatch(clearData())
        }
        else{
        }

       
       }} variant="outline-secondary" style={{width:'100%'}}>Clear Data</Button>

    </div>
  );
};

export default History;
