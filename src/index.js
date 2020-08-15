import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux';
import { addData } from './redux/actions/data';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

// add data to store
addDataToStore();

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
    "revenue": 590333,
    "costs": 393194,
    "netIncome": 197139,
    "netIncomeCustomer": 432,
    "mainData": [
      {
        "name": "Lead",
        "cvi": [
          "date": "2020-08-1",
          "cost": 10,
          "income": 13
        ],
        "total": 18.13,
        "lastMonth": -5,
        "target": 5,
      },
      {
        "name": "MQL",
        "cvi": [
          "date": "2020-08-1",
          "cost": 10,
          "income": 13
        ],
        "total": 18.13,
        "lastMonth": -5,
        "target": 5,
      },
      {
        "name": "SQL",
        "cvi": [
          "date": "2020-08-1",
          "cost": 10,
          "income": 13
        ],
        "total": 18.13,
        "lastMonth": -5,
        "target": 5,
      },
      {
        "name": "Customer",
        "cvi": [
          "date": "2020-08-1",
          "cost": 10,
          "income": 13
        ],
        "total": 18.13,
        "lastMonth": -5,
        "target": 5,
      },
    ],
    "extraData": [
      {
        "label": "Users",
        "value": 504772,
        "lastMonth": "5%",
        "target": "2%",
        "targetValue": 49400
      },
      {
        "label": "Leads",
        "value": 504772,
        "lastMonth": "5%",
        "target": "2%",
        "targetValue": 49400
      },
      {
        "label": "MQL",
        "value": 504772,
        "lastMonth": "5%",
        "target": "2%",
        "targetValue": 49400
      },
      {
        "label": "SQL",
        "value": 504772,
        "lastMonth": "5%",
        "target": "2%",
        "targetValue": 49400
      },
      {
        "label": "Customers",
        "value": 504772,
        "lastMonth": "5%",
        "target": "2%",
        "targetValue": 49400
      },
    ]
  }));
}
