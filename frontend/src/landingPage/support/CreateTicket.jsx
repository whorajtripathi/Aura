import "./support.css";

const supportTopics = [
    {
        number: "01",
        icon: "fa-solid fa-user",
        title: "Account & Profile",
        description:
            "Manage your account, profile information, verification and security.",
        links: [
            "Create an account",
            "Login and password",
            "Profile settings",
            "Account verification",
        ],
    },
    {
        number: "02",
        icon: "fa-solid fa-chart-line",
        title: "Trading & Orders",
        description:
            "Get help with placing orders, order status and trading features.",
        links: [
            "Placing an order",
            "Order status",
            "Order rejected",
            "Trading basics",
        ],
    },
    {
        number: "03",
        icon: "fa-solid fa-briefcase",
        title: "Portfolio",
        description:
            "Learn how to track your holdings, performance and investments.",
        links: [
            "View portfolio",
            "Track performance",
            "Portfolio analytics",
            "Transaction history",
        ],
    },
    {
        number: "04",
        icon: "fa-solid fa-wallet",
        title: "Funds & Payments",
        description:
            "Questions about deposits, withdrawals and payment activity.",
        links: [
            "Add funds",
            "Withdraw funds",
            "Payment status",
            "Transaction charges",
        ],
    },
    {
        number: "05",
        icon: "fa-solid fa-layer-group",
        title: "Platform",
        description:
            "Learn more about Aura's features and resolve technical issues.",
        links: [
            "Using Aura",
            "Watchlist",
            "Market data",
            "Technical issues",
        ],
    },
    {
        number: "06",
        icon: "fa-solid fa-shield-halved",
        title: "Security",
        description:
            "Keep your account protected and understand our security features.",
        links: [
            "Account security",
            "Two-factor authentication",
            "Suspicious activity",
            "Security settings",
        ],
    },
];

function CreateTicket() {
    return (
        <section className="support-topics-section">

            <div className="container">

                {/* Heading */}
                <div className="support-topics-heading">

                    <div className="support-section-eyebrow">
                        <span></span>
                        SUPPORT TOPICS
                    </div>

                    <h2>
                        Find what
                        <span> you need.</span>
                    </h2>

                    <p>
                        Explore our most common support topics and
                        find guides to help you get the most out of Aura.
                    </p>

                </div>


                {/* Cards */}
                <div className="support-topics-grid">

                    {supportTopics.map((topic) => (

                        <div
                            className="support-topic-card"
                            key={topic.number}
                        >

                            <div className="support-topic-top">

                                <span className="support-topic-number">
                                    {topic.number}
                                </span>

                                <div className="support-topic-icon">
                                    <i className={topic.icon}></i>
                                </div>

                            </div>


                            <h3>
                                {topic.title}
                            </h3>

                            <p className="support-topic-description">
                                {topic.description}
                            </p>


                            <div className="support-topic-links">

                                {topic.links.map((link) => (

                                    <a
                                        href="#"
                                        key={link}
                                    >
                                        <span>{link}</span>

                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>


                {/* Bottom CTA */}
                <div className="support-bottom">

                    <div>

                        <span>CAN'T FIND WHAT YOU'RE LOOKING FOR?</span>

                        <p>
                            Our support experience is designed to make
                            getting help simple and straightforward.
                        </p>

                    </div>

                    <a href="#">
                        Contact Aura Support
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

            </div>

        </section>
    );
}

export default CreateTicket;