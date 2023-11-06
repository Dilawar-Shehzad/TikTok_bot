
function Tracking() {
  return (
    <div className="container relative">
      <div className="pt-20 pb-4 flex items-center justify-between">
        <a href="/profile">
          <img src="../image/arrow-back.svg" alt="arrow-back" />
        </a>
        <div />
      </div>
      <h3 className="text-lg">
        Your total asset portfolio
      </h3>
      <div className="flex gap-8">
        <h3 className="text-4xl pt-2">
          9,000 Views so Far
        </h3>
        <div className="flex items-center">
          <img src="../image/up-arrow.svg" alt="arrow-back" />
          <div className="text-[#00B907]">+0%</div>
        </div>
      </div>

      <h1 className="font-DMSansBold text-2xl pt-8 pb-4">Current Plans</h1>
      <img src="../image/free-package.png" alt="arrow-back" />
      <h4 className="flex justify-center text-[#FE555D] pt-6">See All Plans →</h4>
      <h2 className="font-DMSansBold text-2xl pt-8 pb-4">History</h2>
      <div className="border-b border-[#b3b3b3] pb-1 mb-4">
        <div className="font-DMSansBold text-xl">Day 4: 340 Views</div>
        <div className="flex justify-between">
          <div>Click to See Video</div>
          <div>TUE 22 Jun 2020</div>
        </div>
      </div>
      <div className="border-b border-[#b3b3b3] pb-1 mb-4">
        <div className="font-DMSansBold text-xl">Day 3: 932 Views</div>
        <div className="flex justify-between">
          <div>Click to See Video</div>
          <div>TUE 22 Jun 2020</div>
        </div>
      </div>
      <div className="border-b border-[#b3b3b3] pb-1 mb-4">
        <div className="font-DMSansBold text-xl">Day 2: 450 Views</div>
        <div className="flex justify-between">
          <div>Click to See Video</div>
          <div>TUE 22 Jun 2020</div>
        </div>
      </div>
      <div className="border-b border-[#b3b3b3] pb-1 mb-4">
        <div className="font-DMSansBold text-xl">Day 1: 1300 Views</div>
        <div className="flex justify-between">
          <div>Click to See Video</div>
          <div>TUE 22 Jun 2020</div>
        </div>
      </div>
    </div>
  )
}

export default Tracking;
