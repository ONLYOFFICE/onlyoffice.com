interface IPasswordReminder {
  portals: {
    domain: string;
    path: string;
  }[];
  language: string;
}

const emailsTranslations: Record<
  string,
  Record<string, string | ((params: Record<string, string>) => string)>
> = {
  en: {
    PortalAddress: "Portal address:",
    ToChangeYourPasswordPleaseFollow: "To change your password please follow",
    ThisLink: "this link",
    PasswordReminder: "Password Reminder",
    YouHaveRequestedAPasswordReminder: `You have requested a password reminder for your portal at ONLYOFFICE.`,
    HereAreYourLoginDetails: `Here are your log in details:`,
    NeedTechHelp: `Need tech help?`,
    SalesQuestions: `Sales Questions`,
    OrderDemo: `Order Demo`,
    SendYourQuestion: "Send your question",
    EmailUs: "Email us",
    SendARequest: "Send a request",
    AllRightsReserved: "All rights reserved",
  },
  de: {
    PortalAddress: "Portaladresse:",
    ToChangeYourPasswordPleaseFollow:
      "Um Ihr Kennwort zu ändern, folgen Sie bitte",
    ThisLink: "diesem Link",
    PasswordReminder: "Kennworterinnerung",
    YouHaveRequestedAPasswordReminder: `Sie haben eine Kennworterinnerung für Ihr Firmenportal auf ONLYOFFICE angefordert.`,
    HereAreYourLoginDetails: `Ihre Zugangsdaten sind:`,
    NeedTechHelp: `Brauchen Tech-Hilfe?`,
    SalesQuestions: `Verkaufsfragen`,
    OrderDemo: `Demo Bestellen`,
    SendYourQuestion: "Ihre Frage senden",
    EmailUs: "Emailen Sie uns",
    SendARequest: "Eine Anfrage senden",
    AllRightsReserved: "Alle Rechte vorbehalten",
  },
  es: {
    PortalAddress: "Dirección de portal:",
    ToChangeYourPasswordPleaseFollow: "Para cambiar su contraseña siga",
    ThisLink: "este enlace",
    PasswordReminder: "Recordatorio de contraseña",
    YouHaveRequestedAPasswordReminder: `Usted ha solicitado un recordatorio de contraseña de acceso a su portal corporativo en ONLYOFFICE.`,
    HereAreYourLoginDetails: `Sus datos de acceso se encuentran a continuación:`,
    NeedTechHelp: `¿Necesita soporte?`,
    SalesQuestions: `Preguntas de Venta`,
    OrderDemo: `Solicitar Demo`,
    SendYourQuestion: "Enviar su Pregunta",
    EmailUs: "Enviar un Email",
    SendARequest: "Enviar Solicitud",
    AllRightsReserved: "Todos los derechos reservados",
  },
  fr: {
    PortalAddress: "Adresse du portail:",
    ToChangeYourPasswordPleaseFollow:
      "Pour changer votre mot de passe s'il vous plaît, suivez",
    ThisLink: "ce lien",
    PasswordReminder: "Rappel de mot de passe",
    YouHaveRequestedAPasswordReminder: `Vous avez demandé un rappel de mot de passe pour votre portail d'entreprise à ONLYOFFICE.`,
    HereAreYourLoginDetails: `Voici vos détails de connexion:`,
    NeedTechHelp: `Besoin d'aide<br/> technique ?`,
    SalesQuestions: `Questions sur les ventes`,
    OrderDemo: `Commandez une démo`,
    SendYourQuestion: "Envoyez votre question",
    EmailUs: "Écrivez-nous",
    SendARequest: "Envoyez une demande",
    AllRightsReserved: "Tous droits réservés",
  },
  it: {
    PortalAddress: "Indirizzo del portale:",
    ToChangeYourPasswordPleaseFollow:
      "Per cambiare la password per favore segui",
    ThisLink: "questo link",
    PasswordReminder: "Recupera la Password",
    YouHaveRequestedAPasswordReminder: `Hai richiesto di recuperare la password per il tuo portale a ONLYOFFICE.`,
    HereAreYourLoginDetails: `Ecco qui i dettagli per il log in:`,
    NeedTechHelp: `Hai bisogno di aiuto?`,
    SalesQuestions: `Domande di vendita`,
    OrderDemo: `Ordina la demo`,
    SendYourQuestion: "Invia la tua domanda",
    EmailUs: "Mandaci una Email",
    SendARequest: "Invia una richiesta",
    AllRightsReserved: "Tutti i diritti riservati",
  },
  ja: {
    PortalAddress: "ポータルのアドレス:",
    ToChangeYourPasswordPleaseFollow: "パスワードを変更するには、",
    ThisLink: "このリンク",
    PWDAfter: "を参照してください",
    PasswordReminder: "パスワード リマインダー",
    YouHaveRequestedAPasswordReminder: `ONLYOFFICE ポータルにパスワード リマインダーをリクエストしました。`,
    HereAreYourLoginDetails: `これが、ログインの詳細です。`,
    NeedTechHelp: `ヘルプが必要ですか？`,
    SalesQuestions: `購入に関する質問`,
    OrderDemo: `デモ ポータルを注文`,
    SendYourQuestion: "質問を送信",
    EmailUs: "メール",
    SendARequest: "リクエストを送信",
    AllRightsReserved: "All rights reserved",
  },
  nl: {
    PortalAddress: "Portaaladres:",
    ToChangeYourPasswordPleaseFollow: "Om uw wachtwoord te wijzigen volgt u",
    ThisLink: "deze link",
    PasswordReminder: "Wachtwoordherinnering",
    YouHaveRequestedAPasswordReminder: `U heeft bij ONLYOFFICE een wachtwoordherinnering voor uw portaal aangevraagd.`,
    HereAreYourLoginDetails: `Hier zijn uw inloggegevens:`,
    NeedTechHelp: `Technische hulp nodig?`,
    SalesQuestions: `Vragen over verkoop`,
    OrderDemo: `Bestel demo`,
    SendYourQuestion: "Stuur ons uw vraag!",
    EmailUs: "E-mail ons",
    SendARequest: "Stuur een aanvraag",
    AllRightsReserved: "Alle rechten voorbehouden",
  },
  pt: {
    PortalAddress: "Endereço do portal:",
    ToChangeYourPasswordPleaseFollow: "Para alterar a sua senha, clique",
    ThisLink: "neste link",
    PasswordReminder: "Lembrete de senha",
    YouHaveRequestedAPasswordReminder: `Você solicitou um lembrete de senha para o seu portal no ONLYOFFICE.`,
    HereAreYourLoginDetails: `Aqui estão as suas informações de login:`,
    NeedTechHelp: `Precisa de ajuda<br/> técnica?`,
    SalesQuestions: `Perguntas sobre vendas`,
    OrderDemo: `Solicitar<br/> demonstração`,
    SendYourQuestion: "Envie a sua pergunta",
    EmailUs: "Envie-nos um e-mail",
    SendARequest: "Envie uma solicitação",
    AllRightsReserved: "Todos os direitos reservados",
  },
  ru: {
    PortalAddress: "Адрес портала:",
    ToChangeYourPasswordPleaseFollow:
      "Для того, чтобы сменить пароль, перейдите по",
    ThisLink: "этой ссылке",
    PasswordReminder: "Восстановление пароля",
    YouHaveRequestedAPasswordReminder: `Вами был отправлен запрос на восстановление пароля для Вашего портала ONLYOFFICE.`,
    HereAreYourLoginDetails: `Параметры, необходимые для входа на портал, Вы можете найти ниже:`,
    NeedTechHelp: `Нужна помощь?`,
    SalesQuestions: `Вопросы по покупке`,
    OrderDemo: `Заказ демонстрации`,
    SendYourQuestion: "Задайте вопрос",
    EmailUs: "Напишите нам",
    SendARequest: "Отправьте запрос",
    AllRightsReserved: "Все права защищены",
  },
  cs: {
    PortalAddress: "Adresa portálu:",
    ToChangeYourPasswordPleaseFollow: "Pro změnu hesla prosím následujte",
    ThisLink: "tento odkaz",
    PasswordReminder: "Připomenutí hesla",
    YouHaveRequestedAPasswordReminder: `Zažádali jste o připomenutí hesla pro váš portál na ONLYOFFICE.`,
    HereAreYourLoginDetails: `Zde je váš detailní záznam:`,
    NeedTechHelp: `Potřebujete technickou podporu?`,
    SalesQuestions: `Prodejní otázky`,
    OrderDemo: `Demo objednávky`,
    SendYourQuestion: "Odeslat váš dotaz",
    EmailUs: "Napište nám",
    SendARequest: "Odeslat požadavek",
    AllRightsReserved: "Všechna práva vyhrazena",
  },
  zh: {
    PortalAddress: "门户地址:",
    ToChangeYourPasswordPleaseFollow: "请点击",
    ThisLink: "该链接",
    PWDAfter: "更改密码",
    PasswordReminder: "密码提醒",
    YouHaveRequestedAPasswordReminder: `您已在ONLYOFFICE上申请门户密码提醒。`,
    HereAreYourLoginDetails: `这是您的登录信息：`,
    NeedTechHelp: `需要技术帮助？`,
    SalesQuestions: `销售问题`,
    OrderDemo: `预订演示`,
    SendYourQuestion: "发送问题",
    EmailUs: "给我们发邮件",
    SendARequest: "发送请求",
    AllRightsReserved: "保留所有权利",
  },
};

