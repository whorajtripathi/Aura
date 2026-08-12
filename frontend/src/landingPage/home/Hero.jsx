

function Hero(){
    return(
        <>
            <div className="container p-5">
                <div className="row text-center">
                    <img src="images/homeHero.png" alt="Hero IMG" className="mb-5" height={"550px"} />
                    <h1 className="mt-2">Invest In Everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual, funds and more</p>
                    <button className="p-2 btn btn-primary" style={{width:"25%",margin:"0 auto"}}>SignUp!</button>
                </div>
            </div>
        </>
    );
}

export default Hero;