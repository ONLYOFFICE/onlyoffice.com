interface ISubscribeEmail {
  baseUrl: string;
  subscribe: string;
  language: string;
}

const emailsTranslations: Record<
  string,
  Record<string, string | ((params: Record<string, string>) => string)>
> = {
  en: {
    ConfirmEmailAddress: "Confirm email address",
    ToConfirmYourEmailPleaseFollow: "To confirm your email, please follow",
    ThisLink: "this link",
    NeedTechHelp: `Need tech help?`,
    SalesQuestions: `Sales Questions`,
    OrderDemo: `Order Demo`,
    SendYourQuestion: "Send your question",
    EmailUs: "Email us",
    SendARequest: "Send a request",
    AllRightsReserved: "All rights reserved",
  },
  de:{
    ConfirmEmailAddress: "Bestätigen Sie Ihre E-Mail Adresse",
    ToConfirmYourEmailPleaseFollow: "Um Ihre E-Mail-Adresse zu bestätigen, folgen Sie bitte",
    ThisLink: "diesem Link",
    NeedTechHelp: `Brauchen Tech-Hilfe?`,
    SalesQuestions: `Verkaufsfragen`,
    OrderDemo: `Demo Bestellen`,
    SendYourQuestion: "Ihre Frage senden",
    EmailUs: "Emailen Sie uns",
    SendARequest: "Eine Anfrage senden",
    AllRightsReserved: "Alle Rechte vorbehalten",
  },
  es:{
    ConfirmEmailAddress: "Confirma tu dirección de correo electrónico",
    ToConfirmYourEmailPleaseFollow: "Para сonfirmar tu dirección de correo electrónico, sigue",
    ThisLink: "este enlace",
    NeedTechHelp: `¿Necesita soporte?`,
    SalesQuestions: `Preguntas de Venta`,
    OrderDemo: `Solicitar Demo`,
    SendYourQuestion: "Enviar su Pregunta",
    EmailUs: "Enviar un Email",
    SendARequest: "Enviar Solicitud",
    AllRightsReserved: "Todos los derechos reservados",
  },
  fr:{
    ConfirmEmailAddress: "Confirmez votre adresse e-mail",
    ToConfirmYourEmailPleaseFollow: "Pour confirmer votre adresse e-mail, veuillez suivre",
    ThisLink: "ce lien",
    NeedTechHelp: `Besoin d'aide<br/> technique ?`,
    SalesQuestions: `Questions sur les ventes`,
    OrderDemo: `Commandez une démo`,
    SendYourQuestion: "Envoyez votre question",
    EmailUs: "Écrivez-nous",
    SendARequest: "Envoyez une demande",
    AllRightsReserved: "Tous droits réservés",
  },
  it:{
    ConfirmEmailAddress: "Conferma il tuo indirizzo email",
    ToConfirmYourEmailPleaseFollow: "Per confermare il tuo indirizzo email, clicca su",
    ThisLink: "questo link",
    NeedTechHelp: `Hai bisogno di aiuto?`,
    SalesQuestions: `Domande di vendita`,
    OrderDemo: `Ordina la demo`,
    SendYourQuestion: "Invia la tua domanda",
    EmailUs: "Mandaci una Email",
    SendARequest: "Invia una richiesta",
    AllRightsReserved: "Tutti i diritti riservati",
  },
  ja:{
    ConfirmEmailAddress: "メールアドレスをご確認ください",
    ToConfirmYourEmailPleaseFollow: "メールアドレスを確認するには、",
    ThisLink: "このリンク",
    PWDAfter: "をクリックしてください",
    NeedTechHelp: `ヘルプが必要ですか？`,
    SalesQuestions: `購入に関する質問`,
    OrderDemo: `デモ ポータルを注文`,
    SendYourQuestion: "質問を送信",
    EmailUs: "メール",
    SendARequest: "リクエストを送信",
    AllRightsReserved: "All rights reserved",
  },
  nl:{
    ConfirmEmailAddress: "Bevestig e-mailadres",
    ToConfirmYourEmailPleaseFollow: "Om uw e-mail te bevestigen volgt u",
    ThisLink: "deze link",
    NeedTechHelp: `Technische hulp nodig?`,
    SalesQuestions: `Vragen over verkoop`,
    OrderDemo: `Bestel demo`,
    SendYourQuestion: "Stuur ons uw vraag!",
    EmailUs: "E-mail ons",
    SendARequest: "Stuur een aanvraag",
    AllRightsReserved: "Alle rechten voorbehouden",
  },
  pt:{
    ConfirmEmailAddress: "Confirmar endereço de e-mail",
    ToConfirmYourEmailPleaseFollow: "Para confirmar seu e-mail, siga",
    ThisLink: "este link",
    NeedTechHelp: `Precisa de ajuda<br/> técnica?`,
    SalesQuestions: `Perguntas sobre vendas`,
    OrderDemo: `Solicitar<br/> demonstração`,
    SendYourQuestion: "Envie a sua pergunta",
    EmailUs: "Envie-nos um e-mail",
    SendARequest: "Envie uma solicitação",
    AllRightsReserved: "Todos os direitos reservados",
  },
  ru: {
    ConfirmEmailAddress: "Подтвердите адрес электронной почты",
    ToConfirmYourEmailPleaseFollow: "Для подтверждения адреса электронной почты перейдите по",
    ThisLink: "ссылке",
    NeedTechHelp: `Нужна помощь?`,
    SalesQuestions: `Вопросы по покупке`,
    OrderDemo: `Заказ демонстрации`,
    SendYourQuestion: "Задайте вопрос",
    EmailUs: "Напишите нам",
    SendARequest: "Отправьте запрос",
    AllRightsReserved: "Все права защищены",
  },
  cs: {
    ConfirmEmailAddress: "Potrvdit emailovou adresu",
    ToConfirmYourEmailPleaseFollow: "Pro potvrzení emailu prosím následujte",
    ThisLink: "tento odkaz",
    NeedTechHelp: `Potřebujete technickou podporu?`,
    SalesQuestions: `Prodejní otázky`,
    OrderDemo: `Demo objednávky`,
    SendYourQuestion: "Odeslat váš dotaz",
    EmailUs: "Napište nám",
    SendARequest: "Odeslat požadavek",
    AllRightsReserved: "Všechna práva vyhrazena",
  },
  zh: {
    ConfirmEmailAddress: "确认电子邮件地址",
    ToConfirmYourEmailPleaseFollow: "请点击",
    ThisLink: "此链接",
    PWDAfter: "，确认您的电子邮件",
    NeedTechHelp: `需要技术帮助？`,
    SalesQuestions: `销售问题`,
    OrderDemo: `预订演示`,
    SendYourQuestion: "发送问题",
    EmailUs: "给我们发邮件",
    SendARequest: "发送请求",
    AllRightsReserved: "保留所有权利",
  },
};

