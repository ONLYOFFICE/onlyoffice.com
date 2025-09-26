import { getT } from "@src/lib/helpers/i18next";

interface IWebinarsForUserEmail {
  webinarTheme: string;
  webinarDate: string;
  language: string;
  baseUrl: string;
  unsubscribeId: string;
}

const WebinarsForUserEmail = async ({
  webinarTheme,
  webinarDate,
  language,
  baseUrl,
  unsubscribeId,
}: IWebinarsForUserEmail) => {
  const t = await getT(language, "WebinarsForUserEmail");

  return `
    <body background="#ffffff" style="background: linear-gradient(#ffffff, #ffffff); background-color: #ffffff; margin: 0; padding: 0; text-align: center; width: 100%; font-family: 'Open Sans', Arial, Tahoma; font-size: 14px; color: #000;">
    <table cellspacing="0" cellpadding="0" style="text-align: center; vertical-align: top; width: 100%; margin: 0 auto; padding: 0; border: 0; border-collapse: collapse; border: 0; empty-cells: show; border-spacing: 0;">
        <tbody>
            <tr border="0" cellspacing="0" cellpadding="0">
                <td style="width: 100%; font-size: 16px; vertical-align: top; margin: 0 auto; padding: 0; text-align: center;">
                    <table cellspacing="0" cellpadding="0" background="" style="background-position: 0 0;background-repeat: no-repeat;text-align: center;vertical-align: top;width: 560px;height: 0px;margin: 0 auto;padding: 0;border: 0 none;border-collapse: collapse;empty-cells: show;border-spacing: 0;">
                        <tbody>
                            <tr align="center" border="0" cellspacing="0" cellpadding="0">
                                <td style="vertical-align: top; margin: 0; padding: 0; width: 186px; padding-bottom: 40px; padding-top: 40px; padding-left: 10px; padding-right: 10px;">
                                    <p style="width: 186px; margin: 0px auto; text-align: left;">
                                        <a href="https://www.onlyoffice.com/${language !== "en" ? `${language}` : ""}" style="margin: 0px; text-decoration: none;" target="_blank">
                                            <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2024/logo_oo_186x32.png" style="border: 0px none; width: 186px; height: 32px;" alt="ONLYOFFICE.com">
                                        </a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table cellspacing="0" cellpadding="0" background="" style="background-color: #F9F9F9; background-position: 0 0; background-repeat: no-repeat; text-align: center; vertical-align: top; width: 560px; height: 0px; margin: 0 auto; padding: 0; border: 0 none; border-collapse: collapse;empty-cells: show; border-spacing: 0;-moz-border-radius: 8px; -webkit-border-radius: 8px; border-radius: 8px;">
                        <tbody>
                            <tr border="0" cellspacing="0" cellpadding="0">
                                <td style="color: #333; font-family: 'Open Sans', Arial, Tahoma; padding: 32px 32px 24px; margin: 0; font-size: 14px; text-align: left; line-height: 24px;" >
                                    ${t("Hello")}
                                </td>
                            </tr>
                            <tr border="0" cellspacing="0" cellpadding="0">
                                <td style="color: #333; font-family: 'Open Sans', Arial, Tahoma; padding: 0px 32px; margin: 0; font-size: 14px; text-align: left; line-height: 24px;">
                                    ${t("ThankYouForRegistering", { webinarTheme })}
                                </td>
                            </tr>

                            <tr border="0" cellspacing="0" cellpadding="0">
                                <td style="color: #333; font-family: 'Open Sans', Arial, Tahoma; padding: 24px 32px 0px; margin: 0; font-size: 14px; text-align: left; line-height: 24px;">
                                    ${t("SaveTheDate")} ${webinarDate}
                                </td>
                            </tr>

                            <tr border="0" cellspacing="0" cellpadding="0">
                                <td style="color: #333; font-family: 'Open Sans', Arial, Tahoma; padding: 24px 32px 0px; margin: 0; font-size: 14px; text-align: left; line-height: 24px;">
                                   ${t("WebinarsAreLiveStreamed")}
                                </td>
                            </tr>

                            <tr border="0" cellspacing="0" cellpadding="0">
                                <td style="color: #333; font-family: 'Open Sans', Arial, Tahoma; padding: 24px 32px 0px; margin: 0; font-size: 14px; text-align: left; line-height: 24px;">
                                    ${t("QuestionsSuggestions")}
                                </td>
                            </tr>

                            <tr border="0" cellspacing="0" cellpadding="0">
                                <td style="color: #333; font-family: 'Open Sans', Arial, Tahoma; padding: 24px 32px 32px; margin: 0; font-size: 14px; text-align: left; line-height: 24px;">
                                    ${t("CheckAllOnlineEvents")}
                                </td>
                            </tr>
                            ${
                              language !== "ja" && language !== "zh"
                                ? `
                                <tr border="0" cellspacing="0" cellpadding="0">
                                  <td style="color: #333; font-family: 'Open Sans', Arial, Tahoma; padding: 0px 32px 0; margin: 0; font-size: 14px; text-align: left; line-height: 24px;">
                                    ${t("TrulyYours")}
                                  </td>
                                </tr>
                                `
                                : ""
                            }
                            <tr border="0" cellspacing="0" cellpadding="0">
                                <td style="color: #333; font-family: 'Open Sans', Arial, Tahoma; padding: 0px 32px 0; margin: 0; font-size: 14px; text-align: left; line-height: 24px;">
                                    ${t("ONLYOFFICETeam")}
                                </td>
                            </tr>
                            <tr border="0" cellspacing="0" cellpadding="0">
                                <td style="color: #333; font-family: 'Open Sans', Arial, Tahoma; padding: 0px 32px 32px; margin: 0; font-size: 14px; text-align: left; line-height: 24px;">
                                    <a style="color: #FF6F3D; font-weight: 600;" target="_blank" href="https://www.onlyoffice.com/${language !== "en" ? `${language}` : ""}">www.onlyoffice.com</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table cellspacing="0" cellpadding="0" background="" style="background-position: 0 0;background-repeat: no-repeat;text-align: center;vertical-align: top;width: 560px;height: 0px;margin: 0 auto;padding: 0;border: 0 none;border-collapse: collapse;empty-cells: show;border-spacing: 0;">
                        <tbody>
                            <tr align="center" border="0" cellspacing="0" cellpadding="0">
                                <td align="center" style="vertical-align: top; margin: 0; padding: 0; width: 560px; padding-bottom: 32px; padding-top: 40px; padding-left: 0px; padding-right: 0px; text-align: center;">
                                    <table align="center" style="border-collapse: collapse; border: 0; border-spacing: 0; empty-cells: show; Margin: 0 auto; max-width: ${language === "zh" ? `200px` : `240px;`} padding: 0; text-align: center; vertical-align: top; width: 100%;" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        ${
                                          language === "zh"
                                            ? `<tr border="0" cellspacing="0" cellpadding="0">
                                               <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 20%;">
                                                 <a href="https://v.douyin.com/kCcv5R1/" style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;" target="_blank">
                                                   <!--[if mso]>
                                                   <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/tiktok.png" style="border: 0px none; height: 20px; width: 20px; font-size: 8px;" alt="Douyin" />
                                                   <![endif]-->
                                                   <!--[if !mso]> <!---->
                                                   <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/tiktok.png" alt="Douyin" style="border: 0; color: #333333; display: block; height: auto; width: 100%; position: relative; font-size: 8px;">
                                                   <!-- <![endif]-->
                                                 </a>
                                               </td>
                                               <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 20%;">
                                                 <a href="https://v.kuaishou.com/GeXfVT" style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;" target="_blank">
                                                   <!--[if mso]>
                                                   <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/kuaishou.png" style="font-size: 8px; border: 0px none; height: 20px; width: 20px;" alt="Kuaishou" />
                                                   <![endif]-->
                                                   <!--[if !mso]> <!---->
                                                   <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/kuaishou.png" alt="Kuaishou" style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;">
                                                   <!-- <![endif]-->
                                                 </a>
                                               </td>
                                               <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 20%;">
                                                 <a href="https://blog.csdn.net/m0_68274698" style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;" target="_blank">
                                                   <!--[if mso]>
                                                   <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/csdn.png" style="font-size: 8px; border: 0px none; height: 20px; width: 20px;" alt="CSDN" />
                                                   <![endif]-->
                                                   <!--[if !mso]> <!---->
                                                   <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/csdn.png" alt="CSDN" style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;">
                                                   <!-- <![endif]-->
                                                 </a>
                                               </td>
                                               <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 20%;">
                                                 <a href="https://weibo.com/u/7989605631" style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;" target="_blank">    
                                                 <!--[if mso]>
                                                 <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/september2025/weibo.png" style="font-size: 8px; border: 0px none; height: 20px; width: 20px;" alt="Weibo" />
                                                 <![endif]-->
                                                 <!--[if !mso]> <!---->
                                                 <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/september2025/weibo.png" alt="Weibo" style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;">
                                                 <!-- <![endif]-->
                                               </a>
                                             </td>
                                             <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 20%;">
                                               <a href="https://space.bilibili.com/1870911731/" style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;" target="_blank">
                                                 <!--[if mso]>
                                                 <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/bilibili.png" style="font-size: 8px; border: 0px none; height: 20px; width: 20px;" alt="Bilibili" />
                                                 <![endif]-->
                                                 <!--[if !mso]> <!---->
                                                 <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/bilibili.png" alt="Bilibili" style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;">
                                                 <!-- <![endif]-->
                                               </a>
                                             </td>
                                           </tr>
                                          `
                                            : `<tr border="0" cellspacing="0" cellpadding="0">
                                         <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 40px;">
                                           <a
                                             href="https://www.facebook.com/pages/OnlyOffice/833032526736775"
                                             style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 10px;"
                                             target="_blank"
                                           >
                                             <!--[if mso]>
                                               <img
                                                 src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/facebook.png"
                                                 style="border: 0px none; height: 36px; width: 36px; font-size: 8px;"
                                                 alt="FB"
                                               />
                                             <![endif]-->
                                             <!--[if !mso]> <!---->
                                               <img
                                                 src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/facebook.png"
                                                 alt="FB"
                                                 style="border: 0; color: #333333; display: block; height: auto; width: 100%; font-size: 8px;"
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
                                                 style="border: 0px none; height: 36px; width: 36px; font-size: 8px;"
                                                 alt="TW"
                                               />
                                             <![endif]-->
                                             <!--[if !mso]> <!---->
                                               <img
                                                 src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/february2024/twitter.png"
                                                 alt="TW"
                                                 style="border: 0; color: #333333; display: block; height: auto; width: 100%; font-size: 8px;"
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
                                                 style="border: 0px none; height: 36px; width: 36px; font-size: 8px;"
                                                 alt="YT"
                                               />
                                             <![endif]-->
                                             <!--[if !mso]> <!---->
                                               <img
                                                 src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/youtube.png"
                                                 alt="YT"
                                                 style="border: 0; color: #333333; display: block; height: auto; width: 100%; font-size: 8px;"
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
                                                 style="border: 0px none; height: 36px; width: 36px; font-size: 8px;"
                                                 alt="IG"
                                               />
                                             <![endif]-->
                                             <!--[if !mso]> <!---->
                                               <img
                                                 src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/august2020/instagram.png"
                                                 alt="IG"
                                                 style="border: 0; color: #333333; display: block; height: auto; width: 100%; font-size: 8px;"
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
                                                 style="border: 0px none; height: 36px; width: 36px; font-size: 8px;"
                                                 alt="LI"
                                               />
                                             <![endif]-->
                                             <!--[if !mso]> <!---->
                                               <img
                                                 src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/indesign.png"
                                                 alt="LI"
                                                 style="border: 0; color: #333333; display: block; height: auto; width: 100%; position: relative; top: 2px; font-size: 8px;"
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
                                                 style="border: 0px none; height: 36px; width: 36px; font-size: 8px;"
                                                 alt="TT"
                                               />
                                             <![endif]-->
                                             <!--[if !mso]> <!---->
                                               <img
                                                 src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/tiktok.png"
                                                 alt="TT"
                                                 style="border: 0; color: #333333; display: block; height: auto; width: 100%; position: relative; top: 2px; font-size: 8px;"
                                               />
                                             <!-- <![endif]-->
                                           </a>
                                         </td>
                                       </tr>
                                          `
                                        }
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="text-align: center; vertical-align: top; width: 100%; max-width: 560px; height: 91px; margin: 0 auto; padding: 0 0 20px; border-collapse: collapse; border: 0; empty-cells: show; border-spacing: 0; " cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr border="0" cellspacing="0" cellpadding="0">
                                <td class="fol" style="color: #666666; font-family: 'Open Sans', Helvetica, Arial, Tahoma;  font-size: 13px; line-height: 19.5px; margin: 0; padding: 0px 24px 40px; vertical-align: top;">
                                    ${t("ThisEmailIsGeneratedAutomatically")}
                                    <br>
                                    <a
                                        href="${baseUrl}/Unsubscribe?id=${unsubscribeId}"
                                        style="color: #FF6F3D;text-decoration: underline;white-space: nowrap;"
                                        target="_blank"
                                    >
                                           ${t("Unsubscribe")}
                                    </a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
  `;
};

export { WebinarsForUserEmail };
