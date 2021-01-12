import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as SendGrid from '@sendgrid/mail';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    if (req.body && req.body.name) {
      SendGrid.setApiKey(process.env.apiKey);
      const msg = {
        to: process.env.emailTo,
        from: process.env.emailFrom,
        subject: req.body.subject,
        text: req.body.message
      };

      try {
        const resp = await SendGrid.send(msg);
      } catch (error) {
        let errMsg = 'An error has occurred';
        if (error.response) {
          let responseMsg =  {
            message: `${errMsg}: ${ error.response.body }`
          };

          context.log(`${errMsg}: ${ error.response.body }`);
          context.res = {
            status: 500,
            body: JSON.stringify(responseMsg)
          };
          return;
        }

        let responseMsg = {
          message: errMsg
        };

        context.res = {
          status: 500,
          body: JSON.stringify(responseMsg)
        };
        return;
      }

      const responseSuccess = {
        message: 'success'
      };

      context.res = {
          // status: 200, /* Defaults to 200 */
          body: JSON.stringify(responseSuccess)
      };
      return;
    }

    const responseBadRequest = {
      message: 'Invalid request'
    };

    context.res = {
      status: 400,
      body: JSON.stringify(responseBadRequest)
  };
};

export default httpTrigger;
