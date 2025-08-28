import Image from "next/image";
import type { Metadata } from "next";

type OGImageDescriptor = {
    url: string;
    width?: number;
    height?: number;
};

export const getSEOTags = ({
    title,
    description,
    keywords,
    openGraph,
    canonicalUrlRelative,
    extraTags,
}: Metadata & {
    canonicalUrlRelative?: string;
    extraTags?: Record<string, string>;
} = {}) => {
    const defaultImage = `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/home-page.jpg`;

    return {
        title: title || process.env.NEXT_PUBLIC_APP_NAME,
        description: description || process.env.NEXT_PUBLIC_APP_DESCRIPTION,
        keywords: keywords || [process.env.NEXT_PUBLIC_APP_NAME],
        applicationName: process.env.NEXT_PUBLIC_APP_NAME,
        metadataBase: new URL(
            process.env.NODE_ENV === "development"
                ? "http://localhost:3000/"
                : `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/`
        ),

        openGraph: {
            title: openGraph?.title || title,
            description: openGraph?.description || description,
            url: openGraph?.url || `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/`,
            siteName: openGraph?.title || process.env.NEXT_PUBLIC_APP_NAME,
            images: [
                {
                    url: Array.isArray(openGraph?.images)
                        ? typeof openGraph.images[0] === 'string'
                            ? openGraph.images[0]
                            : (openGraph.images[0] as OGImageDescriptor)?.url
                        : defaultImage,
                    width: 1200,
                    height: 660,
                },
            ],
            locale: "en_US",
            type: "website",
        },

        twitter: {
            title: openGraph?.title || title,
            description: openGraph?.description || description,
            images: [
                {
                    url: Array.isArray(openGraph?.images)
                        ? typeof openGraph.images[0] === 'string'
                            ? openGraph.images[0]
                            : (openGraph.images[0] as OGImageDescriptor)?.url
                        : defaultImage,
                    width: 1200,
                    height: 660,
                }
            ],
            card: "summary_large_image",
            creator: "@ashirarif",
        },

        ...(canonicalUrlRelative && {
            alternates: { canonical: canonicalUrlRelative },
        }),

        ...extraTags,
    };
};

export const renderSchemaTags = () => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: `${process.env.NEXT_PUBLIC_APP_NAME}`,
                    url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}`,
                    description: `${process.env.NEXT_PUBLIC_APP_DESCRIPTION}`,
                    publisher: {
                        "@type": "Organization",
                        name: `${process.env.NEXT_PUBLIC_APP_NAME}`,
                        logo: {
                            "@type": "ImageObject",
                            url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/svg/logo.svg`,
                            width: 110,
                            height: 38
                        },
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "021-37293292",
                            contactType: "Customer Care",
                            email: "sales@getorio.com",
                            contactOption: "TollFree",
                            areaServed: ["PK"],
                            availableLanguage: ["en"]
                        },
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "D-63/1, Block-4, Gulshan-e-Iqbal Karachi",
                            addressLocality: "Karachi",
                            addressRegion: "Sindh",
                            postalCode: "75300",
                            addressCountry: "PK"
                        }
                    },
                    sameAs: [
                        "https://www.facebook.com/p/ORIO-100083173600026",
                        "https://x.com/orio97583864_2",
                        "https://www.linkedin.com/company/orio.tech/",
                        "https://www.instagram.com/orio.tech/",
                        "https://www.youtube.com/@oriotech-uv4xp"
                    ]
                }),
            }}
        ></script >
    );
};


export const fbPixelTag = () => {
    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '1394958388531474');
                        fbq('track', 'PageView');
                    `,
                }}
            ></script>
            <noscript>
                <Image
                    fill
                    style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=1394958388531474&ev=PageView&noscript=1"
                    alt="Facebook Pixel"
                />
            </noscript>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.fbAsyncInit = function() {
                  FB.init({
                    appId      : '651659270884662',
                    xfbml      : true,
                    version    : 'v22.0'
                  });
                  FB.AppEvents.logPageView();
                };

                (function(d, s, id){
                   var js, fjs = d.getElementsByTagName(s)[0];
                   if (d.getElementById(id)) {return;}
                   js = d.createElement(s); js.id = id;
                   js.src = "https://connect.facebook.net/en_US/sdk.js";
                   fjs.parentNode.insertBefore(js, fjs);
                 }(document, 'script', 'facebook-jssdk'));
              `,
                }}
            >
            </script>
        </>
    );
};



