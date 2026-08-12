

function Award(){
    return(
        <>
            <div className="container p-5 mt-3">
                <div className="row">

                    <div className="col-6">
                        <img src="images/largestBroker.svg" alt="largestBroker" style={{ width: "80%" }}/>
                    </div>


                    <div className="col-6 mt-3">
                        <h1>Largest stock broker in India</h1>
                        <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                        
                        <div className="row mt-5 mb-5">
                            <div className="col-6">
                                <ul>
                                    <li className="mb-1">Futures and Options</li>
                                    <li className="mb-1">Commodity derivatives</li>
                                    <li className="mb-1">Currency derivatives</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li className="mb-1">Stocks & IPOS</li>
                                    <li className="mb-1">Direct mutual funds</li>
                                    <li className="mb-1">Bonds and Go</li>
                                </ul>
                            </div>
                        </div>


                        <div>
                            <img
                                src="images/pressLogos.png"
                                alt="pressLogos"
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Award;