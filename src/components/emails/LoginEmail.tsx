interface ILoginEmail {
  baseUrl: string;
  queryParams: string;
  unsubscribeId: string;
}

const LoginEmail = ({ baseUrl, queryParams, unsubscribeId }: ILoginEmail) => {
  return `
    <body
      background="#ffffff"
      style="background: linear-gradient(#ffffff, #ffffff); background-color: #ffffff; font-family: Helvetica, Arial, Tahoma, sans-serif; margin: 0; padding: 0; text-align: center; width: 100%;"
    >
      <center style="table-layout:fixed; width:100%; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">
        <div style="margin-bottom:0; margin-left:auto; margin-right:auto; margin-top:0; max-width:600px;">
          <table
            background="#ffffff"
            cellspacing="0"
            cellpadding="0"
            style="background-color:#ffffff; border: 0; border-collapse: collapse; border: 0; border-spacing: 0; empty-cells: show; max-width: 600px; margin: 0 auto; padding: 0; text-align: center; vertical-align: top; width: 100%; border-left: 1px solid #f5f5f5; border-right: 1px solid #f5f5f5; border-top: 1px solid #f5f5f5; border-bottom: 1px solid #f5f5f5;"
          >
            <tbody>
              <tr border="0" cellspacing="0" cellpadding="0">
                <td style="margin: 0 auto; padding: 0; text-align: center; vertical-align: top; width: 100%;">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    background="#ffffff"
                    style="background-color: #ffffff; border: 0 none; border-collapse: collapse; border-spacing: 0; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; color: #333333; empty-cells: show; height: 0px; margin: 0 auto; max-width: 600px; padding: 0; vertical-align: top; width: 100%; text-align: left;"
                  >
                    <tbody>
                      <tr border="0" cellspacing="0" cellpadding="0">
                        <td
                          colspan="3"
                          style="margin: 0; padding: 0; background-color: #f6f6f6; height: 85px; padding-left: 30px; vertical-align: top;"
                        >
                          <div style="text-align: left; height: 44px; width: 570px; margin: 0; padding: 0; padding-top: 20px; box-sizing: content-box;">
                            <a
                              href="https://www.onlyoffice.com"
                              style="text-decoration: none; display: inline-block; width: 386px; height: 44px; margin: 0; padding: 0;"
                              target="_blank"
                            >
                              <img
                                src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/may2025/logo-docspace.png"
                                style="border: 0px none; width: 386px; height: 44px; margin: 0; padding: 0; color: #333333; font-family: 'Open Sans', Helvetica, Arial, Tahoma, sans-serif; font-size: 32px; font-weight: 700; line-height: 1.33em; letter-spacing: -0.02em;"
                                alt="ONLYOFFICE DocSpace"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr border="0" cellspacing="0" cellpadding="0">
                        <td style="padding: 0 40px; margin: 0; text-align: center; vertical-align: top; width: 600px;">
                          <h1 style="font-family: 'Open Sans', Helvetica, Arial, Tahoma, sans-serif; font-size: 24px;font-weight: 700;line-height: 1.33em;letter-spacing: -0.02em;margin: 0; padding: 32px 0 0 0;text-align: center;">
                            Your login link to
                            <span style="color: #FF6F3D;">ONLYOFFICE</span>
                            DocSpace
                          </h1>
                          <p style="font-size: 14px;line-height: 21px;margin: 0; padding: 32px 0 0 0;word-wrap: break-word !important;">
                            Hello!
                          </p>
                          <p style="font-size: 14px;line-height: 21px;margin: 0; padding: 8px 0 0 0;word-wrap: break-word !important;">
                            Click the button below to login to your DocSpace.
                          </p>
                          <p style="font-size: 14px;line-height: 21px;margin: 0; padding: 32px 0 0 0;word-wrap: break-word !important;">
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              style="border: 0 none; border-collapse: collapse; border-spacing: 0; empty-cells: show; margin: 0 auto; max-width: 600px; padding: 0; vertical-align: top; width: 100%; text-align: left;"
                            >
                              <tbody>
                                <tr border="0" cellspacing="0" cellpadding="0">
                                  <td style="width: 180px;"></td>
                                  <!--[if mso]>
                                    <td
                                      class="body-text"
                                      border="0"
                                      style="margin: 0; padding: 0; text-align: center; width: 230px;"
                                    >
                                      <v:roundrect
                                        xmlns:v="urn:schemas-microsoft-com:vml"
                                        xmlns:w="urn:schemas-microsoft-com:office:word"
                                        href="${baseUrl}/docspace-registration?${queryParams}"
                                        style="v-text-anchor: middle; box-sizing: border-box; font-weight: 600; font-size: 12px; height: 56px; text-decoration: none; width: 230px;"
                                        arcsize="5%"
                                        strokecolor="#FF6F3D"
                                        fillcolor="#FF6F3D"
                                        alt="Log in to DocSpace"
                                        target="_blank"
                                      >
                                        <w:anchorlock />
                                        <center
                                          class="fol"
                                          style="color:#ffffff; font-family: 'Open Sans', Helvetica, Arial, Tahoma, sans-serif; font-weight: 600; font-size: 12px; letter-spacing: 0.04em; text-align: center; text-decoration: none; text-transform: uppercase; white-space: nowrap;"
                                        >
                                          Log in to DocSpace
                                        </center>
                                      </v:roundrect>
                                    </td>
                                  <![endif]--><!--[if !mso]> <!-->
                                    <td style="text-align: center;">
                                      <a
                                        class="fol"
                                        href="${baseUrl}/docspace-registration?${queryParams}"
                                        style="background-color:#FF6F3D; border:1px solid #FF6F3D; border-radius: 3px; color:#ffffff; display: inline-block; font-family: 'Open Sans', Helvetica, Arial, Tahoma, sans-serif; font-size: 13px; font-weight: 600; line-height: 18px; padding-top: 18px; padding-right: 36px; padding-bottom: 18px; padding-left: 36px; text-align: center; text-decoration: none; text-transform: uppercase; -webkit-text-size-adjust: none; mso-hide: all; white-space: nowrap; letter-spacing: 0.04em;"
                                        alt="Log in to DocSpace"
                                        target="_blank"
                                      >
                                        Log in to DocSpace
                                      </a>
                                    </td>
                                  <!-- <![endif]-->
                                  <td style="width: 180px;"></td>
                                </tr>
                              </tbody>
                            </table>
                          </p>
                          <p style="font-size: 14px;line-height: 21px;margin: 0; padding: 32px 0 0 0;word-wrap: break-word !important;">
                            The login link remains active for 60 minutes <br /> and is valid for a single use only.
                          </p>
                          <p style="font-size: 14px;line-height: 21px;margin: 0; padding: 44px 0;word-wrap: break-word !important;">
                            Truly Yours, ONLYOFFICE Team <br />
                            <a
                              rel="noopener noreferrer"
                              href="https://www.onlyoffice.com"
                              style="color: #FF6F3D;text-decoration: none;"
                              target="_blank"
                            >
                              www.onlyoffice.com
                            </a>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    background="#F5F5F5"
                    cellspacing="0"
                    cellpadding="0"
                    style="background-color: #F5F5F5; border: 0 none; border-collapse: collapse; border-spacing: 0; color: #333333; empty-cells: show; height: 0px; margin: 0 auto; max-width: 600px; padding: 0; vertical-align: top; width: 100%; text-align: center;"
                  >
                    <tbody>
                      <tr border="0" cellspacing="0" cellpadding="0">
                        <td
                          class="fol"
                          style="border-top-width: 1px; border-top-color: #E2E2E2; border-top-style: solid; color: #666666; font-family: 'Open Sans', Helvetica, Arial, Tahoma, sans-serif; font-size: 13px; line-height: 20px; margin: 0; padding: 40px 0 8px; vertical-align: top;"
                        >
                          For any purchase questions, email us at
                          <a style="color: #FF6F3D; text-decoration: underline;" target="_blank" href="mailto:sales@onlyoffice.com">sales@onlyoffice.com</a>.
                        </td>
                      </tr>
                      <tr border="0" cellspacing="0" cellpadding="0">
                        <td
                          class="fol"
                          style="color: #666666; font-family: 'Open Sans', Helvetica, Arial, Tahoma, sans-serif; font-size: 13px; line-height: 20px; margin: 0; padding: 0; vertical-align: top;"
                        >
                          In case of technical problems please contact our
                          <a style="color: #FF6F3D; text-decoration: underline;" target="_blank" href="https://helpdesk.onlyoffice.com">support team</a>.
                        </td>
                      </tr>
                      <tr border="0" cellspacing="0" cellpadding="0">
                        <td
                          class="fol"
                          style="font-family: 'Open Sans', Helvetica, Arial, Tahoma, sans-serif; font-size: 13px; line-height: 20px; margin: 0; padding: 8px 0 0; vertical-align: top;"
                        >
                          <a
                            href="${baseUrl}/Unsubscribe?id=${unsubscribeId}"
                            style="color: #FF6F3D; text-decoration: underline; white-space: nowrap;"
                            target="_blank"
                          >
                            Click here to unsubscribe
                          </a>
                        </td>
                      </tr>
                      <tr border="0" cellspacing="0" cellpadding="0">
                        <td style="margin: 0; padding-top: 40px;">
                          <table
                            align="center"
                            style="border-collapse: collapse; border: 0; border-spacing: 0; empty-cells: show; font-size: 14px; Margin: 0 auto; max-width: 240px; padding: 0; text-align: center; vertical-align: top; width: 100%;"
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
                                    href="https://www.twitter.com/ONLY_OFFICE"
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
                        <td style="margin: 0; padding-bottom: 40px;"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </body>
  `;
};

export { LoginEmail };
