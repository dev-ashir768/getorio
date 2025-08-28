import * as React from "react";
import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";

interface DemoBookingCustomerTemplateProps {
    name: string;
    date: string;
    time: string;
}

export function DemoBookingCustomerTemplate({ name, date, time }: DemoBookingCustomerTemplateProps) {
    return (
        <Html>
            <Tailwind>
                <Section className="bg-[#ecf0f1]">
                    <Container className="bg-white mx-auto max-w-xl px-4 pt-6">
                        <div className="bg-[#fff3e1] pt-6 px-6 pb-3">
                            <div className="text-center mb-6">
                                <Img
                                    src="https://getorio.com/images/png/logo.png"
                                    alt="ORIO Logo"
                                    width="130"
                                    height="auto"
                                    className="mx-auto mb-2"
                                />
                            </div>
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-midnight">{name}</h2>
                                <h3 className="text-xl font-semibold text-midNight mt-1">
                                    Welcome to ORIO
                                </h3>
                            </div>
                            <Text className="text-center leading-relaxed text-midnight">
                                Dear {name}, Thank you so much for reaching out to us. We truly appreciate your interest in our services. We are delighted to confirm that your demo has been successfully scheduled for {date}, at {time}.
                            </Text>
                            <Text className="text-center leading-relaxed text-midnight">
                                We look forward to the opportunity to connect with you and provide a comprehensive demonstration. Should you have any questions or need any further assistance before the demo, please don’t hesitate to reach out. We’re here to help.
                            </Text>
                            <Text className="text-center leading-relaxed text-midnight">
                                <strong>
                                    Best Regards,
                                    Sales Team
                                </strong>
                            </Text>
                            <Text className="text-center leading-relaxed text-midnight">
                                <strong>Contact Support: 021-37293292 / +92 318 0268894</strong>
                                <br />
                                <strong>Email Support: <a href="mailto:cs@getorio.com" className="no-underline">cs@getorio.com</a> /
                                    <a href="mailto:saymkhan@getorio.com" className="no-underline">saymkhan@getorio.com</a></strong>
                            </Text>
                        </div>
                    </Container>
                </Section>

                <Section className="bg-[#ecf0f1] text-center">
                    <Container className="bg-[#0074fc] mx-auto max-w-xl pt-12 px-6 pb-6">
                        <div className="mb-4">
                            <a href="https://www.facebook.com/p/ORIO-100083173600026" className="inline-block mx-1.5">
                                <Img
                                    src="https://getorio.com/images/png/facebook-icon.png"
                                    alt="Facebook"
                                    width="24"
                                    height="24"
                                />
                            </a>
                            <a href="https://www.linkedin.com/company/getorio" className="inline-block mx-1.5">
                                <Img
                                    src="https://getorio.com/images/png/linkedin-icon.png"
                                    alt="LinkedIn"
                                    width="24"
                                    height="24"
                                />
                            </a>
                            <a href="https://www.instagram.com/orio.tech" className="inline-block mx-1.5">
                                <Img
                                    src="https://getorio.com/images/png/instagram-icon.png"
                                    alt="Instagram"
                                    width="24"
                                    height="24"
                                />
                            </a>
                            <a href="https://x.com/orio97583864_2" className="inline-block mx-1.5">
                                <Img
                                    src="https://getorio.com/images/png/twitter-icon.png"
                                    alt="Twitter"
                                    width="24"
                                    height="24"
                                />
                            </a>
                        </div>

                        <Text className="text-white text-sm">
                            D-63/1, First Floor Block 4 Gulshan-e-Iqbal,
                            <br />
                            75300, Karachi, Sindh Pakistan
                        </Text>
                    </Container>
                </Section>
            </Tailwind>
        </Html>
    );
}
