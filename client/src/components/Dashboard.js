import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const DashBoard = () => {
    return (
        <div>
            <div className="card lighten-3" key="1">
                <div className="card-content">
                    <span className="card-title">Sample card survey</span>
                    <p>
                        Press the red button at the bottom right corner to send a new survey
                    </p>
                </div>
                <div className="card-action">
                    <a>Please make sure you have at least one credit to start</a>
                </div>
            </div>

            <SurveyList/>
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default DashBoard;