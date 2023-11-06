
function Notification() {
  return (
    <div className="container relative">
      <div className="pt-20 pb-4">
        <a href="/">
        <img src="../image/arrow-back.svg" alt="arrow-back" />
        </a>
      </div>
      <h1 className="text-4xl font-bold font-DMSansBold pb-10">
        Notification
      </h1>
      <div className="flex justify-between border-b gap-3 border-[#4A4A4A] ml-3 pb-4 mb-4 relative">
        <div><img className="min-w-[70px] min-h-[70px]" src='../image/news1.png' alt="news-icon" /></div>
        <div className="pr-3">
          <div className="">How to Start: </div>
          <div className="text-sm">Select Product  -&gt; Become an Affiliate  -&gt; Create Content -&gt; Pump Ad Spend -&gt;</div>
        </div>
        <div className="absolute text-sm right-0 top-0 opacity-60">15 min ago</div>
      </div>
      <div className="flex justify-between items-center border-b gap-3 border-[#4A4A4A] ml-3 pb-4 mb-4 relative">
        <div><img className="min-w-[70px] min-h-[70px]" src='../image/news2.png' alt="news-icon" /></div>
        <div className="pr-3">
          <div className="text-sm w-[70%]">Check out the Investment Guides & Videos</div>
        </div>
        <div className="absolute text-sm right-0 top-0 opacity-60">3 min ago</div>
      </div>
      <div className="flex justify-between items-center border-b gap-3 border-[#4A4A4A] ml-3 pb-4 mb-4 relative">
        <div><img className="min-w-[70px] min-h-[70px]" src='../image/news3.png' alt="news-icon" /></div>
        <div className="pr-3">
          <div className="text-sm w-[70%]">100,000 &#123;$1,000&#125; in Ad Spend provided as upfront value
            &#123;Let’s be Friends!&#125;
          </div>
        </div>
        <div className="absolute text-sm right-0 top-0 opacity-60">30 secs ago</div>
      </div>
    </div>
  )
}

export default Notification;
