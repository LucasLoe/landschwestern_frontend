export default function handler(req, res) {

  const body = req.body
  console.log(body)

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'landschwestern.api@gmail.com',
      pass: 'udrwolmmdrpslfyp',
    },
    secure: true,
  })

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
    from: 'landschwestern.api@gmail.com',
    to: 'lucas_loe@gmx.de',
    subject: `Landschwestern-um.de - Nachricht vom: ${currentDate}`,
    text: text,
    html: htmlText
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
      res.status(503).send()
    }
    else {
      res.status(200).send()
    }
  })

}