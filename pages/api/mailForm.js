export default async function handler(req, res) {

  let nodemailer = require('nodemailer')

  const body = req.body
  console.log(body)

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

  async function mail() {

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.MAIL_PASS,
      },
      secure: true,
    })

    let mail = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Landschwestern-um.de - Nachricht vom: ${currentDate}`,
      text: text,
      html: htmlText
    });
  }

  try {
    console.log('sending mail');
    await mail();
    res.status(200).send();
    console.log('mail should be sent');
  } catch (error) {
    console.log(error);
    console.log('error sending mail');
    res.status(404).send();
  } finally {
    res.end();
  };

}