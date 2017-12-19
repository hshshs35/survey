import React, { Component } from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component{
    render(){
        return(
            <StripeCheckOut
                name="Shawn's Feedback Service"
                description="credits for sending surveys"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="orange btn">
                    Pay with card
                </button>
            </StripeCheckOut>
        );
    }
}

export default connect(null, actions)(Payments);