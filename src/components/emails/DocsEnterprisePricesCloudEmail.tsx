import { IQuoteModalFormData } from "@src/components/widgets/pricing/QuoteModal";
import { IDocsEnterprisePricesFormData } from "@src/components/templates/DocsEnterprisePrices/sections/Hero";
import { ILocale } from "@src/types/locale";

type TSelectedOption = "Selected" | "Not selected";

interface IDocsEnterprisePricesCloudEmail {
  fullName: IQuoteModalFormData["fullName"];
  email: IQuoteModalFormData["email"];
  phone: IQuoteModalFormData["phone"];
  companyName: IQuoteModalFormData["companyName"];
  cloudType: IDocsEnterprisePricesFormData["cloudType"];
  supportLevel: IDocsEnterprisePricesFormData["supportLevel"];
  trainingCourses: TSelectedOption;
  language: ILocale["locale"];
  affiliateId: string;
  affiliateToken: string;
  errorText: string;
}

const DocsEnterprisePricesCloudEmail = ({
  fullName,
  email,
  phone,
  companyName,
  cloudType,
  supportLevel,
  trainingCourses,
  language,
  affiliateId,
  affiliateToken,
  errorText,
}: IDocsEnterprisePricesCloudEmail) => {
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
              <td style="margin: 0; padding: 0; background-color: #fff; height: 65px; padding: 20px 0 0 30px;">
                <div style="text-align: left; height: 65px; width: 570px; margin: 0; padding: 0;">
                  <a
                    href="https://www.onlyoffice.com/"
                    style="text-decoration: none; display: inline-block; width: 216px; height: 35px; margin: 0; padding: 0;"
                    target="_blank"
                  >
                    <img
                      src="https://static.onlyoffice.com/media/newsletters/images/mail_logo.png"
                      style="border: 0px none; width: 216px; height: 35px; margin: 0; padding: 0;"
                      alt="ONLYOFFICE"
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td style="margin: 0; padding: 15px 30px 15px; background-color: #f6f6f6; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px;">
                <div style="font-family: Arial; font-size: 14px; line-height: 18px; color: #333; margin: 0; padding: 0; width: 540px; height: auto; overflow: hidden; word-wrap: break-word; vertical-align: top; text-align: left; border: 0 none;">
                  <p style="margin-top:10px;">
                    Docs Enterprise Request (Cloud)
                  </p>
                  <p style="margin-top:20px;">
                    <b>Full name</b>
                    <br />
                    ${fullName}
                  </p>
                  <p style="margin-top:5px;">
                    <b>Email</b>
                    <br />
                    ${email}
                  </p>
                  <p style="margin-top:5px;">
                    <b>Phone / WeChat</b>
                    <br />
                    ${phone}
                  </p>
                  <p style="margin-top:5px;">
                    <b>Company Name</b>
                    <br />
                    ${companyName}
                  </p>
                  <p style="margin-top:5px;">
                    <b>Language</b>
                    <br />
                    ${language}
                  </p>
                  <p style="margin-top:20px;">
                    <b>Cloud type</b>
                    <br />
                    ${cloudType}
                  </p>
                  <p style="margin-top:20px;">
                    <b>Support level</b>
                    <br />
                    ${supportLevel}
                  </p>
                  <p style="margin-top:20px;">
                    <b>Training courses</b>
                    <br />
                    ${trainingCourses}
                  </p>
                  <p style="margin-top:20px;">
                    <b>Affiliate parameters</b>
                    <br />
                    affiliateId: ${affiliateId}, affiliateToken: ${affiliateToken}
                  </p>
                  <p style="margin-top:5px;">
                    <b>Error text (Empty if success)</b>
                    <br />
                    ${errorText}
                  </p>
                </div>
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

export { DocsEnterprisePricesCloudEmail };
