import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Sarah Johnson"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Olivia Miller"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Sophia Roberts"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Isabella Clark"
    },
];

const statsFactData = {
    number: '01',
    name: "Stats & facts",
    heading: "Proven Experience. Trusted Performance.",
    description: "From the intensity of IPL to the grandeur of Bigg Boss, Leema Solutions powers India’s biggest productions with cutting-edge broadcasting technology and 12+ years of industry expertise.",
    scoreData: [
        {
            number: 12,
            numberValue: 'Years',
            scoreDescp: "Industry experience delivering high-profile broadcasts and productions"
        },
        {
            number: 500,
            numberValue: 'Projects',
            scoreDescp: "Successful events, broadcasts, and productions delivered"
        },
        {
            number: 50,
            numberValue: 'Cities',
            scoreDescp: "Nationwide deployments for live events and large productions"
        },
    ]
};

const servicesData = {
    number: '03',
    name: "Services",
    heading: "What we do",
    description: "End-to-end broadcasting, production, and technical solutions powering live events, sports, television shows, and large-scale productions across India.",
    data: [
        {
            id: 1,
            image: "/images/home/services/services_1.jpg",
            heading: "Broadcasting Solutions",
            descp: "Complete broadcast infrastructure including OB vans, DSNG links, signal distribution, and multi-camera production for live sports, news, and reality television."
        },
        {
            id: 2,
            image: "/images/home/services/services_2.png",
            heading: "Premium Equipment Rental",
            descp: "Access industry-leading camera systems including ARRI, Sony, RED, Steadicams, Jimmy Jibs, and RF wireless video transmission gear."
        },
        {
            id: 3,
            image: "/images/home/services/services_3.png",
            heading: "Film & TV Production Support",
            descp: "Technical crew, engineering support, and multi-camera setups for reality shows, film productions, and live competitions."
        },
        {
            id: 4,
            image: "/images/home/services/services_4.png",
            heading: "Audio Visual Production",
            descp: "Professional LED walls, projection systems, and high-fidelity sound systems for concerts, corporate events, and large productions."
        },
        {
            id: 5,
            image: "/images/home/services/services_1.png",
            heading: "Large Venue Infrastructure",
            descp: "Signal distribution, fiber cabling, and communication systems designed for stadiums, convention centers, and esports arenas."
        },
    ]
};

const testimonialData = {
    data_1: {
        preTitle: "Hear from them",
        title: "Leema Solutions delivered flawless broadcast infrastructure for our live sports coverage. Their technical team ensured uninterrupted transmission throughout the event.",
        author: "Broadcast Operations Manager",
        company: "Sports Network Partner"
    },
    data_2: {
        preTitle: "Hear from them",
        title: "From planning to execution, the Leema Solutions team handled our production with incredible precision. Their expertise in multi-camera broadcasting made the entire show seamless.",
        author: "Production Director",
        company: "Reality TV Show Partner"
    },
    data_3: {
        preTitle: "Hear from them",
        title: "Our large-scale corporate event required reliable AV production and live broadcast capabilities. Leema Solutions exceeded expectations with their professionalism and technical expertise.",
        author: "Event Manager",
        company: "Corporate Event Partner"
    },
};

const teamData = {
    number: '06',
    data: [
        {
            image: "/images/home/team/team-img-1.png",
            name: "Martha Finley",
            position: "Creative Director",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-2.png",
            name: "Floyd Miles",
            position: "Marketing Strategist",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-3.png",
            name: "Glenna Snyder",
            position: "Lead Designer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-4.png",
            name: "Albert Flores",
            position: "UX/UI Developer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
    ]
};

const pricingData = {
    data: [
        {
            planName: "Launch",
            planPrice: "$699",
            planDescp: "Ideal for startups and small businesses taking their first steps online.",
            planIncludes: ["Competitive research & insights", "Wireframing and prototyping", "Basic tracking setup (Google Analytics, etc.)", "Standard contact form integration"]
        },
        {
            planName: "Scale",
            tag: "Most popular",
            planPrice: "$1,699",
            cancelPrice: "$2,199",
            planDescp: "Perfect for growing brands needing more customization and flexibility.",
            planIncludes: ["Everything in the Launch Plan", "Custom design for up to 10 pages", "Seamless social media integration", "SEO enhancements for key pages"]
        },
        {
            planName: "Elevate",
            planPrice: "$3,499",
            planDescp: "Best suited for established businesses wanting a fully tailored experience.",
            planIncludes: ["Everything in the Scale Plan", "E-commerce functionality (if needed)", "Branded email template design", "Priority support for six months after launch"]
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
    ],
};

const faqData = {
    data: [
        {
            faq_que: "What services does your agency offer?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "How long does a typical project take?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you offer custom designs, or do you use templates?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "What’s the cost of a project?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you provide ongoing support after project completion?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        }
    ]
};
const contactData = {
    keypoint: ["Always-On Customer Support", "Service Across the Globe"],
    managerProfile: {
        image: "/images/avatar/avatar_1.jpg",
        name: "Courtney Henry",
        position: "Onboarding & Success Manager"
    }
}

const aboutusStats = [
    {
        prefix: "",
        number: 12,
        postfix: "+",
        title: "Years of Proven Leadership",
        descp: "Industry experience powering major broadcasts, productions, and events across India."
    },
    {
        prefix: "",
        number: 500,
        postfix: "+",
        title: "Productions Delivered",
        descp: "Successful broadcasts, events, and productions executed with technical precision."
    },
    {
        prefix: "",
        number: "",
        postfix: "",
        title: "24/7 Technical Reliability",
        descp: "Our team ensures uninterrupted broadcast performance during critical live productions."
    }
]

const servicesSliderData = [
    "Broadcasting Solutions",
    "Premium Equipment Rental",
    "Film & TV Production Support",
    "Audio Visual Production",
    "Large Venue Infrastructure",
    "OB Van Broadcasting",
    "DSNG Transmission",
    "Multi Camera Production",
    "LED Wall Systems",
    "Live Event Broadcasting"
]



export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData
    });
};