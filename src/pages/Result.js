import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ResultContainer from "../components/ResultContainer";
import SpinnerComponent from "../components/SpinnerComponent";
import bmiResults from "../data/bmiData";
import DietLists from "../data/dietList";
const Result = () => {
  const { name, bmiValue } = useSelector((state) => state.bmiInfo);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  useEffect(() => {
    if (name) {
      if (
        JSON.parse(localStorage.getItem("data")).slice(-1)[0].name !== name ||
        JSON.parse(localStorage.getItem("data")).slice(-1)[0].bmi !== bmiValue
      ) {
        setTimeout(() => {
          var dataList = JSON.parse(localStorage.getItem("data") || "[]");
          var bmiData = {
            name: name,
            bmi: bmiValue,
          };
          dataList.push(bmiData);

          localStorage.setItem("data", JSON.stringify(dataList));
        }, 2000);
      }
    }
  }, []);

  if (loading) {
    return <SpinnerComponent />;
  }

  const checkValue = () => {
    if (bmiValue <= 19) {
      return (
        <ResultContainer
          dietList={DietLists[0]}
          textTitle={bmiResults[0].bmiType}
          text={bmiResults[0].bmiDesc}
          img="https://media.tenor.com/qVxeKiV_ZG4AAAAC/weights-skinny-guy.gif"
        />
      );
    }
    if (bmiValue <= 24) {
      return (
        <>
          <ResultContainer
            dietList={DietLists[1]}
            textTitle={bmiResults[1].bmiType}
            text={bmiResults[1].bmiDesc}
            img="https://i.pinimg.com/originals/5c/26/08/5c2608995c3c8e0bf420898a065d082a.gif"
          />
        </>
      );
    }
    if (bmiValue <= 30) {
      return (
        <>
          <ResultContainer
            dietList={DietLists[2]}
            textTitle={bmiResults[2].bmiType}
            text={bmiResults[2].bmiDesc}
            img="https://c.tenor.com/IgLEszQK-lQAAAAC/smile-person-fat.gif"
          />
        </>
      );
    }
    if (bmiValue <= 50) {
      return (
        <ResultContainer
          dietList={DietLists[3]}
          textTitle={bmiResults[3].bmiType}
          text={bmiResults[3].bmiDesc}
          img="https://cdn.dribbble.com/users/3151485/screenshots/6671159/obese_run_gif.gif"
        />
      );
    }
  };

  return (
    <>
      <Row>
        <Col xl="3"></Col>
        <Col xl="6">{checkValue()}</Col>
        <Col xl="3"></Col>
      </Row>
    </>
  );
};

export default Result;
