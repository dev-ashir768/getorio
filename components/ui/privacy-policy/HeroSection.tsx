import React from "react";

const HeroSection = () => {
  return (
    <section className="container md:py-28 py-[128px] space-y-10">
      <div className="mx-auto text-center space-y-4 flex flex-col items-center">
        <div className="sm:max-w-[650px] max-w-[328px]">
          <h1 className="text-midnight font-bold sm:text-[45px] sm:leading-[54px] text-3xl sm:tracking-wide">
            Privacy Policy
          </h1>
        </div>
      </div>
      <div className="bg-[#F6F6F6] sm:rounded-3xl rounded-xl sm:px-12 px-5 sm:py-14 py-7">
        <div className="space-y-6 max-w-5xl">
          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              1. Introduction
            </h6>
            <p className="font-normal text-base text-charcoal">
              Orio, a software house, is committed to protecting the privacy and
              security of your personal information. This Privacy Policy
              outlines how we collect, use, disclose, and protect your
              information when you visit our website getorio Website or engage
              with our services.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              2. Information We Collect
            </h6>
            <p className="font-normal text-base text-charcoal">
              a. Personal Information: We may collect personal information such
              as your name, email address, phone number, and other contact
              details when you voluntarily provide them through forms on our
              Website.
            </p>
            <p className="font-normal text-base text-charcoal">
              b. Non-Personal Information: We may collect non-personal
              information, including but not limited to, browser type, device
              type, IP address, and website usage data through cookies and
              similar technologies.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              3. How We Use Your Information
            </h6>
            <p className="font-normal text-base text-charcoal">
              We use the information we collect for the following purposes:
            </p>
            <p className="font-normal text-base text-charcoal">
              a. To provide and improve our services.
            </p>
            <p className="font-normal text-base text-charcoal">
              b. To respond to your inquiries and requests.
            </p>
            <p className="font-normal text-base text-charcoal">
              c. To send you updates, newsletters, and promotional materials if
              you&apos;ve subscribed to them.
            </p>
            <p className="font-normal text-base text-charcoal">
              d. To analyze and improve the functionality and user experience of
              our Website.
            </p>
            <p className="font-normal text-base text-charcoal">
              e. To comply with legal obligations and protect our rights.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              4. Disclosure of Your Information
            </h6>
            <p className="font-normal text-base text-charcoal">
              We may share your information with:
            </p>
            <p className="font-normal text-base text-charcoal">
              a. Service Providers: We may engage third-party service providers
              to assist us in delivering our services, and they may have access
              to your information.
            </p>
            <p className="font-normal text-base text-charcoal">
              b. Legal Requirements: We may disclose your information in
              response to a legal request, such as a court order or government
              inquiry.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              5. Cookies and Tracking Technologies
            </h6>
            <p className="font-normal text-base text-charcoal">
              We use cookies and similar tracking technologies to collect
              non-personal information about your browsing activities on our
              Website. You can manage your cookie preferences through your
              browser settings.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              6. Data Security
            </h6>
            <p className="font-normal text-base text-charcoal">
              We implement reasonable security measures to protect your personal
              information from unauthorized access and disclosure. However, no
              data transmission over the internet is entirely secure, and we
              cannot guarantee absolute security.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              7. Your Rights
            </h6>
            <p className="font-normal text-base text-charcoal">
              You have the right to:
            </p>
            <p className="font-normal text-base text-charcoal">
              a. Access your personal information.
            </p>
            <p className="font-normal text-base text-charcoal">
              b. Correct inaccuracies in your personal information.
            </p>
            <p className="font-normal text-base text-charcoal">
              c. Withdraw consent for marketing communications.
            </p>
            <p className="font-normal text-base text-charcoal">
              d. Request the deletion of your personal information, subject to
              legal requirements.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              8. Changes to this Privacy Policy
            </h6>
            <p className="font-normal text-base text-charcoal">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices. The revised policy will be effective
              immediately upon posting on our Website.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              9. Contact Us
            </h6>
            <p className="font-normal text-base text-charcoal">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at{" "}
              <a
                href="tel:02137293292"
                className="underline underline-offset-2 text-azure-100"
              >
                021-37293292
              </a> or <a
                href="tel:03180268894"
                className="underline underline-offset-2 text-azure-100"
              >
                0318-0268894
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
