import { useNavigate } from "react-router-dom";
import "./home/Home.css";

function OpenAccount() {
    const navigate = useNavigate();

    return (
        <section className="home-cta">
            <div className="cta-glow"></div>

            <div className="container">
                <div className="cta-content">
                    <span className="home-eyebrow">
                        START WITH AURA
                    </span>

                    <h2>
                        Start your investing
                        <span> journey.</span>
                    </h2>

                    <p>
                        Get access to powerful market tools, real-time
                        insights, and a simple investing experience —
                        all in one place.
                    </p>

                    <button
                        className="aura-primary-btn"
                        onClick={() => navigate("/signup")}
                    >
                        Create your account
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default OpenAccount;