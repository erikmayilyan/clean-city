import nodeMailer from 'nodemailer';

export const contactmail = (req, res) => {
  console.log('req body', req.body);
  res.status(200).json({ message: "Request received successfully" });

  let userMail = req.body.email;
  let userName = req.body.name;
  let userPhone = req.body.phone;
  let userCompany = req.body.company;
  let userAddress = req.body.address;
  let userPostal = req.body.postal;
  let userService = req.body.service;
  let userUnit = req.body.unit;
  let userRooms = req.body.rooms;
  let userBathrooms = req.body.bathrooms;
  let userSquare = req.body.square;
  let userDate = req.body.date;
  let userTime = req.body.time;

  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  console.log("Transporter:", transporter);

  let message = {
    from: userMail,
    to: process.env.EMAIL,
    subject: "New Booking",
    html: `<html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            padding: 20px;
          }
          .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          h3 {
            color: #333333;
          }
          .info {
            margin-top: 20px;
          }
          .info p {
            margin: 5px 0;
          }
          .title {
            background-color: #3887ef;
            color: #fff;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .title h1 {
            text-align: center;
            margin-bottom: 5px;
            color: #fff;
          }
          .title h3 {
            color: #fff;
            text-align: center;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="title">
            <h1>CLEAN CITY</h1>
            <h3>Booking Details</h3>
          </div>
          <div class="info">
            <p><strong>From:</strong> ${userName}</p>
            <p><strong>Mail:</strong> ${userMail}</p>
            <p><strong>Phone:</strong> ${userPhone}</p>
            <p><strong>Company Name:</strong> ${userCompany}</p>
            <p><strong>Address:</strong> ${userAddress}</p>
            <p><strong>Postal Code:</strong> ${userPostal}</p>
            <p><strong>Selected Service:</strong> ${userService}</p>
            <p><strong>Unit Number:</strong> ${userUnit}</p>
            <p><strong>Amount of Rooms:</strong> ${userRooms}</p>
            <p><strong>Amount of Bathroom:</strong> ${userBathrooms}</p>
            <p><strong>Square Footage:</strong> ${userSquare}</p>
            <p><strong>Date:</strong> ${userDate}</p>
            <p><strong>Time:</strong> ${userTime}</p>
          </div>
        </div>
      </body>
    </html>`
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log("Error in sending mail", error);
      return res.status(400).json({
        message: `Error in sending mail ${error}`
      });
    } else {
      console.log("Successfully sent the mail", info);
      return res.json({
        message: info
      });
    }
  });
};
