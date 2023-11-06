
function SignUp() {
    return (
        <>
            <div className="start-animation">
                <div className="w-screen h-screen bg-[#FFFFFF]">
                <img src='../image/start-text.png' alt="sign-up-icon" />
                </div>
            </div>
            <div className="container">

                <h1 className="text-4xl text-center font-bold uppercase font-DMSansBold pt-20 pb-10">
                    Nasdaq 2.0
                </h1>
                <div className="flex justify-center">
                    <img src='../image/sign-up-icon.png' alt="sign-up-icon" />
                </div>
                <h3 className="text-4xl text-center font-bold font-DMSansBold pb-10 pt-4">
                    Go Viral On TikTok
                </h3>
                <h3 className="text-3xl text-center font-bold font-DMSansBold pb-6">
                    Get $1000 &#123;100,000&#125; Views Upon Sign Up
                </h3>
                <div className="text-center px-4 pb-5 abelRegular text-2xl leading-[22px] text-[#4F4F4F]">
                    We are your New Financial Advisors,
                    here to recommend the best
                    investments for you.
                </div>
                <a href="/create-account" className="font-abelRegular flex justify-center items-center mx-4 h-[60px] bg-[#31A062] rounded-[20px] text-[#FFFFFF]">
                    Create account
                </a>
                <a href="/create-account" className="font-abelRegular flex justify-center items-center mx-4 h-[60px] bg-[#FFFFFF] rounded-[20px] text-[#31A062]">
                    Login
                </a>
            </div>
        </>
    )
}

export default SignUp;
