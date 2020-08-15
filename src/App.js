import React from 'react';
import { connect } from 'react-redux';
import { addData } from './redux/actions/data';
import { bindActionCreators } from 'redux';
import './App.css';
import SmallCard from './components/SmallCard';
import MainCard from './components/MainCard';

function App({ data, addTheData }) {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          {/* section */}
          <section className="col-md-8">
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
            {
              data.extraData.map((data, index) => (
                <div className="side-card card my-3" key={index}>
                  <div className="card-body">
                    {data.label}
                  </div>
                </div>
              ))
            }
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
