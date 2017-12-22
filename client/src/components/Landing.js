import React from 'react';


const Landing = () => {
    return (

        <div>
            <div>
                <div class="row">
                    <div class="col s12 m12">
                        <div class="card">
                            <div class="card-image">
                                <img src={ require('./images/simple1.jpg') } />
                                <span class="card-title">Smart Feedback Service</span>
                            </div>
                            <div class="card-content">
                                <p>Welcome to my world</p>
                            </div>
                            <div class="card-action">
                                <a href="/auth/google">Login with Google to start</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Landing;