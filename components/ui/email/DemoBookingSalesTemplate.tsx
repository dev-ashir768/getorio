import * as React from "react";
import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";

interface DemoBookingSalesTemplateProps {
    name: string;
    date: string;
    time: string;
    email: string;
    url: string;
    referral: string;
}

const DemoBookingSalesTemplate = ({
    name,
    date,
    time,
    email,
    url,
    referral,
}: DemoBookingSalesTemplateProps) => {
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
                                <h2 className="text-2xl font-bold text-midnight">
                                    Demo Booking Form Submission
                                </h2>
                            </div>

                            <Text className="leading-relaxed text-midnight">
                                Hey, we just got a demo booking form submission. Here’s the data:
                            </Text>

                            <table
                                className="mt-4 w-full"
                                style={{
                                    borderCollapse: "collapse",
                                    margin: "0 auto",
                                    maxWidth: "400px",
                                }}
                            >
                                <tbody>
                                    <tr
                                    >
                                        <td style={{ fontWeight: "bold", padding: "6px" }}>Name:</td>
                                        <td style={{ padding: "6px" }}>{name}</td>
                                    </tr>
                                    <tr
                                        style={{
                                            backgroundColor: "#F5F5F5",
                                        }}
                                    >
                                        <td style={{ fontWeight: "bold", padding: "6px" }}>Email:</td>
                                        <td style={{ padding: "6px" }}>{email}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold", padding: "6px" }}>Date:</td>
                                        <td style={{ padding: "6px" }}>{date}</td>
                                    </tr>
                                    <tr
                                        style={{
                                            backgroundColor: "#F5F5F5",
                                        }}
                                    >
                                        <td style={{ fontWeight: "bold", padding: "6px" }}>Time:</td>
                                        <td style={{ padding: "6px" }}>{time}</td>
                                    </tr>
                                    <tr
                                    >
                                        <td style={{ fontWeight: "bold", padding: "6px" }}>URL:</td>
                                        <td style={{ padding: "6px" }}>{url}</td>
                                    </tr>
                                    <tr
                                        style={{
                                            backgroundColor: "#F5F5F5",
                                        }}
                                    >
                                        <td style={{ fontWeight: "bold", padding: "6px" }}>Referral:</td>
                                        <td style={{ padding: "6px" }}>{referral}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <Text className="leading-relaxed text-midnight mt-6">
                                Please reach out to this contact ASAP to follow up!
                                <br />
                                <br />
                                Best Regards,
                                <br />
                                Sales Team
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
    )
}

export default DemoBookingSalesTemplate