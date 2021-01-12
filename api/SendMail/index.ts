import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as SendGrid from '@sendgrid/mail';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    if (req.body && req.body.name) {
      SendGrid.setApiKey(process.env.apiKey);

      const msgBody = constructContactUsEmail(req);

      const msg = {
        to: process.env.emailTo,
        from: process.env.emailFrom,
        subject: req.body.subject,
        text: msgBody
      };

      try {
        const resp = await SendGrid.send(msg);
      } catch (error) {
        let errMsg = 'An error has occurred';
        if (error.response) {
          context.log(`${errMsg}: ${ error.response.body }`);
          context.res = {
            status: 500,
            body: `${errMsg}: ${ error.response.body }`
          };
          return;
        }

        context.res = {
          status: 500,
          body: errMsg
        };
        return;
      }

      context.res = {
          // status: 200, /* Defaults to 200 */
          body: 'success'
      };
      return;
    }

    context.res = {
      status: 400,
      body: 'Invalid request'
  };
};

function constructContactUsEmail(req: HttpRequest): string {
  return `Note that this is an automated email message. Please do not reply to this email.

  Enquiry received from:

  Name: ${ req.body.name }
  Phone: ${ req.body.phone }
  Email: ${ req.body.email }

  Message:
  ${ req.body.message }
  `;
}

export default httpTrigger;
