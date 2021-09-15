import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as SendGrid from '@sendgrid/mail';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  if (req.body && req.body.type && req.body.data) {
    let msgBody = '';
    if (req.body.type !== 'contact' && req.body.type !== 'booking') {
      context.res = {
        status: 400,
        body: 'Invalid request'
      };
      return;
    }

    msgBody = constructEmail(req);
    SendGrid.setApiKey(process.env.apiKey);

    const subject = req.body.type === 'contact' ? req.body.data.subject : 'Booking Information';
    const msg = {
      to: process.env.emailTo,
      from: process.env.emailFrom,
      subject: subject,
      text: msgBody
    };

    try {
      const resp = await SendGrid.send(msg);
    } catch (error) {
      context.log(`Error occurred: ${error}`);
      context.res = {
        status: 500,
        body: error
      };

      return;

    // let errMsg = 'An error has occurred';
    //   if (error.response) {
    //     context.log(`${errMsg}: ${ error.response.body }`);
    //     context.res = {
    //       status: 500,
    //       body: `${errMsg}: ${ error.response.body }`
    //     };
    //     return;
    //   }

      // context.res = {
      //   status: 500,
      //   body: errMsg
      // };
      // return;
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

function constructEmail(req: HttpRequest): string {
  if (req.body.type === 'contact') {
    return constructContactUsEmail(req);
  }

  if (req.body.type === 'booking') {
    return constructBookingEmail(req);
  }
}

function constructContactUsEmail(req: HttpRequest): string {
  return `Note that this is an automated email message. Please do not reply to this email.

  Enquiry received from:

  Name: ${ req.body.data.name }
  Phone: ${ req.body.data.phone }
  Email: ${ req.body.data.email }

  Message:
  ${ req.body.data.message }
  `;
}

function constructBookingEmail(req:HttpRequest): string {
  return `Note that this is an automated email message. Please do not reply to this email.

  Booking received from:

  Name: ${ req.body.data.name }
  Gender: ${ req.body.data.gender }
  Age: ${ req.body.data.age }
  Adress: ${ req.body.data.address }
  Suburb: ${ req.body.data.suburb }
  State: ${ req.body.data.state }
  Postcode: ${ req.body.data.postcode }
  Country: ${ req.body.data.country }
  Phone: ${ req.body.data.phone }
  Email: ${ req.body.data.email }

  Preferred property: ${ req.body.data.location }

  Additional Comments:
  ${ req.body.data.comment }

  Reference Details:
  Name: ${ req.body.data.refName }
  Adress: ${ req.body.data.refAddress }
  Suburb: ${ req.body.data.refSuburb }
  State: ${ req.body.data.refState }
  Postcode: ${ req.body.data.refPostcode }
  Country: ${ req.body.data.refCountry }
  Phone: ${ req.body.data.refPhone }
  Email: ${ req.body.data.refEmail }
  `;;
}

export default httpTrigger;
