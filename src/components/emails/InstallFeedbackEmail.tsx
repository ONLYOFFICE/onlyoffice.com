interface IInstallFeedbackEmail {
  os: string;
  users_count: string;
  responsible: string;
  modules: string;
  issues: string;
  simple: string;
  meet: string;
  support: string;
  comments: string;
}

const InstallFeedbackEmail = ({
  os,
  users_count,
  responsible,
  modules,
  issues,
  simple,
  meet,
  support,
  comments,
}: IInstallFeedbackEmail) => {
  return `
    <body style="margin: 0; padding: 0; text-align: center; width: 100%; font-family: Arial, sans-serif; font-size: 14px; color: #333;">
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
                                    Install Feedback.
                                </p>
                                <p style="margin-top:20px;">
                                    <b>Which operating system you installed ONLYOFFICE$TM Server Edition to?</b><br />
                                    ${os}
                                </p>
                                <p style="margin-top:5px;">
                                    <b>How many users are there at your ONLYOFFICE$TM Server Edition portal?</b><br />
                                    ${users_count}
                                </p>
                                <p style="margin-top:5px;">
                                    <b>Who is responsible for the server solution installation and maintenance in your company?</b><br />
                                    ${responsible}
                                </p>
                                <p style="margin-top:5px;">
                                    <b>Which modules do you use most of all or are planning to use?</b><br />
                                    ${modules}
                                </p>
                                <p style="margin-top:5px;">
                                    <b>Did you have any issues during the installation process?</b><br />
                                    ${issues}
                                </p>
                                <p style="margin-top:5px;">
                                    <b>Did you find the installation process intuitive and simple?</b><br />
                                    ${simple}
                                </p>
                                <p style="margin-top:5px;">
                                    <b>To what degree this version functions meet your expectations?</b><br />
                                    ${meet}
                                </p>
                                <p style="margin-top:5px;">
                                    <b>Do you plan to use the additional paid support for future work?</b><br />
                                    ${support}
                                </p>
                                <p style="margin-top:5px;">
                                    <b>Please leave your comments as they will help us take into consideration all your suggestions in future versions:</b><br />
                                    ${comments}
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
    </body>
  `;
};

export { InstallFeedbackEmail };