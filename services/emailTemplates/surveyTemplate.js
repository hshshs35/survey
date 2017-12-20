const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
    <html>
      <body>
        <div>
          <h3>We would like to have your feedback!</h3>
          <p>Please answer the folliwng questions</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
          </div>
        </div>
      </body>
    </html>`;
};