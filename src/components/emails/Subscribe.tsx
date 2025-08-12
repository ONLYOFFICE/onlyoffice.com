interface ISubscribeEmail {
  baseUrl: string;
  subscribe: string;
}

const SubscribeEmail = ({ baseUrl, subscribe }: ISubscribeEmail) => {
  return `
    <body style="margin: 0; padding: 0; text-align: center; width: 100%; font-family: Arial, sans-serif; font-size: 14px; color: #333;">
      <div style="background-color: #fff; width: 600px; margin: 0 auto; text-align: left;">
        <table
          cellspacing="0"
          cellpadding="0"
          style="font-family: Arial; font-size: 14px; color: #333; background: #fff; text-align: center; width: 600px; margin: 0; padding: 0; border: 0 none; border-collapse: collapse; empty-cells: show; border-spacing: 0;"
        >
          <tbody>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td
                colspan="3"
                style="margin: 0; padding: 0; background-color: #fff; height: 48px; padding: 20px 0 0 30px;"
              >
                <div style="text-align: left; height: 48px; width: 570px; margin: 0; padding: 0;">
                  <a
                    href="https://www.onlyoffice.com/"
                    style="color: #000000; font-size: 16px; font-weight: bold; line-height: 22px; padding-top: 22px; text-decoration: none;"
                    target="_blank"
                  >
                    <!--[if mso]>
                      <img
                        src="https://static.onlyoffice.com/media/newsletters/august2020/logo_grey.png"
                        style="border: 0px none; height: 57px; font-size: 18px; padding-bottom: 1px; width: 162px; color: #333"
                        alt="ONLYOFFICE"
                      />
                    <![endif]-->
                    <!--[if !mso]> <!---->
                      <img
                        src="https://static.onlyoffice.com/media/newsletters/august2020/logo_grey.png"
                        style="border: 0 none; height: auto; font-size: 18px; width: 162px; color: #333;"
                        alt="ONLYOFFICE"
                      />
                    <!-- <![endif]-->
                  </a>
                </div>
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td
                colspan="3"
                style="margin: 0; padding: 15px 30px 15px; background-color: #f6f6f6; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px;"
              >
                <div style="font-family: Arial; font-size: 14px; color: #333; margin: 0; padding: 0; width: 540px; height: auto; overflow: hidden; word-wrap: break-word; vertical-align: top; text-align: left; border: 0 none;">
                  <h1 style="color:#333333;font-size:18px;font-weight:bold;margin: 0;">
                    Confirm email address
                  </h1>

                  <p style="line-height:18px;margin-top:20px;">
                    <div style="margin-top:20px;">
                      <p style="margin-top:5px;">
                        To сonfirm your email, please follow
                        <a href="${baseUrl}/Subscribe?id=${subscribe}">this link</a>
                      </p>
                    </div>
                  </p>
                </div>
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td
                colspan="3"
                style="height: 10px; line-height: 10px; background: #fff; padding: 0; margin: 0;"
              >
                &nbsp;
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td style="vertical-align: top; margin: 0; padding: 34px 0 0 0; width: 210px; height: 108px; background: #f6f6f6; -moz-border-radius-topleft: 6px; -webkit-border-top-left-radius: 6px; border-top-left-radius: 6px;">
                <img
                  src="https://static.onlyoffice.com/media/newsletters/images/tech-100.png"
                  style="width: 100px; height: 100px;margin: 0 auto;"
                />
              </td>
              <td style="vertical-align: top; margin: 0; padding: 34px 0 0 0; width: 180px; height: 108px; background: #f6f6f6;">
                <img
                  src="https://static.onlyoffice.com/media/newsletters/images/mailus-100.png"
                  style="width: 100px; height: 100px;margin: 0 auto;"
                />
              </td>
              <td style="vertical-align: top; margin: 0; padding: 34px 0 0 0; width: 210px; height: 108px; background: #f6f6f6; -moz-border-radius-topright: 6px; -webkit-border-top-right-radius: 6px; border-top-right-radius: 6px;">
                <img
                  src="https://static.onlyoffice.com/media/newsletters/images/demo-100.png"
                  style="width: 100px; height: 100px;margin: 0 auto;"
                />
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td style="vertical-align: top; margin: 0; padding: 0; width: 210px; height: 16px; background: #f6f6f6;">
                Need tech help?
              </td>
              <td style="vertical-align: top; margin: 0; padding: 0; width: 180px; height: 16px; background: #f6f6f6;">
                Sales Questions
              </td>
              <td style="vertical-align: top; margin: 0; padding: 0; width: 210px; height: 16px; background: #f6f6f6;">
                Order Demo
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td style="vertical-align: top; margin: 0; padding: 0 0 30px; width: 210px; background: #f6f6f6;-moz-border-radius-bottomleft: 6px; -webkit-border-bottom-left-radius: 6px; border-bottom-left-radius: 6px;">
                <a
                  href="https://www.onlyoffice.com/support-contact-form.aspx"
                  target="_blank"
                  style="color: #333;"
                >
                  Send your question
                </a>
              </td>
              <td style="vertical-align: top; margin: 0; padding: 0 0 30px; width: 180px; background: #f6f6f6;">
                <a href="mailto:sales@onlyoffice.com" style="color: #333;">
                  Email us
                </a>
              </td>
              <td style="vertical-align: top; margin: 0; padding: 0 0 30px; width: 210px; background: #f6f6f6;-moz-border-radius-bottomright: 6px; -webkit-border-bottom-right-radius: 6px; border-bottom-right-radius: 6px;">
                <a
                  href="https://www.onlyoffice.com/demo-order.aspx"
                  target="_blank"
                  style="color: #333;"
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
          style="font-family: Arial; font-size: 14px; color: #333; text-align: center; vertical-align: top; width: 600px; margin: 0; padding: 0; border-collapse: collapse; border: 0; border-spacing: 0; "
        >
          <tbody>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td style="Margin: 0; padding-top: 32px; padding-bottom: 20px; padding-left: 180px; padding-right: 180px;">
                <table
                  style="border-collapse: collapse; border: 0; border-spacing: 0; empty-cells: show; Margin: auto; max-width: 240px; padding: 0; text-align: center; vertical-align: top; width: 100%;"
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
                              style="font-size: 8px; border: 0px none; height: 36px; width: 36px;"
                              alt="Facebook"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/facebook.png"
                              alt="Facebook"
                              style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;"
                            />
                          <!-- <![endif]-->
                        </a>
                      </td>
                      <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 40px;">
                        <a
                          href="https://twitter.com/ONLY_OFFICE"
                          style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;"
                          target="_blank"
                        >
                          <!--[if mso]>
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/february2024/twitter.png"
                              style="font-size: 8px; border: 0px none; height: 36px; width: 36px;"
                              alt="Twitter"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/february2024/twitter.png"
                              alt="Twitter"
                              style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;"
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
                              style="font-size: 8px; border: 0px none; height: 36px; width: 36px;"
                              alt="YouTube"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/youtube.png"
                              alt="YouTube"
                              style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;"
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
                              style="font-size: 8px; border: 0px none; height: 36px; width: 36px;"
                              alt="Instagram"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/instagram.png"
                              alt="Instagram"
                              style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;"
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
                              style="font-size: 8px; border: 0px none; height: 36px; width: 36px;"
                              alt="LinkedIn"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/indesign.png"
                              alt="LinkedIn"
                              style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%; position: relative; top: 2px;"
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
                              style="font-size: 8px; border: 0px none; height: 36px; width: 36px;"
                              alt="TikTok"
                            />
                          <![endif]-->
                          <!--[if !mso]> <!---->
                            <img
                              src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/tiktok.png"
                              alt="TikTok"
                              style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%; position: relative; top: 2px;"
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
                style="width: 600px; vertical-align: top; margin: 0; padding: 20px 30px 15px;"
              >
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

export { SubscribeEmail };
