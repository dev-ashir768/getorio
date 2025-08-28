import React from "react";

const HeroSection = () => {
  return (
    <section className="container md:py-28 py-[128px] space-y-10">
      <div className="mx-auto text-center space-y-4 flex flex-col items-center">
        <div className="sm:max-w-[650px] max-w-[328px]">
          <h1 className="text-midnight font-bold sm:text-[45px] sm:leading-[54px] text-3xl sm:tracking-wide">
            Terms and Conditions
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
              These Terms and Conditions govern your use of the services
              provided by Orio Technologies (Private) Limited, including our
              Software as a Service (SaaS) platform for order and warehouse
              management, as well as website creation tools. By accessing or
              using our services, you agree to comply with these Terms and
              Conditions. If you do not agree with any part of these terms, you
              may not use our services.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">2. Services</h6>
            <p className="font-normal text-base text-charcoal">
              a. Software as a Service (SaaS) Platform: Orio Technologies
              (Private) Limited offers a SaaS platform that includes order
              management, warehouse management, and website creation tools.
              Users can manage their orders, inventory, and website content
              through our platform.
            </p>
            <p className="font-normal text-base text-charcoal">
              b. Third-Party Logistics (3PL) Integration: Orio Technologies
              (Private) Limited facilitates shipping services through
              third-party logistics providers (3PLs) termed as Managed Shipping
              or Preferred Shipping. While we may assist in arranging shipments
              through 3PLs, we are not liable for any loss or damages incurred
              during transit, as this is dependent on the policies of the 3PL in
              question. Similarly, payment to customer of any cash collected on
              behalf of the customer by a 3PL is subject and dependent on the
              policies of the 3PL collecting the cash.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              3. Account Registration
            </h6>
            <p className="font-normal text-base text-charcoal">
              a. To access certain features of our services, you may be required
              to create an account. You agree to provide accurate and complete
              information when registering for an account.
            </p>
            <p className="font-normal text-base text-charcoal">
              b. You are responsible for maintaining the confidentiality of your
              account credentials and for any activities that occur under your
              account. You must notify us immediately of any unauthorized use of
              your account.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              4. Payment and Billing
            </h6>
            <p className="font-normal text-base text-charcoal">
              a. SaaS Platform Usage: Users of our SaaS platform are billed on a
              per-transaction basis for order and warehouse management services.
              Monthly invoices must be settled on a timely basis to maintain
              access to the platform.
            </p>
            <p className="font-normal text-base text-charcoal">
              b. Website Creation Tools: The website creation tools offered by
              Orio Technologies (Private) Limited are billed on a fixed monthly
              upfront fee basis. Payment for these services must be made in
              accordance with the agreed terms.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              5. User Responsibilities
            </h6>
            <p className="font-normal text-base text-charcoal">
              a. You agree to use our services in compliance with all applicable
              laws and regulations.
            </p>
            <p className="font-normal text-base text-charcoal">
              b. You are solely responsible for the content you transmit or
              store using our services, including any data or information
              uploaded to our SaaS platform or created using our website
              creation tools.
            </p>
            <p className="font-normal text-base text-charcoal">
              c. You agree not to engage in any activities that may disrupt or
              interfere with the proper functioning of our services, including
              but not limited to hacking, spamming, or transmitting malware.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              6. Intellectual Property
            </h6>
            <p className="font-normal text-base text-charcoal">
              a. All intellectual property rights in our services, including
              software, trademarks, and logos, are owned by Orio Technologies
              (Private) Limited or its licensors.
            </p>
            <p className="font-normal text-base text-charcoal">
              b. You are granted a limited, non-exclusive, non-transferable
              license to use our services for the purposes outlined in these
              Terms and Conditions.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              7. Limitation of Liability
            </h6>
            <p className="font-normal text-base text-charcoal">
              Orio Technologies (Private) Limited shall not be liable for any
              indirect, incidental, special, or consequential damages arising
              out of or in connection with the use of our services.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              8. Termination
            </h6>
            <p className="font-normal text-base text-charcoal">
              a. We reserve the right to suspend or terminate your access to our
              services at any time for any reason, including but not limited to
              violation of these Terms and Conditions.
            </p>
            <p className="font-normal text-base text-charcoal">
              b. Upon termination, you must cease all use of our services, and
              any outstanding fees or obligations shall become immediately due
              and payable.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              9. Amendments
            </h6>
            <p className="font-normal text-base text-charcoal">
              a. We reserve the right to modify these Terms and Conditions at
              any time without prior notice. Any changes will be effective
              immediately upon posting on our website.
            </p>
            <p className="font-normal text-base text-charcoal">
              b. Your continued use of our services after the posting of any
              amendments constitutes acceptance of those changes.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              10. Governing Law
            </h6>
            <p className="font-normal text-base text-charcoal">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of Pakistan. Any disputes arising out of
              or in connection with these terms shall be subject to the
              exclusive jurisdiction of the courts of Pakistan.
            </p>
          </div>

          <div className="space-y-1">
            <h6 className="font-semibold text-lg text-midnight">
              11. Contact Us
            </h6>
            <p className="font-normal text-base text-charcoal">
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at{" "}
              <a
                href="tel:03180268894"
                className="underline underline-offset-2 text-azure-100"
              >
                0318-0268894
              </a>
              ,{" "}
              <a
                href="tel:021-37293292"
                className="underline underline-offset-2 text-azure-100"
              >
                021-37293292
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