const PasswordReminder = ({ portals, language }: IPasswordReminder) => {
  const t = (key: string, params?: Record<string, string>): string => {
    const langObj = emailsTranslations[language] || emailsTranslations.en;
    const val = langObj[key];
    return typeof val === "function" ? val(params || {}) : val || key;
  };
  const portalsHtml = portals
    .map(
      ({ domain, path }) => `
      <div style="font-size:14px; line-height:22px; padding-top:24px;">
        ${t("PortalAddress")}
        <a href="${domain}" style="color: #FF6F3D;">
          <b>${domain}</b>
        </a>
        <br />
        <p style="margin: 0; padding-top:8px;">
         ${t("ToChangeYourPasswordPleaseFollow")}
          <a href="${domain}${path}" style="color: #FF6F3D;">
            ${t("ThisLink")}
          </a>
          ${language == "ja" || language == "zh" ? t("PWDAfter") : "."}
        </p>
      </div>
    `,
    )
    .join("");

  return `
    <body background="#ffffff" style="background: linear-gradient(#ffffff, #ffffff); background-color: #ffffff; margin: 0; padding: 0; text-align: center; width: 100%; font-family: Arial, sans-serif; font-size: 14px; color: #333333;">
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
                    href="https://www.onlyoffice.com/${language !== "en" ? language : ""}"
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
                    ${t("PasswordReminder")}
                  </h1>
                  <p style="border-top: 1px solid #CCCCCC; font-size:14px; line-height:21px; margin: 0; padding-top:24px;">
                    ${t("YouHaveRequestedAPasswordReminder")}
                    <br />
                    <br />
                    ${t("HereAreYourLoginDetails")}
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
                ${t("NeedTechHelp")}
              </td>
              <td style="font-size: 13px; font-weight: 600; line-height: 1.33em; text-transform: uppercase; vertical-align: top; margin: 0; padding: 0; width: 180px; height: 16px;">
                ${t("SalesQuestions")}
              </td>
              <td style="font-size: 13px; font-weight: 600; line-height: 1.33em; text-transform: uppercase; vertical-align: top; margin: 0; padding: 0; width: 210px; height: 16px;">
                ${t("OrderDemo")}
              </td>
            </tr>
            <tr border="0" cellspacing="0" cellpadding="0">
              <td style="vertical-align: top; margin: 0; padding: 8px 0 30px; width: 210px;-moz-border-radius-bottomleft: 6px; -webkit-border-bottom-left-radius: 6px; border-bottom-left-radius: 6px;">
                <a
                  href="https://www.onlyoffice.com/${language !== "en" ? `${language}/` : ""}support-contact-form"
                  target="_blank"
                  style="color: #333333; text-decoration: underline;"
                >
                  ${t("SendYourQuestion")}
                </a>
              </td>
              <td style="vertical-align: top; margin: 0; padding: 8px 0 30px; width: 180px;">
                <a
                  href="mailto:sales@onlyoffice.com"
                  style="color: #333333; text-decoration: underline;"
                >
                  ${t("EmailUs")}
                </a>
              </td>
              <td style="vertical-align: top; margin: 0; padding: 8px 0 30px; width: 210px;-moz-border-radius-bottomright: 6px; -webkit-border-bottom-right-radius: 6px; border-bottom-right-radius: 6px;">
                <a
                  href="https://www.onlyoffice.com/${language !== "en" ? `${language}/` : ""}demo-order"
                  target="_blank"
                  style="color: #333333; text-decoration: underline;"
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
                style="width: 600px; vertical-align: top; margin: 0; padding: 0 30px 40px;"
              >
                <p style="color: #666666; font-family: Arial, Tahoma; font-size: 13px; line-height: 1.5em; margin: 0; padding: 0; text-align: center; width: 540px;">
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

export { PasswordReminder };
