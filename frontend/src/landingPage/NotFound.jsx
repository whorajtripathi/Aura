import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <main className="aura-not-found">

            <div className="not-found-glow"></div>

            <div className="container">

                <div className="not-found-content">

                    <div className="not-found-code">
                        404
                    </div>

                    <div className="not-found-eyebrow">
                        PAGE NOT FOUND
                    </div>

                    <h1>
                        Looks like you've
                        <span> drifted off course.</span>
                    </h1>

                    <p>
                        The page you're looking for doesn't exist or
                        may have moved somewhere else.
                    </p>

                    <Link to="/" className="not-found-button">
                        Back to Aura
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                </div>

            </div>

        </main>
    );
}

export default NotFound;