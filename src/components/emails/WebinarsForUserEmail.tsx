interface IWebinarsForUserEmail {
  webinarTheme: string;
  webinarDate: string;
  language: string;
  baseUrl: string;
  unsubscribeId: string;
}

const emailsTranslations: Record<
  string,
  Record<string, string | ((params: Record<string, string>) => string)>
> = {
  en: {
    Hello: "Hello!",
    ThankYouForRegistering: ({ webinarTheme }) =>
      `Thank you for registering for ${webinarTheme} webinar.`,
    SaveTheDate: "Save the date:",
    WebinarsAreLiveStreamed: `ONLYOFFICE webinars are live streamed via our <a target="_blank" style="color: #FF6F3D;" href="https://www.youtube.com/user/onlyofficeTV">YouTube channel</a>: we’ll send you the exact link in advance.`,
    QuestionsSuggestions: `If you have any questions or suggestions for the upcoming webinar, you’re welcome to contact us at <a target="_blank" style="color: #FF6F3D;" href="mailto:webinars@onlyoffice.com">webinars@onlyoffice.com</a>.`,
    CheckAllOnlineEvents: `Check all our online events <a target="_blank" style="color: #FF6F3D;" href="https://onlyoffice.com/webinars">here</a>. If you know someone who might be interested in mastering ONLYOFFICE, we’ll appreciate you sharing this link with them.`,
    TrulyYours: "Truly yours,",
    ONLYOFFICETeam: "ONLYOFFICE Team",
    ThisEmailIsGeneratedAutomatically:
      "This email is generated automatically and you do not need to answer it.",
    Unsubscribe: "Click here to unsubscribe",
  },
  de: {
    Hello: "Hallo!",
    ThankYouForRegistering: ({ webinarTheme }) =>
      `Vielen Dank, dass Sie sich für das Webinar „${webinarTheme}“ angemeldet haben.`,
    SaveTheDate: "Merken Sie sich den Termin vor:",
    WebinarsAreLiveStreamed: `ONLYOFFICE Webinare können Sie sich online über unseren <a target="_blank" style="color: #FF6F3D;" href="https://www.youtube.com/user/onlyofficeTV">YouTube-Kanal</a> ansehen: Wir senden Ihnen einen gültigen Link im Voraus.`,
    QuestionsSuggestions: `Wenn Sie Fragen oder Ideen zum kommenden Webinar haben, können Sie uns unter <a target="_blank" style="color: #FF6F3D;" href="mailto:webinars@onlyoffice.com">webinars@onlyoffice.com</a> kontaktieren.`,
    CheckAllOnlineEvents: `<a target="_blank" style="color: #FF6F3D;" href="https://onlyoffice.com/de/webinars">Hier</a> finden Sie alle unsere Online-Veranstaltungen. Teilen Sie diesen Link ihren Freund/innen mit, die auch mehr über ONLYOFFICE wissen möchten.`,
    TrulyYours: "Mit freundlichen Grüßen,",
    ONLYOFFICETeam: "ONLYOFFICE Team",
    ThisEmailIsGeneratedAutomatically:
      "Diese E-Mail wird automatisch generiert und erfordert keine Antwort.",
    Unsubscribe: "Zum Abbestellen hier klicken",
  },
  es: {
    Hello: "¡Hola!",
    ThankYouForRegistering: ({ webinarTheme }) =>
      `Gracias por registrarte en el webinar "${webinarTheme}".`,
    SaveTheDate: "Recuerda la fecha:",
    WebinarsAreLiveStreamed: `Los webinars de ONLYOFFICE se transmiten en directo en nuestro <a target="_blank" style="color: #FF6F3D;" href="https://www.youtube.com/user/onlyofficeTV">canal de YouTube</a>: te enviaremos el enlace exacto de antemano.`,
    QuestionsSuggestions: `Si tienes alguna pregunta o sugerencia para el próximo webinar, te invitamos a contactar con nosotros a través de <a target="_blank" style="color: #FF6F3D;" href="mailto:webinars@onlyoffice.com">webinars@onlyoffice.com</a>.`,
    CheckAllOnlineEvents: `Echa un vistazo a todos nuestros eventos en línea <a target="_blank" style="color: #FF6F3D;" href="https://onlyoffice.com/es/webinars">aquí</a>. Si conoces a alguien que pueda estar interesado en aprender más sobre ONLYOFFICE, te agradeceremos que compartas este enlace con ellos.`,
    TrulyYours: "Cordialmente,",
    ONLYOFFICETeam: "Equipo de ONLYOFFICE",
    ThisEmailIsGeneratedAutomatically:
      "Este correo electrónico se ha generado automáticamente y no es necesario que lo respondas.",
    Unsubscribe: "Haz clic aquí para cancelar la suscripción",
  },
  fr: {
    Hello: "Bonjour,",
    ThankYouForRegistering: ({ webinarTheme }) =>
      `Merci pour votre inscription au webinaire "${webinarTheme}".`,
    SaveTheDate: "Ajoutez la date à votre agenda :",
    WebinarsAreLiveStreamed: `Les webinaires ONLYOFFICE sont les sessions en direct diffusées via notre <a target="_blank" style="color: #FF6F3D;" href="https://www.youtube.com/user/onlyofficeTV">chaîne YouTube</a> : nous allons vous envoyer le lien à l'avance.`,
    QuestionsSuggestions: `Si vous avez des questions ou des suggestions pour des webinaires à venir, n'hésitez pas à nous contacter à <a target="_blank" style="color: #FF6F3D;" href="mailto:webinars@onlyoffice.com">webinars@onlyoffice.com</a>.`,
    CheckAllOnlineEvents: `Regardez la liste complète des événements en ligne <a target="_blank" style="color: #FF6F3D;" href="https://onlyoffice.com/fr/webinars">ici</a>. Merci de partager ce lien avec les personnes qui s'intéressent au projet ONLYOFFICE.`,
    TrulyYours: "Bien à vous,",
    ONLYOFFICETeam: "Equipe ONLYOFFICE",
    ThisEmailIsGeneratedAutomatically:
      "Ce courriel a été généré automatiquement. Merci de ne pas y répondre.",
    Unsubscribe: "Cliquez ici pour vous désabonner",
  },
  it: {
    Hello: "Ciao!",
    ThankYouForRegistering: ({ webinarTheme }) =>
      `Grazie per esserti registrato al webinar "${webinarTheme}".`,
    SaveTheDate: "Non perderlo:",
    WebinarsAreLiveStreamed: `I webinar di ONLYOFFICE sono trasmessi in diretta streaming sul nostro <a target="_blank" style="color: #FF6F3D;" href="https://www.youtube.com/user/onlyofficeTV">canale YouTube</a>: ti invieremo il link esatto in anticipo.`,
    QuestionsSuggestions: `Se hai domande o suggerimenti per il prossimo webinar, non esitare a contattarci a <a target="_blank" style="color: #FF6F3D;" href="mailto:webinars@onlyoffice.com">webinars@onlyoffice.com</a>.`,
    CheckAllOnlineEvents: `Controlla tutti i nostri eventi online <a target="_blank" style="color: #FF6F3D;" href="https://onlyoffice.com/it/webinars">qui</a>. Se conosci qualcuno che potrebbe essere interessato a imparare a usare ONLYOFFICE, ti saremo grati se condividerai questo link con loro.`,
    TrulyYours: "Cordialmente,",
    ONLYOFFICETeam: "Il team di ONLYOFFICE",
    ThisEmailIsGeneratedAutomatically:
      "Questo messaggio è stato generato automaticamente, ti preghiamo pertanto di non rispondere a questa e-mail.",
    Unsubscribe: "Per cancellarti dalla newsletter clicca qui",
  },
  ja: {
    Hello: "こんにちは！",
    ThankYouForRegistering: ({ webinarTheme }) =>
      `「${webinarTheme}」ウェビナーにご登録いただき、誠にありがとうございます。`,
    SaveTheDate: "開催日：",
    WebinarsAreLiveStreamed: `ONLYOFFICEウェビナーは<a target="_blank" style="color: #FF6F3D;" href="https://www.youtube.com/user/onlyofficeTV">YouTubeチャンネルに</a>ライブ・ストリームで実施されます。予めリンクをお送りします。`,
    QuestionsSuggestions: `今後のウェビナーについてご質問やご提案がございましたら、<a target="_blank" style="color: #FF6F3D;" href="mailto:webinars@onlyoffice.com">webinars @ onlyoffice.com</a>までお問い合わせください。`,
    CheckAllOnlineEvents: `<a target="_blank" style="color: #FF6F3D;" href="https://onlyoffice.com/ja/webinars">ここで</a>すべてのオンラインイベントはこちらです。 ONLYOFFICEに興味があるかもしれない人をご存知でしたら、このリンクを共有していただければ光栄です。`,
    ONLYOFFICETeam: "ONLYOFFICEチーム",
    ThisEmailIsGeneratedAutomatically:
      "このメールは自動的に生成されるため、返信する必要はありません。",
    Unsubscribe: "登録を解除するには、こちらをクリック下さい。",
  },
  nl: {
    Hello: "Hallo!",
    ThankYouForRegistering: ({ webinarTheme }) =>
      `Dank u voor uw aanmelding voor het "${webinarTheme}" webinar.`,
    SaveTheDate: "Hou de datum vrij:",
    WebinarsAreLiveStreamed: `ONLYOFFICE webinars worden live gestreamd via ons <a target="_blank" style="color: #FF6F3D;" href="https://www.youtube.com/user/onlyofficeTV">YouTube kanaal</a>: we sturen u van tevoren de exacte link.`,
    QuestionsSuggestions: `Als u vragen of suggesties heeft voor het komende webinar, kunt u contact met ons opnemen via <a target="_blank" style="color: #FF6F3D;" href="mailto:webinars@onlyoffice.com">webinars@onlyoffice.com</a>.`,
    CheckAllOnlineEvents: `Bekijk <a target="_blank" style="color: #FF6F3D;" href="https://onlyoffice.com/nl/webinars">hier</a> al onze online evenementen. Als u iemand kent die misschien geïnteresseerd is om ONLYOFFICE onder de knie te krijgen, zullen we het op prijs stellen als u deze link met hen deelt.`,
    TrulyYours: "Hoogachtend,",
    ONLYOFFICETeam: "ONLYOFFICE Team",
    ThisEmailIsGeneratedAutomatically:
      "Deze e-mail wordt automatisch gegenereerd en u hoeft deze niet te beantwoorden..",
    Unsubscribe: "Klik hier om uit te schrijven",
  },
  pt: {
    Hello: "Oi!",
    ThankYouForRegistering: ({ webinarTheme }) =>
      `Obrigado por se inscrever no webinar “${webinarTheme}”.`,
    SaveTheDate: "Marque na agenda:",
    WebinarsAreLiveStreamed: `Os webinars do ONLYOFFICE são transmitidos ao vivo em nosso <a target="_blank" style="color: #FF6F3D;" href="https://www.youtube.com/user/onlyofficeTV">canal do YouTube</a>: enviaremos o link exato com antecedência.`,
    QuestionsSuggestions: `Se tiver dúvidas ou sugestões para o próximo seminário online, entre em contato conosco pelo e-mail <a target="_blank" style="color: #FF6F3D;" href="mailto:webinars@onlyoffice.com">webinars@onlyoffice.com</a>.`,
    CheckAllOnlineEvents: `Confira todos os nossos eventos online <a target="_blank" style="color: #FF6F3D;" href="https://onlyoffice.com/pt/webinars">aqui</a>. Se conhece alguém que possa estar interessado em dominar o ONLYOFFICE, ficaremos gratos se compartilhar este link com essa pessoa.`,
    TrulyYours: "Cumprimentos,",
    ONLYOFFICETeam: "Equipe do ONLYOFFICE",
    ThisEmailIsGeneratedAutomatically:
      "Este email é gerado automaticamente, não precisa respondê-lo.",
    Unsubscribe: "Clique aqui para cancelar subscrição",
  },
  ru: {
    Hello: "Здравствуйте!",
    ThankYouForRegistering: ({ webinarTheme }) =>
      `Спасибо за регистрацию на вебинар "${webinarTheme}".`,
    SaveTheDate: "Сохраните дату",
    WebinarsAreLiveStreamed: `Вы сможете посмотреть трансляцию на нашем <a target="_blank" style="color: #FF6F3D;" href="https://www.youtube.com/user/onlyofficeTV">YouTube-канале</a>: мы заранее пришлем вам ссылку.`,
    QuestionsSuggestions: `Если у вас есть какие-либо вопросы или предложения, пишите нам на <a target="_blank" style="color: #FF6F3D;" href="mailto:webinars@onlyoffice.com">webinars@onlyoffice.com</a>.`,
    CheckAllOnlineEvents: `Посмотрите список всех онлайн-событий ONLYOFFICE <a target="_blank" style="color: #FF6F3D;" href="https://onlyoffice.com/ru/webinars">на сайте</a>. Будем признательны, если вы поделитесь ссылкой с друзьями, которым мог бы быть интересен наш проект.`,
    TrulyYours: "С уважением,",
    ONLYOFFICETeam: "Команда ONLYOFFICE",
    ThisEmailIsGeneratedAutomatically:
      "Это письмо создано автоматически, отвечать на него не нужно.",
    Unsubscribe: "Кликните здесь, чтобы отписаться",
  },
  cs: {
    Hello: "Dobrý den!",
    ThankYouForRegistering: ({ webinarTheme }) =>
      `Děkujeme, že jste se zaregistrovali na webinář „${webinarTheme}“.`,
    SaveTheDate: "Uložte si datum:",
    WebinarsAreLiveStreamed: `Webináře ONLYOFFICE jsou živě streamovány na našem <a target="_blank" style="color: #FF6F3D;" href="https://www.youtube.com/user/onlyofficeTV">kanálu na YouTube</a>: předem vám pošleme přesný odkaz.`,
    QuestionsSuggestions: `Máte-li jakékoli dotazy nebo návrhy týkající se nadcházejícího webináře, můžete nás kontaktovat na adrese <a target="_blank" style="color: #FF6F3D;" href="mailto:webinars@onlyoffice.com">webinars@onlyoffice.com</a>.`,
    CheckAllOnlineEvents: `Podívejte se na všechny naše online události <a target="_blank" style="color: #FF6F3D;" href="https://onlyoffice.com/cs/webinars">zde</a>. Pokud znáte někoho, kdo by mohl mít zájem o zvládnutí ONLYOFFICE, oceníme, pokud mu zašlete tento odkaz.`,
    TrulyYours: "S přátelským pozdravem,",
    ONLYOFFICETeam: "tým ONLYOFFICE",
    ThisEmailIsGeneratedAutomatically:
      "Tento e-mail je generován automaticky a nemusíte na něj odpovídat.",
    Unsubscribe: "Kliknutím sem se odhlásíte",
  },
  zh: {
    Hello: "您好！",
    ThankYouForRegistering: ({ webinarTheme }) =>
      `感谢您报名参加"${webinarTheme}"网络研讨会。`,
    SaveTheDate: "日期：",
    WebinarsAreLiveStreamed: `网络研讨会具体链接会通过电子邮件提前发送给您。`,
    QuestionsSuggestions: `如果您对即将举行的网络研讨会有任何疑问或建议，欢迎通过  <a target="_blank" style="color: #FF6F3D;" href="mailto:webinars@onlyoffice.com">webinars@onlyoffice.com</a> 与我们联系。`,
    CheckAllOnlineEvents: `<a target="_blank" style="color: #FF6F3D;" href="https://onlyoffice.com/zh/webinars">点击这里</a>，查看我们的所有线上活动。如果您身边的朋友或同事可能对学习使用 ONLYOFFICE 感兴趣，欢迎将此链接分享给他们。感谢您！`,
    ONLYOFFICETeam: "ONLYOFFICE 团队",
    ThisEmailIsGeneratedAutomatically: "这封邮件是自动生成的，您不需要回复。",
    Unsubscribe: "点击这里取消订阅",
  },
};

const WebinarsForUserEmail = ({
  webinarTheme,
  webinarDate,
  language,
  baseUrl,
  unsubscribeId,
}: IWebinarsForUserEmail) => {
  const t = (key: string, params?: Record<string, string>): string => {
    const langObj = emailsTranslations[language] || emailsTranslations.en;
    const val = langObj[key];
    return typeof val === "function" ? val(params || {}) : val || key;
  };
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
                                    <table align="center" style="border-collapse: collapse; border: 0; border-spacing: 0; empty-cells: show; Margin: 0 auto; max-width: 240px; padding: 0; text-align: center; vertical-align: top; width: 100%;" cellspacing="0" cellpadding="0">
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
