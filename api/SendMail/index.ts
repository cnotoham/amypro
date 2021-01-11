import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as SendGrid from '@sendgrid/mail';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    if (req.body && req.body.name) {
      context.log(`apiKey: ${process.env.apiKey}`);
      SendGrid.setApiKey(process.env.apiKey);
      const msg = {
        to: 'cnotoham@yahoo.com.au',
        from: 'webmaster <cnotoham@yahoo.com.au>',
        subject: escape(req.body.subject),
        text: escape(req.body.message)
      };

      try {
        const resp = await SendGrid.send(msg);
      } catch (error) {
        if (error.response) {
          context.log(`An error has occurred: ${ error.response.body }`);
          context.res = {
            status: 500,
            body: `An error has occurred: ${ error.response.body }`
          };
          return;
        }
        context.res = {
          status: 500,
          body: 'An error has occurred'
        };
        return;
      }

      context.res = {
          // status: 200, /* Defaults to 200 */
          body: req.body
      };
      return;
    }

    context.res = {
      status: 400,
      body: 'Invalid request'
  };
};

export default httpTrigger;
