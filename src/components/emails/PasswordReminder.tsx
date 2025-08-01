interface IPasswordReminder {
  portals: {
    domain: string;
    path: string;
  }[];
}

const PasswordReminder = ({ portals }: IPasswordReminder) => {
  const portalsHtml = portals
    .map(
      ({ domain, path }) => `
      <div style="font-size:14px; line-height:22px; padding-top:24px;">
        Portal address:
        <a href="${domain}" style="color: #FF6F3D;">
          <b>${domain}</b>
        </a>
        <br />
        <p style="margin: 0; padding-top:8px;">
          To change your password please follow
          <a href="${domain}${path}" style="color: #FF6F3D;">
            this link
          </a>
        </p>
      </div>
    `,
    )
    .join("");

  return `
    <body style="margin: 0; padding: 0; text-align: center; width: 100%; font-family: Arial, sans-serif; font-size: 14px; color: #333333;">
      <div style="background-color: #F5F5F5; width: 600px; margin: 0 auto; text-align: left;">
        <table
          cellspacing="0"
          cellpadding="0"
          style="font-family: Arial; font-size: 14px; line-height: 22px; color: #333333; background: #F5F5F5; text-align: center; width: 600px; margin: 0; padding: 0; border: 0 none; border-collapse: collapse; empty-cells: show; border-spacing: 0;"
        >
          <tbody>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td
                colspan="3"
                style="margin: 0; padding: 0; background-color: #F5F5F5; height: 32px; padding: 32px 0;"
              >
                <div style="text-align: center; height: 32px; width: 600px; margin: 0; padding: 0;">
                  <a
                    href="https://www.onlyoffice.com/"
                    style="text-decoration: none; display: inline-block; width: 186px; height: 32px; margin: 0; padding: 0;"
                    target="_blank"
                  >
                    <img
                      src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2024/logo_oo_186x32.png"
                      style="border: 0px none; color: #444444; font-size: 24px; font-weight: 600; letter-spacing: -0.04em; width: 186px; height: 32px; margin: 0; padding: 0; text-align: right;"
                      alt="ONLYOFFICE"
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td
                colspan="3"
                style="margin: 0; padding: 0 40px 24px; background-color: #F5F5F5; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px;"
              >
                <div style="background-color: #FFFFFF; border: 1px solid #E2E2E2; box-sizing: content-box; font-family: Arial; font-size: 14px; color: #333333; margin: 0; padding: 48px; width: 422px; height: auto; overflow: hidden; word-wrap: break-word; vertical-align: top; text-align: left;">
                  <h1 style="color:#333333; font-size:20px; font-weight:bold; letter-spacing: -0.01em; line-height: 1.33em; margin: 0; padding-bottom: 16px; text-align: center;">
                    Password Reminder
                  </h1>
                  <p style="border-top: 1px solid #CCCCCC; font-size:14px; line-height:21px; margin: 0; padding-top:24px;">
                    You have requested a password reminder for your portal at
                    ONLYOFFICE.
                    <br />
                    <br />
                    Here are your log in details:
                  </p>
                  ${portalsHtml}
                </div>
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td style="vertical-align: top; margin: 0; padding: 40px 0 0 0; width: 210px; height: 108px; -moz-border-radius-topleft: 6px; -webkit-border-top-left-radius: 6px; border-top-left-radius: 6px;">
                <img
                  src="http://d2nlctn12v279m.cloudfront.net/media/newsletters/may2025/need-tech-help.png"
                  style="width: 64px; height: 64px;margin: 0 auto;"
                />
              </td>
              <td style="vertical-align: top; margin: 0; padding: 40px 0 0 0; width: 180px; height: 108px;">
                <img
                  src="http://d2nlctn12v279m.cloudfront.net/media/newsletters/may2025/sales-questions.png"
                  style="width: 64px; height: 64px;margin: 0 auto;"
                />
              </td>
              <td style="vertical-align: top; margin: 0; padding: 40px 0 0 0; width: 210px; height: 108px; -moz-border-radius-topright: 6px; -webkit-border-top-right-radius: 6px; border-top-right-radius: 6px;">
                <img
                  src="http://d2nlctn12v279m.cloudfront.net/media/newsletters/may2025/order-demo.png"
                  style="width: 64px; height: 64px;margin: 0 auto;"
                />
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td style="font-size: 13px; font-weight: 600; line-height: 1.33em; text-transform: uppercase; vertical-align: top; margin: 0; padding: 0; width: 210px; height: 16px;">
                Need tech help?
              </td>
              <td style="font-size: 13px; font-weight: 600; line-height: 1.33em; text-transform: uppercase; vertical-align: top; margin: 0; padding: 0; width: 180px; height: 16px;">
                Sales Questions
              </td>
              <td style="font-size: 13px; font-weight: 600; line-height: 1.33em; text-transform: uppercase; vertical-align: top; margin: 0; padding: 0; width: 210px; height: 16px;">
                Order Demo
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td style="vertical-align: top; margin: 0; padding: 8px 0 30px; width: 210px;-moz-border-radius-bottomleft: 6px; -webkit-border-bottom-left-radius: 6px; border-bottom-left-radius: 6px;">
                <a
                  href="https://www.onlyoffice.com/support-contact-form.aspx"
                  target="_blank"
                  style="color: #333333; text-decoration: underline;"
                >
                  Send your question
                </a>
              </td>
              <td style="vertical-align: top; margin: 0; padding: 8px 0 30px; width: 180px;">
                <a
                  href="mailto:sales@onlyoffice.com"
                  style="color: #333333; text-decoration: underline;"
                >
                  Email us
                </a>
              </td>
              <td style="vertical-align: top; margin: 0; padding: 8px 0 30px; width: 210px;-moz-border-radius-bottomright: 6px; -webkit-border-bottom-right-radius: 6px; border-bottom-right-radius: 6px;">
                <a
                  href="https://www.onlyoffice.com/demo-order.aspx"
                  target="_blank"
                  style="color: #333333; text-decoration: underline;"
                >
                  Send a request
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          cellspacing="0"
          cellpadding="0"
          style="background-position: 0 0;background-repeat: no-repeat;text-align: center;vertical-align: top;width: 560px;height: 0px;margin: 0 auto;padding: 0;border: 0 none;border-collapse: collapse;empty-cells: show;border-spacing: 0;"
        >
          <tbody>
            <tr align="center" border="0" cellspacing="0" cellpadding="0">
              <td
                align="center"
                style="vertical-align: top; margin: 0; padding: 0; width: 560px; padding-bottom: 32px; padding-top: 40px; padding-left: 0px; padding-right: 0px; text-align: center;"
              >
                <table
                  align="center"
                  style="border-collapse: collapse; border: 0; border-spacing: 0; empty-cells: show; Margin: 0 auto; max-width: 240px; padding: 0; text-align: center; vertical-align: top; width: 100%;"
                  cellspacing="0"
                  cellpadding="0"
                >
                  <tbody>
                    <tr border="0" cellspacing="0" cellpadding="0">
                      <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 40px;">
                        <a
                          href="https://www.facebook.com/pages/OnlyOffice/833032526736775"
                          style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 10px;"
                          target="_blank"
                        >
                          <!--[if mso]>
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/facebook.png"
                              style="border: 0px none; height: 36px; width: 36px;"
                              alt="FB"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/facebook.png"
                              alt="FB"
                              style="border: 0; color: #333333; display: block; height: auto; width: 100%;"
                            />
                          <!-- <![endif]-->
                        </a>
                      </td>
                      <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 40px;">
                        <a
                          href="https://x.com/ONLY_OFFICE"
                          style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 18px;"
                          target="_blank"
                        >
                          <!--[if mso]>
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/february2024/twitter.png"
                              style="border: 0px none; height: 36px; width: 36px;"
                              alt="TW"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/february2024/twitter.png"
                              alt="TW"
                              style="border: 0; color: #333333; display: block; height: auto; width: 100%;"
                            />
                          <!-- <![endif]-->
                        </a>
                      </td>
                      <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 40px;">
                        <a
                          href="https://www.youtube.com/user/onlyofficeTV"
                          style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 22px;"
                          target="_blank"
                        >
                          <!--[if mso]>
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/youtube.png"
                              style="border: 0px none; height: 36px; width: 36px;"
                              alt="YT"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/youtube.png"
                              alt="YT"
                              style="border: 0; color: #333333; display: block; height: auto; width: 100%;"
                            />
                          <!-- <![endif]-->
                        </a>
                      </td>
                      <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 40px;">
                        <a
                          href="https://www.instagram.com/the_onlyoffice/"
                          style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 18px;"
                          target="_blank"
                        >
                          <!--[if mso]>
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/instagram.png"
                              style="border: 0px none; height: 36px; width: 36px;"
                              alt="IG"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/instagram.png"
                              alt="IG"
                              style="border: 0; color: #333333; display: block; height: auto; width: 100%;"
                            />
                          <!-- <![endif]-->
                        </a>
                      </td>
                      <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 40px;">
                        <a
                          href="https://www.linkedin.com/company/ascensio-system-sia/"
                          style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 24px;"
                          target="_blank"
                        >
                          <!--[if mso]>
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/indesign.png"
                              style="border: 0px none; height: 36px; width: 36px;"
                              alt="LI"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/indesign.png"
                              alt="LI"
                              style="border: 0; color: #333333; display: block; height: auto; width: 100%; position: relative; top: 2px;"
                            />
                          <!-- <![endif]-->
                        </a>
                      </td>
                      <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 40px;">
                        <a
                          href="https://www.tiktok.com/@only_office"
                          style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;"
                          target="_blank"
                        >
                          <!--[if mso]>
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/tiktok.png"
                              style="border: 0px none; height: 36px; width: 36px;"
                              alt="TT"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/tiktok.png"
                              alt="TT"
                              style="border: 0; color: #333333; display: block; height: auto; width: 100%; position: relative; top: 2px;"
                            />
                          <!-- <![endif]-->
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td
                colspan="4"
                style="width: 600px; vertical-align: top; margin: 0; padding: 0 30px 40px;"
              >
                <p style="color: #666666; font-family: Arial, Tahoma; font-size: 13px; line-height: 1.5em; margin: 0; padding: 0; text-align: center; width: 540px;">
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

export { PasswordReminder };
