const sgMail = require('@sendgrid/mail');
const { catchAsyncWrapper } = require('../utils');

const sendMail = async (email) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: 'yurgov@gmail.com',
    subject: 'So Yummy news subscription confirm',
    text: 'please open in browser, that support html messages view',
    html: '<h3> This mail confirm, that you subscribed to So Yummy news feed. Thank you </h3>',
  };
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

const sendSubscribeMail = catchAsyncWrapper(async (email) => {
  await sendMail(email);

  return {
    statusCode: 200,
  };
});

module.exports = { sendSubscribeMail };
