interface ITrainingCoursesEmail {
  fromPage: string;
  fullName: string;
  email: string;
  company: string;
  lang: string;
  timezone: string;
  course: string;
  message: string;
  languageCode: string;
}

const TrainingCoursesEmail = ({
  fromPage,
  fullName,
  email,
  company,
  lang,
  timezone,
  course,
  message,
  languageCode,
}: ITrainingCoursesEmail) => {
  return (
    `<body style="margin: 0; padding: 0; text-align: center; width: 100%; font-family: Arial, sans-serif; font-size: 14px; color: #333;">
<div style="background-color: #fff; width: 600px; margin: 0 auto; text-align: left;">
    <table cellspacing="0" cellpadding="0" style="font-family: Arial; font-size: 14px; color: #333; background: #fff; text-align: center; width: 600px; margin: 0; padding: 0; border: 0 none; border-collapse: collapse; empty-cells: show; border-spacing: 0;">
      <tbody>
        <tr border="0" cellspacing="0" cellpadding="0">
          <td style="margin: 0; padding: 0; background-color: #fff; height: 65px; padding: 20px 0 0 30px;">
            <div style="text-align: left; height: 65px; width: 570px; margin: 0; padding: 0;">
                <a href="https://www.onlyoffice.com/" style="text-decoration: none; display: inline-block; width: 216px; height: 35px; margin: 0; padding: 0;" target="_blank">
                    <img src="https://static.onlyoffice.com/media/newsletters/images/mail_logo.png" style="border: 0px none; width: 216px; height: 35px; margin: 0; padding: 0;" alt="ONLYOFFICE" />
                </a>
            </div>
          </td>
        </tr>
        <tr border="0" cellspacing="0" cellpadding="0">
          <td style="margin: 0; padding: 15px 30px 15px; background-color: #f6f6f6; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px;">
            <div style="font-family: Arial; font-size: 14px; line-height: 18px; color: #333; margin: 0; padding: 0; width: 540px; height: auto; overflow: hidden; word-wrap: break-word; vertical-align: top; text-align: left; border: 0 none;">
                          <p style="margin-top:10px;">
                              Request ${fromPage}
                          </p>
                          <p style="margin-top:20px;">
                              <b>Full Name</b><br/>
                              ${fullName}
                          </p>
                          <p style="margin-top:20px;">
                              <b>E-mail</b><br/>
                              ${email}
                          </p>
                          <p style="margin-top:5px;">
                              <b>Company</b><br/>
                              ${company}
                          </p>
                          <p style="margin-top:5px;">
                              <b>Selected lang</b><br/>
                              ${lang}
                          </p>
                          <p style="margin-top:5px;">
                              <b>Timezone</b><br/>
                              ${timezone}
                          </p>
                          <p style="margin-top:5px;">
                              <b>Select course</b><br/>
                              ${course}
                          </p>
                          <p style="margin-top:5px;">
                              <b>Comment</b><br/>
                              ${message}
                          </p>
                          <p style="margin-top:5px;">
                              <b>Language</b><br/>
                              ${languageCode}
                          </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <table cellspacing="0" cellpadding="0" style="font-family: Arial; font-size: 14px; color: #333; text-align: center; vertical-align: top; width: 600px; margin: 0; padding: 0; border-collapse: collapse; border: 0; border-spacing: 0; ">
      <tbody>
        <tr border="0" cellspacing="0" cellpadding="0">
          <td style="width: 600px; vertical-align: top; margin: 0; padding: 20px 30px 15px;">
              <p style="color: #7b7b7b; font-family: Arial, Tahoma; font-size: 12px; margin: 0; padding: 0; text-align: center; width: 540px;">
              © Ascensio System SIA ${new Date().getFullYear()}. All rights reserved.
              </p>
          </td>
        </tr>
      </tbody>
    </table>
</div>
</body>`
  );
};

export { TrainingCoursesEmail };