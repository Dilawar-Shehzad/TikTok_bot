
function Bank() {
  return (
    <div className="container relative">
      <div className="pt-20 pb-20 flex items-center justify-between">
        <a href="/profile">
          <img src="../image/arrow-back.svg" alt="arrow-back" />
        </a>
        <h1 className="text-lg">
          Bank of account info
        </h1>
        <div />
      </div>
      <div className="grid grid-cols-5 justify-between items-center border-b gap-3 border-[#4A4A4A] ml-3 pb-4 mb-20 relative">
        <div><img className="min-w-[47px] min-h-[47px]" src='../image/bank2.png' alt="news-icon" /></div>
        <div className="col-span-3">
          <div className="text-sm">Bank of Amrica - 0182128xxx</div>
          <div className="text-sm">Jonas Macroni</div>
        </div>
        <div className="flex justify-end text-sm right-0 top-0 opacity-60"><img className="min-w-[24px] min-h-[24px]" src='../image/dotter.svg' alt="news-icon" /></div>
      </div>
      <div className="grid grid-cols-5 justify-between items-center border-b gap-3 border-[#4A4A4A] ml-3 pb-4 mb-20 relative">
        <div><img className="min-w-[47px] min-h-[47px]" src='../image/bank1.png' alt="news-icon" /></div>
        <div className="col-span-3">
          <div className="text-sm">Zenith Bank - 0182128xxx</div>
          <div className="text-sm">Jonas Macroni</div>
        </div>
        <div className="flex justify-end text-sm right-0 top-0 opacity-60"><img className="min-w-[24px] min-h-[24px]" src='../image/dotter.svg' alt="news-icon" /></div>
      </div>
      <div className="fixed bottom-[30px] w-full left-0 px-4">
        <a href="/profile" className="mb-6 font-abelRegular flex justify-center items-center mx-4 h-[60px] bg-[#31A062] rounded-[20px] text-[#FFFFFF]">
          Add account
        </a>
      </div>
    </div>
  )
}

export default Bank;
