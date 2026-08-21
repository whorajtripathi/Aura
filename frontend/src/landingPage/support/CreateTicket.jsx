const supportTopics = [
    {
        title: "Account & Profile",
        description: "Manage your account, profile information, verification and security.",
        links: [
            "Create an account",
            "Login and password",
            "Profile settings",
            "Account verification",
        ],
    },
    {
        title: "Trading & Orders",
        description: "Get help with placing orders, order status and trading features.",
        links: [
            "Placing an order",
            "Order status",
            "Order rejected",
            "Trading basics",
        ],
    },
    {
        title: "Portfolio",
        description: "Learn how to track your holdings, performance and investments.",
        links: [
            "View portfolio",
            "Track performance",
            "Portfolio analytics",
            "Transaction history",
        ],
    },
    {
        title: "Funds & Payments",
        description: "Questions about deposits, withdrawals and payment activity.",
        links: [
            "Add funds",
            "Withdraw funds",
            "Payment status",
            "Transaction charges",
        ],
    },
    {
        title: "Platform",
        description: "Learn more about Aura's features and resolve technical issues.",
        links: [
            "Using Aura",
            "Watchlist",
            "Market data",
            "Technical issues",
        ],
    },
    {
        title: "Security",
        description: "Keep your account protected and understand our security features.",
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
        <div className="container py-5">

            <div className="text-center mb-5">

                <p className="text-uppercase text-primary fw-semibold small">
                    Help Center
                </p>

                <h2 className="fw-semibold">
                    What can we help you with?
                </h2>

                <p className="text-muted">
                    Choose a topic to find useful guides and solutions.
                </p>

            </div>


            <div className="row g-4">

                {supportTopics.map((topic, index) => (

                    <div
                        className="col-lg-4 col-md-6"
                        key={index}
                    >

                        <div className="support-card h-100">

                            <h4>
                                {topic.title}
                            </h4>

                            <p className="text-muted small">
                                {topic.description}
                            </p>

                            <ul className="list-unstyled mt-4">

                                {topic.links.map((link, linkIndex) => (

                                    <li key={linkIndex} className="mb-3">

                                        <a href="#">
                                            {link}

                                            <i className="fa-solid fa-arrow-right ms-2"></i>
                                        </a>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default CreateTicket;