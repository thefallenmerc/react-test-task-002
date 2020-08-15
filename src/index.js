import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux';
import { addData } from './redux/actions/data';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

// initialize the store
addDataToStore();

// to mock real time data
setInterval(() => {
  // add data to store
  addDataToStore();
}, getRange(5000))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


function addDataToStore() {
  store.dispatch(addData({
    "revenue": getRange(590000),
    "costs": getRange(300000),
    "netIncome": getRange(200000),
    "netIncomeCustomer": getRange(500),
    "mainData": [
      {
        "name": "Lead",
        "cvi": generateCVI(),
        "total": getRange(20, 2),
        "lastMonth": getRange(10),
        "target": getRange(10),
      },
      {
        "name": "MQL",
        "cvi": generateCVI(),
        "total": getRange(20, 2),
        "lastMonth": getRange(10),
        "target": getRange(10),
      },
      {
        "name": "SQL",
        "cvi": generateCVI(),
        "total": getRange(20, 2),
        "lastMonth": getRange(10),
        "target": getRange(10),
      },
      {
        "name": "Customer",
        "cvi": generateCVI(),
        "total": getRange(20, 2),
        "lastMonth": getRange(10),
        "target": getRange(10),
      },
    ],
    "extraData": [
      {
        "label": "Users",
        "value": getRange(500000),
        "lastMonth": getRange(10) + "%",
        "target": getRange(10) + "%",
        "targetValue": getRange(50000)
      },
      {
        "label": "Leads",
        "value": getRange(500000),
        "lastMonth": getRange(10) + "%",
        "target": getRange(10) + "%",
        "targetValue": getRange(50000)
      },
      {
        "label": "MQL",
        "value": getRange(500000),
        "lastMonth": getRange(10) + "%",
        "target": getRange(10) + "%",
        "targetValue": getRange(50000)
      },
      {
        "label": "SQL",
        "value": getRange(500000),
        "lastMonth": getRange(10) + "%",
        "target": getRange(10) + "%",
        "targetValue": getRange(50000)
      },
      {
        "label": "Customers",
        "value": getRange(500000),
        "lastMonth": getRange(10) + "%",
        "target": getRange(10) + "%",
        "targetValue": getRange(50000)
      },
    ]
  }));
}


function generateCVI() {
  const dates = [];
  for (let i = 0; i < 28; i++) {
    dates.push({
      "date": "08-" + (i > 0 ? i : "0" + i),
      "cost": parseFloat((Math.random() * 3 + 10).toFixed(2)),
      "income": parseFloat((Math.random() * 3 + 12).toFixed(2)),
    });
  }
  return dates;
}

function getRange(max = 999999, places = 0) {
  return parseFloat((Math.random() * max).toFixed(places));
}
