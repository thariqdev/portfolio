export const identity = {
    name: "Mohammed Thariq",
    role: "Full-Stack Fintech Engineer",
    roleTags: ["React", "Next.js", "FastAPI", "Fintech"],
    location: "Kerala, India",
    available: true,
    email: "thariqmohammed0310@gmail.com",
    linkedin: "https://www.linkedin.com/in/b-mohammed-thariq-b11b673b2/",
};

export const navLinks = [
    { label: "Profile", target: "hero" },
    { label: "Projects", target: "projects" },
    { label: "Experience", target: "experience" },
    { label: "Contact", target: "contact" },
];

export const aboutStatement = "Building digital experiences for complex financial systems.";

export const aboutBody =
    "Hi, I'm Mohammed Thariq, a full-stack software engineer based in Ernakulam, Kerala, with 2+ years of professional experience building fintech and wealth-management platforms. On the backend, I build RESTful APIs and services with Python, FastAPI, SQLAlchemy, and PostgreSQL — covering authentication and authorization (JWT), KYC workflow design, investment and mutual fund domain logic, and third-party API integration. On the frontend, I build with React and Next.js. I work in Agile teams with Git, Postman, and Swagger (OpenAPI) to deliver production-grade, maintainable code.";

export type Level = "Advanced" | "Proficient" | "Working Knowledge";

export const techStack: { name: string; level: Level; description: string }[] = [
    { name: "Python", level: "Advanced", description: "Backend services and domain logic for fintech platforms." },
    { name: "FastAPI", level: "Advanced", description: "RESTful APIs for investment and mutual fund workflows." },
    { name: "PostgreSQL", level: "Advanced", description: "Relational schema design for financial and KYC data." },
    { name: "SQLAlchemy", level: "Proficient", description: "ORM layer for queries and relational models." },
    { name: "React.js", level: "Advanced", description: "Building scalable component-driven interfaces." },
    { name: "Next.js", level: "Advanced", description: "App router, SSR, and performance-first routing." },
    { name: "JavaScript", level: "Advanced", description: "Modern ES6+ across the whole frontend stack." },
    { name: "TypeScript", level: "Proficient", description: "Typed components and safer refactors." },
    { name: "JWT Auth", level: "Proficient", description: "Authentication and authorization across services." },
    { name: "Node.js", level: "Proficient", description: "API layers and lightweight backend services." },
    { name: "Express.js", level: "Proficient", description: "REST endpoints for internal tools." },
    { name: "MongoDB", level: "Proficient", description: "Schema design for dashboards and admin data." },
    { name: "REST APIs", level: "Advanced", description: "Integrating live market and fund data feeds." },
    { name: "Postman", level: "Proficient", description: "API testing and request collections during development." },
    { name: "Swagger", level: "Proficient", description: "OpenAPI contracts and interactive API docs." },
    { name: "Tailwind CSS", level: "Advanced", description: "Design systems without leaving the markup." },
    { name: "Git", level: "Advanced", description: "Branch workflows across small, fast-moving teams." },
    { name: "GitHub", level: "Advanced", description: "PR review, CI hygiene, and issue tracking." },
];

export const techNetwork = {
    core: "Core Stack",
    nodes: [
        { name: "React", description: "Component layer for every product surface." },
        { name: "Next.js", description: "Routing, rendering, and app structure." },
        { name: "FastAPI", description: "Backend services and REST APIs for fintech workflows." },
        { name: "PostgreSQL", description: "Relational data store for investment and KYC records." },
        { name: "Node.js", description: "Service layer behind internal tools." },
        { name: "Git", description: "Version control across every project." },
    ],
};

export const experience = [
    {
        company: "Evoqins Pvt Ltd",
        role: "Associate Software Engineer",
        duration: "Sept 2024 – Present",
        current: true,
        tags: ["React", "Next.js"],
        description:
            "Developing scalable enterprise applications, collaborating cross-functionally on complex features, and optimizing performance and clean-code practices.",
    },
    {
        company: "Asian Media Group",
        role: "Jr Software Developer",
        duration: "Sept 2023 – Sept 2024",
        current: false,
        tags: ["React", "REST APIs"],
        description:
            "Built and maintained mutual fund platforms and admin dashboards, integrating live market-data APIs and designing secure frontend architectures.",
    },
    {
        company: "Luminar Technolab",
        role: "MEARN Stack Intern",
        duration: "2023",
        current: false,
        tags: ["MongoDB", "Express", "Node.js"],
        description:
            "Intensive training across MongoDB, Express, Angular/React, and Node.js, with full-stack prototype projects and RESTful API work.",
    },
];

export const education = [
    {
        degree: "BCA",
        institution: "Chinmaya College of Arts, Science & Commerce",
        note: "GPA 7.6",
    },
    {
        degree: "MCA",
        institution: "SRM Institute of Science and Technology",
        note: "Postgraduate",
    },
];

export type Project = {
    name: string;
    category: string;
    status: "Production" | "Project";
    description: string;
    tags: string[];
    liveUrl?: string;
    liveUrlLabel?: string;
    secondaryUrl?: string;
    secondaryUrlLabel?: string;
    sourceLabel: string;
};

export const projects: Project[] = [
    {
        name: "FundsApp",
        category: "Backend Engineering",
        status: "Production",
        description:
            "FastAPI backend for a mutual-fund investment platform connecting investors, distribution partners, and admins directly to BSE for order execution, KYC, portfolio tracking, and reporting.",
        tags: ["Fintech", "FastAPI", "PostgreSQL", "AWS Lambda"],
        sourceLabel: "Source · Private · Case study soon",
    },
    {
        name: "MT Wealth",
        category: "Frontend Engineering",
        status: "Production",
        description:
            "Mastertrust's mutual fund investment platform — contributed to both the investor-facing app and the internal admin app, building the authentication flow and delivering ongoing changes and new features.",
        tags: ["Fintech", "React.js", "Auth"],
        liveUrl: "https://mtwealth.mastertrust.co.in/",
        liveUrlLabel: "User app",
        secondaryUrl: "https://mtwealth-admin.mastertrust.co.in/",
        secondaryUrlLabel: "Admin app",
        sourceLabel: "Source · Private",
    },
    {
        name: "Rudo",
        category: "Frontend Engineering",
        status: "Production",
        description:
            "Comprehensive mutual fund platform with a full admin panel and an intuitive user investment dashboard. Built for high-volume financial transactions.",
        tags: ["Fintech", "React.js", "Next.js"],
        liveUrl: "https://e-rudo-adm-prod.netlify.app/",
        liveUrlLabel: "Admin panel",
        sourceLabel: "Source · Private",
    },
    {
        name: "Rayi",
        category: "Frontend Engineering",
        status: "Production",
        description:
            "Robust financial platform featuring a detailed admin dashboard and live market data API integration. Focus on data fidelity and low-latency updates.",
        tags: ["Fintech", "Node.js", "MongoDB"],
        sourceLabel: "Source · Private",
    },
    {
        name: "Mira Admin",
        category: "Frontend Engineering",
        status: "Project",
        description:
            "Internal admin dashboard for an investment platform — manages user portfolios, orders, fund allocations, and rebalancing, with built-in analytics and WhatsApp/email notification tooling for client comms.",
        tags: ["Data-heavy", "React.js", "Ant Design", "Chart.js"],
        liveUrl: "https://admin.mira.money/",
        sourceLabel: "Live demo available",
    },
];
