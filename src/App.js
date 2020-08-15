import React from 'react';
import { connect } from 'react-redux';
import { addData } from './redux/actions/data';
import { bindActionCreators } from 'redux';
import './App.css';
import SmallCard from './components/SmallCard';
import MainCard from './components/MainCard';
import SideCard from './components/SideCard';

function App({ data, selectData }) {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          {/* section */}
          <section className="col-md-8">
            <div className="header">React Test Task 002</div>
            {/* top cards */}
            <div className="row pt-2">
              <div className="col-md-3 col-sm-6 my-2">
                <SmallCard data={data.revenue} name="Revenue" />
              </div>
              <div className="col-md-3 col-sm-6 my-2">
                <SmallCard data={data.costs} name="Costs" />
              </div>
              <div className="col-md-3 col-sm-6 my-2">
                <SmallCard data={data.netIncome} name="Net Income" />
              </div>
              <div className="col-md-3 col-sm-6 my-2">
                <SmallCard data={data.netIncomeCustomer} name="Net Income Customer" />
              </div>
            </div>
            {/* main cards */}
            <div className="row pt-2">
              {
                data.mainData.map((d, i) => (
                  <MainCard data={d} key={i} />
                ))
              }
            </div>
          </section>
          {/* sidebar-right */}
          <aside className="col-md-4 sidebar-right">
            <div className="selected-period">
              Selected Period:
              <select onChange={() => {
                selectData()
              }}>
                <option>Previous Month</option>
                <option selected>This Month</option>
                <option>Next Month</option>
              </select>
            </div>
            <div className="row">
              {
                data.extraData.map((data, index) => (
                  <div className="col-md-12 col-sm-6" key={index}>
                    <SideCard data={data} />
                  </div>
                ))
              }
            </div>
            <div className="about">
              (c) Shubham Singh Chahar
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addTheData: addData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
