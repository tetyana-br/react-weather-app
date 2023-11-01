import React from "react";
import "./WeatherForecast.css";

export default function WeaterForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="Icon">Icon</div>
          <div className="WeaterForecast-temperatures">
            <span className="WeatherForecast-trmperature-max">19°</span>
            <span className="WeatherForecast-trmperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
