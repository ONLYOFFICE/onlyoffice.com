import {
  StyledContainer,
  StyledHeading,
  StyledSubHeading,
  StyledText,
} from "./Privacy.styled";
import { Text } from "@src/components/ui/Text";
import { Section } from "@src/components/ui/Section";
import { Link } from "@src/components/ui/Link";

const PrivacyPageTemplate = () => {
  return (
    <Section
      background="#e3e9fc"
      desktopSpacing={["20px", "20px"]}
      tabletSpacing={["20px", "20px"]}
      tabletSmallSpacing={["20px", "20px"]}
      mobileSpacing={["0px", "0px"]}
    >
      <StyledContainer maxWidth="914px">
        <StyledHeading level={1}>Privacy Policy</StyledHeading>
        <Text size={4} textAlign="right" color="#8497b0;">
          <i>Revision date: 02.07.2025</i>
        </Text>
        <StyledText className="indent">
          Your privacy is important to us, Ascensio System SIA has created this
          statement to let you know about our firm commitment to your privacy
          and full compliance of ONLYOFFICE with General Data Protection
          Regulation (GDPR). The following discloses our approach in gathering
          and processing Personal Data for the Ascensio System SIA website{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="https://www.onlyoffice.com"
          >
            https://www.onlyoffice.com
          </Link>{" "}
          and related services. By using our website you explicitly consent to
          such use of your Personal Data and agree to the terms of this Privacy
          Policy.
        </StyledText>
        <StyledSubHeading level={2}>
          What personal data we collect
        </StyledSubHeading>
        <StyledText>
          Ascensio System SIA collects Personal Data (hereinafter also
          &quot;Data&quot;) in case you choose to register with ONLYOFFICE
          <sup>TM</sup> service.
        </StyledText>
        <div>
          <StyledText>We ask users to provide following Data:</StyledText>
          <ul>
            <li>
              first and last name - to identify users and display a unique
              username in ONLYOFFICE<sup>TM</sup> accounts
              (&quot;Accounts&quot;);
            </li>
            <li>
              email address - to authenticate users, provide access to Accounts
              and help them recover password to access to Accounts;
            </li>
            <li>
              phone number - to confirm user&apos;s identity with Two-factor
              authentication.
            </li>
          </ul>
        </div>
        <StyledText>
          Aforementioned Data is collected only upon You either enter particular
          information or upload it on Your own initiative using Resource&apos;s
          forms and tools.
        </StyledText>
        <div>
          <StyledText>We also collect following technical data:</StyledText>
          <ul>
            <li>
              IP address - to help diagnose problems with our server and to
              administer our website and to identify you and your time spent at
              our website to understand which parts of our website users are
              visiting and provide better user experience;
            </li>
            <li>Location (based on the IP address);</li>
            <li>Operation System and Internet Browser data;</li>
            <li>
              Hardware specifications (screen size, other specifications);
            </li>
            <li>
              Other data. Please refer to &quot;Third-party service
              providers&quot; section of this Policy and the following link:{" "}
              <Link
                color="#4d72df"
                textUnderline
                target="_blank"
                hover="underline-none"
                href="https://developers.google.com/analytics/resources/concepts/gaConceptsTrackingOverview"
              >
                to learn more
              </Link>
              .
            </li>
          </ul>
        </div>
        <StyledText>
          If you choose not to register or provide Personal Data, you can still
          use our website anonymously. But you will not be able to access areas
          that require registration.
        </StyledText>
        <StyledText>
          Technical data is recorded automatically when you visit our site or
          use our service and is generally anonymous (does not reveal
          user&apos;s identity). However, if you are logged into your Account
          some of this information could be associated with your Account.
        </StyledText>
        <StyledText>
          We do not link IP addresses to anything personally identifiable. This
          means, for instance, that a user&apos;s session will be tracked, but
          the user will remain anonymous. We do not use this information for any
          other purposes.
        </StyledText>
        <div>
          <StyledText>
            We also collect certain categories of personal information about
            users from other sources. In particular:
          </StyledText>
          <ul>
            <li>
              Financial and/or transaction details from our payment provider
              2checkout (located in the US, Netherlands, Romania). This is
              necessary in order to process a transaction;
            </li>
            <li>
              Third-party service providers like Google (located in the US),
              which provide information about you when you link, connect, or
              login to your account with your Google Account and we receive
              information such as your Google e-mail and profile from that
              service. This only occurs if you are using Google Account to
              login. The information varies and is controlled by Google or as
              authorized by you via your privacy settings in Google Account.
            </li>
          </ul>
        </div>
        <StyledText>
          When you interact with social media buttons (i.e. &quot;share&quot;,
          &quot;like&quot;, &quot;tweet&quot;, &quot;+1&quot; etc) on our
          website or when you link your Account to or log in through a social
          media website the social networks may record some of your actions.
        </StyledText>
        <StyledSubHeading level={2}>How we use personal data</StyledSubHeading>
        <div>
          <StyledText>
            We collect and processes Data for the following purposes:
          </StyledText>
          <ul>
            <li>
              to provide users with better experience (e.g. to make custom user
              interface);
            </li>
            <li>
              to investigate performance issues, bugs and any other technical
              issues regarding Resources;
            </li>
            <li>
              to make ONLYOFFICE<sup>TM</sup> better;
            </li>
            <li>to comply with the law.</li>
          </ul>
        </div>
        <StyledText>
          Ascensio System SIA may share non-personal, summary information
          regarding ONLYOFFICE<sup>TM</sup> users with partners or other third
          parties. However, we will not share any individual customer
          information outside of the contracted partners and third parties
          without first receiving user&apos;s prior written approval. In short,
          Ascensio System Limited does not sell user&apos;s Personal Data.
        </StyledText>
        <StyledText>
          Ascensio System SIA may send you tips on using ONLYOFFICE<sup>TM</sup>
          , notify you of and get your feedback on upcoming releases or new
          services offered <b>only</b> if you subscribed to our mailing lists.
          Users are able to unsubscribe from the mailing list any time after
          receiving the first informational message using link contained within
          informational message or by using appropriate Account settings option.
        </StyledText>
        <StyledSubHeading level={2}>How long data is used</StyledSubHeading>
        <StyledText>
          We retain your Data for as long as is necessary to provide the service
          to you and others, and to comply with our legal obligations. Your Data
          is stored and processed only when your account is active until you
          delete or deactivate it.
        </StyledText>
        <StyledText>
          Account can be deactivated temporarily or deleted permanently at any
          time using the appropriate options in portal settings.
        </StyledText>
        <StyledText>
          If you choose to delete the portal yourself through the existing
          interface, then your Account with your Data will be deleted
          immediately, along with the deletion of the portal. In case if your
          Account is inactive for 180 days we will send you a letter informing
          you about the planned deletion of your Account due to non-use and
          then, if you do not return to use, then after 7 days we will
          permanently delete your Account. You can ask us to restore Data until
          it&apos;s permanently deleted.
        </StyledText>
        <StyledSubHeading level={2}>
          How you can control your data
        </StyledSubHeading>
        <StyledText>
          You have various rights to control use and processing of your Personal
          Data and other information. This means that you are entitled to
          request us to take certain actions at any time and free of charge.
        </StyledText>
        <StyledText>
          <b>Data portability right.</b> You have the right to request a digital
          copy of your Data in a structured, commonly used and machine-readable
          format to be able to <b>move</b> from one service to another. This can
          be achieved by using Data backup options as described in the following
          link:{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="https://helpcenter.onlyoffice.com/gettingstarted/configuration.aspx#CreatingBackup_block"
            target="_blank"
          >
            https://helpcenter.onlyoffice.com/gettingstarted/configuration.aspx#CreatingBackup_block.
          </Link>
        </StyledText>
        <StyledText>
          You can also email us at{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="mailto:info@onlyoffice.com"
            target="_blank"
          >
            info@onlyoffice.com
          </Link>{" "}
          and we will provide you with an electronic file containing your Data.
        </StyledText>
        <StyledText>
          <b>Right to rectification.</b> You have the right to obtain the
          rectification of inaccurate Data. You entitled to have incomplete
          Personal Data completed. In order to do so, please use appropriate
          settings to edit and complete your incomplete Personal Data if you
          find it necessary or provide us with a supplementary statement by
          sending e-mail at{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="mailto:info@onlyoffice.com"
            target="_blank"
          >
            info@onlyoffice.com
          </Link>
        </StyledText>
        <StyledText>
          <b>Right to restriction of processing.</b> You also have the right to
          request that we cease to process or use your Data in any way. It is
          implemented via &quot;Portal deactivation&quot; algorithm. Please
          visit the link to learn how to do it:{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="https://helpcenter.onlyoffice.com/gettingstarted/configuration.aspx#DeactivatingDeletingPortal_block"
            target="_blank"
          >
            https://helpcenter.onlyoffice.com/gettingstarted/configuration.aspx#DeactivatingDeletingPortal_block
          </Link>
        </StyledText>
        <StyledText>
          If you choose to do so, your Data will become unavailable for
          everyone, but it won&apos;t be deleted, so you can restore it at any
          time.
        </StyledText>
        <StyledText>
          <b>Right to erasure (&quot;Right to be forgotten&quot;).</b> You are
          eligible to delete certain Data from our site and services. Please
          visit the link to learn how to do it:{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="https://helpcenter.onlyoffice.com/gettingstarted/configuration.aspx#DeactivatingDeletingPortal_block"
            target="_blank"
          >
            https://helpcenter.onlyoffice.com/gettingstarted/configuration.aspx#DeactivatingDeletingPortal_block
          </Link>
        </StyledText>
        <StyledText>
          If you choose to delete your Data, it will become unavailable and will
          be completely deleted in 60 days upon your delete request.
        </StyledText>
        <StyledText>
          Please, be aware, that sometimes we have to store some Data for a
          longer period of time either due to technical limitations or to comply
          with the law.
        </StyledText>
        <StyledSubHeading level={2}>Underage</StyledSubHeading>
        <StyledText>
          Ascensio System SIA does not intentionally collect Personal Data from
          persons, who are minors under their applicable local legislation. If
          you are under 16, you will need consent from your parent(s) or other
          legal guardian(s) before submitting any information to Ascensio System
          SIA via the website, with the exception if such activities are allowed
          by applicable law of your country. If we become aware that a person
          under 16 has provided us with personal information without appropriate
          aforementioned consent, we will take steps to delete such information.
        </StyledText>
        <StyledSubHeading level={2}>Public areas</StyledSubHeading>
        <StyledText>
          Ascensio System SIA may create, host and provide discussion forums,
          newsgroups, blogs or other public environments to ONLYOFFICE
          <sup>TM</sup> users and general public. Any information disclosed in
          blogs or forums is considered public and each user is responsible for
          and should exercise caution when disclosing any Personal Data in such
          areas. Ascensio System SIA is not responsible for any action taken as
          a result of information presented or received in such areas.
        </StyledText>
        <StyledSubHeading level={2}>Links to other sites</StyledSubHeading>
        <StyledText>
          This site contains links to other sites. Please be aware that Ascensio
          System SIA is not responsible for the privacy practices or the content
          of such websites as well as any information they might collect, even
          though our name or logo may appear on those sites. We encourage you to
          be aware when you leave our site and to read the privacy statements of
          each and every website that you visit, as the Privacy Policy of those
          sites may differ from ours. Our privacy statement applies solely to{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="https://www.onlyoffice.com"
            target="_blank"
          >
            https://www.onlyoffice.com
          </Link>
        </StyledText>
        <StyledSubHeading level={2}>
          How we use &quot;cookies&quot;
        </StyledSubHeading>
        <StyledText>
          During your visit to our website, so-called &quot;cookies&quot; are
          saved to your computer. These &quot;cookies&quot; are small computer
          files, necessary to provide functionality and track user&apos;s
          activity: register information about user&apos;s navigation on our
          website (e.g. loaded pages, date, time of day and length of visit etc)
          which we can access during your next visit in order to adapt the
          website to your personal requirements and optimize loading times. We
          also use this information to enter your data into inquiry forms so
          that you do not need to fill them again.
        </StyledText>
        <StyledText>
          We never store passwords or similarly sensitive data in our website
          cookies. The use of cookies is common and advantageous. Cookies are
          used on most websites. By indicating how and when visitors use a
          website, cookies aid us in finding out which areas are popular and
          which areas are not. Many improvements and updates are based on
          information supplied by cookies. Cookies can also help us to
          personalize web content and meet the demands of our visitors.
        </StyledText>
        <StyledText>
          Our website does not use cookies to collect Personal Data from your
          computer that was not initially sent as a cookie.
        </StyledText>
        <div>
          <StyledText>What cookies do we use and why:</StyledText>
          <ul>
            <li>
              <b>Essential.</b> These cookies are necessary in order to enable
              certain base features, such as identifying certain user and
              remembering that user have logged into his Account. These cookies
              may store unique user authentication key and are required by the
              service to operate correctly. Although cookies do not store your
              password directly, user authentication key is as a password
              substitute. Please be aware that you shall not let others to copy
              your cookies.
            </li>
            <li>
              <b>Functionality.</b> These cookies are used to remember some
              choices that users make (i.e. search parameters or language
              settings) and to make your use of our site and services more
              tailored.
            </li>
            <li>
              <b>Performance and analytics.</b> These cookies collect
              information on how users operate with our site and services and
              help us to improve them. We use Google Analytics cookies to
              identify areas for improvement such as navigation and user
              experience, and marketing campaigns. Please check the
              &quot;Third-party service providers&quot; section to learn more.
            </li>
          </ul>
        </div>
        <StyledText>
          Users can disable cookies by changing their Internet browser settings.
          However, if you instruct your Internet browser to not accept essential
          cookies, our site and service may not work properly or may not work at
          all.
        </StyledText>
        <StyledSubHeading level={2}>Data protection</StyledSubHeading>
        <StyledText>
          Your Account is password-protected so that you have secure access to
          your ONLYOFFICE<sup>TM</sup> portal and Personal Data stored on your
          website. It is the user&apos;s responsibility to protect the security
          of their password. We do not take responsibility for any undesirable
          information disclosure due to password insecurity.
        </StyledText>
        <div>
          <StyledText>
            To minimize any personal data breach we implemented following
            different security measures including:
          </StyledText>
          <ul>
            <li>user password strength settings;</li>
            <li>physical access control;</li>
            <li>randomly-generated brute-force resistant staff passwords;</li>
            <li>
              strong cipher-encryption for all mediums containing Personal Data
              (where appropriate);
            </li>
            <li>video surveillance and activity logs;</li>
            <li>two-factor authentication (enabled by default);</li>
            <li>
              end-to-end encryption using modern TLS (Transport Layer Security)
              cryptographic protocol for all connections containing Personal
              Data;
            </li>
            <li>trusted email domain settings;</li>
            <li>
              other safety measures to reduce the risk of unauthorized access.
            </li>
          </ul>
        </div>
        <StyledSubHeading level={2}>
          Third-party service providers.
        </StyledSubHeading>
        <StyledText>
          We use third-party service providers to provide hosting and analytics.
        </StyledText>
        <StyledText>
          <b>AWS Amazon file hosting.</b> We use Amazon AWS cloud storage to
          store user files including Data. Actual location where certain Data is
          stored depends on &quot;Portal region&quot; setting which is set by
          Portal administrator during Portal initial setup.
        </StyledText>
        <div>
          <StyledText>At the moment there are following options:</StyledText>
          <ul>
            <li>EU (Germany) Region;</li>
            <li>US West (Oregon) Region;</li>
            <li>Asia Pacific (Singapore)</li>
          </ul>
        </div>
        <StyledText>
          Please visit the following link to learn how to change Portal region:{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="https://helpcenter.onlyoffice.com/gettingstarted/configuration.aspx#ChangingPortalRegion_block"
            target="_blank"
          >
            https://helpcenter.onlyoffice.com/gettingstarted/configuration.aspx#ChangingPortalRegion_block
          </Link>
        </StyledText>
        <StyledText>
          To learn how Amazon AWS treats your privacy, please see the following
          link:{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="https://aws.amazon.com/privacy"
            target="_blank"
          >
            https://aws.amazon.com/privacy
          </Link>
        </StyledText>
        <StyledText>
          <b>Google Analytics.</b> We also use Google Analytics to track what is
          used the most, to understand our users needs and to make our site and
          service better.
        </StyledText>
        <StyledText>
          Please visit the link to understand Google&apos;s approach to privacy:{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="https://policies.google.com/privacy?hl=en"
            target="_blank"
          >
            https://policies.google.com/privacy?hl=en
          </Link>
        </StyledText>
        <StyledText>
          <b>monday.com.</b> We&apos;ve integrated with monday.com to make our
          product more convenient and valuable for users who work with this
          platform.
        </StyledText>
        <StyledText>
          To learn more about how we collect, use, and protect your data in
          connection with the monday.com integration, please visit the following
          page:{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="https://onlyo.co/3GhrOhD"
            target="_blank"
          >
            https://onlyo.co/3GhrOhD
          </Link>
        </StyledText>
        <StyledText>
          <b>hCaptcha.</b> We use the hCaptcha security service (hereinafter
          &quot;hCaptcha&quot;) on our website. This service is provided by
          Intuition Machines, Inc., a Delaware US Corporation (&quot;IMI&quot;).
          hCaptcha is used to check whether user actions on our online service
          (such as submitting a login or contact form) meet our security
          requirements. To do this, hCaptcha analyzes the behavior of the
          website or mobile app visitor based on various characteristics. This
          analysis starts automatically as soon as the website or mobile app
          visitor enters a part of the website or app with hCaptcha enabled. For
          the analysis, hCaptcha evaluates various information (e.g. IP address,
          how long the visitor has been on the website or app, or mouse
          movements made by the user).
        </StyledText>
        <StyledText>
          The analysis in &apos;invisible mode&apos; can take place entirely in
          the background, so as not to disturb the user and ensure the proper
          functioning of the website.
        </StyledText>
        <StyledText>
          Data processing is based on Art. 6(1)(b) of the GDPR: the processing
          of personal data is necessary for the performance of a contract to
          which the website visitor is party (for example, the website terms) or
          in order to take steps at the request of the website visitor prior to
          entering into a contract. Our online service (including our website,
          mobile apps, and any other apps or other forms of access offered by
          us) needs to ensure that it is interacting with a human, not a bot,
          and that activities performed by the user are not related to fraud or
          abuse. In addition, processing may also be based on Art. 6(1)(f) of
          the GDPR: our online service has a legitimate interest in protecting
          the service from abusive automated crawling, spam, and other forms of
          abuse that can harm our service or other users of our service. IMI
          acts as a &quot;data processor&quot; acting on behalf of its customers
          as defined under the GDPR, and a &quot;service provider&quot; for the
          purposes of the California Consumer Privacy Act (CCPA). This means
          that IMI processes personal data only at the instruction and for the
          purposes of the client.
        </StyledText>
        <StyledText>
          For more information about hCaptcha&apos;s privacy policy and terms of
          use, please visit the following links:{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="https://www.hcaptcha.com/privacy"
            target="_blank"
          >
            https://www.hcaptcha.com/privacy
          </Link>{" "}
          and{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="https://www.hcaptcha.com/terms"
            target="_blank"
          >
            https://www.hcaptcha.com/terms
          </Link>{" "}
        </StyledText>
        <StyledText>
          You have the right to request access to, correction of, or deletion of
          your data in accordance with the provisions of the GDPR. To proceed
          with this request, please email us at{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="mailto:reply@onlyoffice.com"
            target="_blank"
          >
            reply@onlyoffice.com
          </Link>
          .
        </StyledText>
        <StyledSubHeading level={2}>Privacy policy updates</StyledSubHeading>
        <StyledText>
          Ascensio System SIA may update this Privacy Policy from time to time.
          We encourage you to review this privacy statement for any changes
          occasionally. If any changes are made to the purposes for which we
          treat your Personal Data, we will inform you of such changes via email
          or by posting a note on our website. We will also try to provide
          notice of any other changes to this Policy.
        </StyledText>
        <StyledSubHeading level={2}>Further questions</StyledSubHeading>
        <StyledText>
          If you have any questions about our Privacy Policy, feel free to email
          us at{" "}
          <Link
            color="#4d72df"
            textUnderline
            hover="underline-none"
            href="mailto:info@onlyoffice.com"
            target="_blank"
          >
            info@onlyoffice.com.
          </Link>
        </StyledText>
      </StyledContainer>
    </Section>
  );
};

export { PrivacyPageTemplate };
