export default async function handler(req, res) {

  const body = req.body
  console.log(body)

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAIL_FROM,
      pass: process.env.MAIL_PASS,
    },
    secure: true,
  })

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  let currentDate = new Date().toJSON().slice(0, 10)

  let text = `Nachricht von: ${body.name} \n\n
              Telefonnummer: ${body.phone} \n\n
              E-Mail-Adresse: ${body.mail} \n\n
              Weiterer Text: ${body.additional}`

  let htmlText = ` 
  <div>
  <p> Nachricht von: ${body.name}</p>
  <p> Telefonnummer: ${body.phone}</p>
  <p> E-Mail-Adresse: ${body.mail}</p>
  <p> Weiterer Text: ${body.additional}</p>
  </div>
  `

  const mailData = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: `Landschwestern-um.de - Nachricht vom: ${currentDate}`,
    text: text,
    html: htmlText
  }

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).send()

}