const SubscribeEmail = ({ baseUrl, subscribe, language }: ISubscribeEmail) => {
  const t = (key: string, params?: Record<string, string>): string => {
    const langObj = emailsTranslations[language] || emailsTranslations.en;
    const val = langObj[key];
    return typeof val === "function" ? val(params || {}) : val || key;
  };
  return `
    <body background="#ffffff" style="background: linear-gradient(#ffffff, #ffffff); background-color: #ffffff; margin: 0; padding: 0; text-align: center; width: 100%; font-family: Arial, sans-serif; font-size: 14px; color: #333;">
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
                    href="https://www.onlyoffice.com/${language !== 'en' ? language : ''}"
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
                    ${t("ConfirmEmailAddress")}
                  </h1>

                  <p style="line-height:18px;margin-top:20px;">
                    <div style="margin-top:20px;">
                      <p style="margin-top:5px;">
                        ${t("ToConfirmYourEmailPleaseFollow")}
                        <a href="${baseUrl}/Subscribe?id=${subscribe}">${t("ThisLink")}</a>
                        ${(language == 'ja' || language == 'zh') ? t("PWDAfter") : "."}
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
                ${t("NeedTechHelp")}
              </td>
              <td style="vertical-align: top; margin: 0; padding: 0; width: 180px; height: 16px; background: #f6f6f6;">
                ${t("SalesQuestions")}
              </td>
              <td style="vertical-align: top; margin: 0; padding: 0; width: 210px; height: 16px; background: #f6f6f6;">
                ${t("OrderDemo")}
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td style="vertical-align: top; margin: 0; padding: 0 0 30px; width: 210px; background: #f6f6f6;-moz-border-radius-bottomleft: 6px; -webkit-border-bottom-left-radius: 6px; border-bottom-left-radius: 6px;">
                <a
                  href="https://www.onlyoffice.com/${language !== 'en' ? `${language}/` : ''}support-contact-form"
                  target="_blank"
                  style="color: #333;"
                >
                  ${t("SendYourQuestion")}
                </a>
              </td>
              <td style="vertical-align: top; margin: 0; padding: 0 0 30px; width: 180px; background: #f6f6f6;">
                <a href="mailto:sales@onlyoffice.com" style="color: #333;">
                  ${t("EmailUs")}
                </a>
              </td>
              <td style="vertical-align: top; margin: 0; padding: 0 0 30px; width: 210px; background: #f6f6f6;-moz-border-radius-bottomright: 6px; -webkit-border-bottom-right-radius: 6px; border-bottom-right-radius: 6px;">
                <a
                  href="https://www.onlyoffice.com/${language !== 'en' ? `${language}/` : ''}demo-order"
                  target="_blank"
                  style="color: #333;"
                >
                  ${t("SendARequest")}
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
                  ${
                    language === "zh"
                      ? `<tr border="0" cellspacing="0" cellpadding="0">
                         <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 16%;">
                           <a href="https://v.douyin.com/kCcv5R1/" style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;" target="_blank">
                             <!--[if mso]>
                             <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/tiktok.png" style="border: 0px none; height: 20px; width: 20px; font-size: 8px;" alt="Douyin" />
                             <![endif]-->
                             <!--[if !mso]> <!---->
                             <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/december2022/tiktok.png" alt="Douyin" style="border: 0; color: #333333; display: block; height: auto; width: 100%; position: relative; font-size: 8px;">
                             <!-- <![endif]-->
                           </a>
                         </td>
                         <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 16%;">
                           <a href="https://v.kuaishou.com/GeXfVT" style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;" target="_blank">
                             <!--[if mso]>
                             <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/kuaishou.png" style="font-size: 8px; border: 0px none; height: 20px; width: 20px;" alt="Kuaishou" />
                             <![endif]-->
                             <!--[if !mso]> <!---->
                             <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/kuaishou.png" alt="Kuaishou" style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;">
                             <!-- <![endif]-->
                           </a>
                         </td>
                         <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 16%;">
                           <a href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAituLIinbu_T7phDvBDiqiVsev4z3kjH95MZsEpnq7Lv2MnXBh-Sp9tuAHzFnI-Tk/" style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;" target="_blank">
                             <!--[if mso]>
                             <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/xiaohongshu.png" style="font-size: 8px; border: 0px none; height: 20px; width: 20px;" alt="Toutiao" />
                             <![endif]-->
                             <!--[if !mso]> <!---->
                             <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/xiaohongshu.png" alt="Toutiao" style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;">
                             <!-- <![endif]-->
                           </a>
                         </td>
                         <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 16%;">
                           <a href="https://blog.csdn.net/m0_68274698" style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;" target="_blank">
                             <!--[if mso]>
                             <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/csdn.png" style="font-size: 8px; border: 0px none; height: 20px; width: 20px;" alt="CSDN" />
                             <![endif]-->
                             <!--[if !mso]> <!---->
                             <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/csdn.png" alt="CSDN" style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;">
                             <!-- <![endif]-->
                           </a>
                         </td>
                         <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 16%;">
                           <a href="https://www.xiaohongshu.com/user/profile/627e271800000000210253ec" style="border: 0; display: block; height: auto; Margin: 0 auto; padding: 0; width: 20px;" target="_blank">    
                           <!--[if mso]>
                           <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/toutiao.png" style="font-size: 8px; border: 0px none; height: 20px; width: 20px;" alt="Xiaohongshu" />
                           <![endif]-->
                           <!--[if !mso]> <!---->
                           <img src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/june2023/toutiao.png" alt="Xiaohongshu" style="font-size: 8px; border: 0; color: #333333; display: block; height: auto; width: 100%;">
                           <!-- <![endif]-->
                         </a>
                       </td>
                       <td style="Margin: 0; padding: 0; vertical-align: bottom; width: 16%;">
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
            <tr border="0" cellspacing="0" cellpadding="0">
              <td
                colspan="4"
                style="width: 600px; vertical-align: top; margin: 0; padding: 20px 30px 15px;"
              >
                <p style="color: #7b7b7b; font-family: Arial, Tahoma; font-size: 12px; margin: 0; padding: 0; text-align: center; width: 540px;">
                  © Ascensio System SIA ${new Date().getFullYear()}. ${t("AllRightsReserved")}.
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
