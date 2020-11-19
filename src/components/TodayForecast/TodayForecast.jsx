import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudShowersHeavy,
  faCloudSun,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const TodayTemps = styled.div`
  font-family: "Open Sans", sans-serif;

  font-size: 7em;
  letter-spacing: -13px;
`;

const TodayMetric = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 3em;
  margin-top: 0.5em;
  font-weight: 600;
  margin-left: 13px;
`;
const icons = {
  Rain: faCloudShowersHeavy,
  Clear: faSun,
  Clouds: faCloudSun,
  Haze: faCloudSun,
  Snow: faSnowflake,
};

function TodayForecast(props) {
  let temp = "-";
  let type = null;
  if (props.data.main != undefined) {
    console.log(props.data);
    type = props.data.weather[0].main;
    temp = parseInt(props.data.main.temp);
  }
  return (
    <div className="">
      <FontAwesomeIcon
        icon={icons[type]}
        className="mt-5"
        style={{ fontSize: "14em" }}
      />
      <div className="d-flex">
        <TodayTemps>{temp}</TodayTemps>
        <TodayMetric>°C</TodayMetric>
      </div>
    </div>
  );
}

export default TodayForecast;
