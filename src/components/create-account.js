
function CreateAccount() {
  return (
    <div className="container">
      <div className="pt-20">
        <img src="../image/arrow-back.svg" alt="arrow-back" />
      </div>
      <h1 className="text-4xl text-center font-bold font-DMSansBold pt-6 pb-2">
        Create an account
      </h1>
      <div className="text-center px-4 pb-20 abelRegular text-base leading-[22px] text-[#4F4F4F]">
        Invest and double your income now
      </div>
      <div className="mx-4 mb-4">
        <input placeholder="Full name" className="pl-6 font-abelRegular placeholder-[#828282] w-full flex justify-center items-center h-[60px] border border-[#828282] rounded-[20px] text-[#828282]" />
      </div>
      <div className="mx-4 mb-4">
        <input placeholder="TikTok Email address" className="pl-6 font-abelRegular placeholder-[#828282] w-full flex justify-center items-center h-[60px] border border-[#828282] rounded-[20px] text-[#828282]" />
      </div>
      <a href="/create-account" className="mb-4 font-abelRegular flex justify-start items-center pl-6 mx-4 h-[60px] bg-[#FFFFFF] rounded-[20px] text-[#31A062]">
        TikTok Password
      </a>
      <a href="/" className="mb-6 font-abelRegular flex justify-center items-center mx-4 h-[60px] bg-[#31A062] rounded-[20px] text-[#FFFFFF]">
        Create account
      </a>
      <a href="/create-account" className="font-abelRegular flex justify-center items-center mx-4 h-[60px] bg-[#FFFFFF] rounded-[20px] text-[#31A062]">
        Already have an account?
      </a>
    </div>
  )
}

export default CreateAccount;
