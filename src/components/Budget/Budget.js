import React, { Component } from 'react';
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import './Budget.css';
//Import connect from react-redux;
import { connect } from 'react-redux';
//Import the action creator (requestUserData) from userReducer.js.
import { requestUserData } from './../../ducks/userReducer'
import { requestBudgetData, addPurchase, removePurchase } from './../../ducks/budgetReducer'


class Budget extends Component {
  // Invoke requestUserData in the componentDidMount method
  componentDidMount() {
    // After the this.props.requestUserData runs in the componentDidMount method, the http request 
    //should be sent for the user data. When the user data comes back, the redux store gets updated, 
    //which will trigger a re-rending of the Budget component. The difference? We will now have values 
    //for email, firstName, and lastName on the props object.
    this.props.requestUserData();
    this.props.requestUserData();
  }

  render() {
    const { loading, purchases, budgetLimit } = this.props.budget;
    // The second arg to the connect method is an object that you can put any needed action creators in. 
    // Remember, you will want to invoke the version of requestUserData that is now on this.props.

    const { firstName, lastName } = this.props.user;
    return (
      <Background>
        {/* Towards the top of the jsx, locate the ternary that is 
        conditionally rendering the loading animation. Update this code to 
        use the loading property from this.props. */}
        {loading ? <Loading /> : null}
        <div className='budget-container'>
        {/* The Nav component is expecting a firstName and lastName prop. Pass the appropriate data as props. You should now 
        see the logged in user's name next to the picture in the corner. */}
          <Nav firstName={firstName} lastName={lastName} />
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase addPurchase={this.props.addPurchase}/>
              <DisplayPurchases purchases={purchases} removePurchase={this.props.removePurchase} />
            </div>
            <div className='chart-container'>
              <Chart1 purchases={purchases} budgetLimit={budgetLimit}/>
              <Chart2 purchases={purchases} />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

//Connect the Budget component.
//In the mapStateToProps function, return an object with a budget property and value
//of the budget slice of state from the redux store.
//All redux store state values managed by the budgetReducer are now on this.props, 
//including the loading property in the redux store.

//In mapStateToProps, make sure you are getting the user data from the redux store onto the props object
// function mapStateToProps(state) {
//   return {
//     budget: state.budget,
//     user: state.user
//   }
// }

function mapStateToProps(state) {
  return {
    budget: state.budget,
    user: state.user
  }
}

// export default Budget; instead of this

export default connect(mapStateToProps, { requestUserData, requestBudgetData, addPurchase, removePurchase })(Budget);

//In this step, we'll get the budgetData from the server to be displayed in budgetReducer.js:















