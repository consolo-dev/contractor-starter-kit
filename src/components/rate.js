import React, { useState, useEffect } from "react";

function Rate() {
  const [hourly, setHourly] = useState(0);
  const [billableHourly, setBillableHourly] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector("#result").value = "";
    document.querySelector("#result2").value = "";
  }, []);

  useEffect(() => {
    if (clear) document.querySelector("#result").value = "";
  });

  const Add = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") return;
    let rate = currentNum / 1920;
    let rateBillable = currentNum / 1152;
    setHourly(rate.toFixed(2));
    setBillableHourly(rateBillable.toFixed(2));
    document.querySelector("#num").value = "";
  };

  return (
    <div className="Rate">
      <form>
        <h2>Enter Annual Salary</h2>
        <input type="text" id="num" placeholder="Annual Salary" />
        <button onClick={Add}>Calculate</button>
      </form>
      <p></p>
      <h2>Hourly Rate</h2>
      <h3 id="result">$ {hourly}</h3>
      <p></p>
      <p>
        When working as a contractor, you'll likely only be able to bill 60% of
        the hours your work. The rest of the time will be spent doing
        administrative tasks (or fixing those stupid bugs you can't justify
        logging hours for)
      </p>
      <h2>60% Billable Hours</h2>
      <h3 id="result2">$ {billableHourly}</h3>
      <p></p>
    </div>
  );
}

export default Rate;
