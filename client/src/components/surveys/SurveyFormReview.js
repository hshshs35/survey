import React from 'react';
import { connect } from 'react-redux';
import formFields from './formField';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your survey</h5>
            {reviewFields}
            <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
                Back
            </button>
            <button
                onClick={() => submitSurvey(formValues, history)}
                className="green btn-flat white-text right"
            >
                Submit
                <i className="material-icons right">done_all</i>
            </button>
        </div>
    )
};

function mapStateToProps(state){
    return { formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));