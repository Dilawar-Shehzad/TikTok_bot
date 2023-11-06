
function Home() {
  return (
    <div className="container relative overflow-x-hidden">
      <div className="flex justify-between pt-20 pb-4">
        <div>
          <img src='../image/menu.svg' alt="menu-icon" />
        </div>
        <div className="flex justify-between gap-4">
          <a href="/video">
            <img src='../image/transaction.svg' alt="transaction-icon" />
          </a>
          <a href="notification">
            <img src='../image/notification.svg' alt="notification-icon" />
          </a>
        </div>
      </div>
      <h1 className="text-4xl font-bold font-DMSansBold pb-10">
        Welcome, Jessie
      </h1>
      <div className="relative">
        <img
          className="w-full"
          src='../image/invest-now.png'
          alt="invest-now-img"
        />
        <a href="/" className="bg-[#FFFFFF] h-[40px] rounded-[20px] w-[110px] absolute top-[68px] right-[15px] text-xl text-[#31A078] flex pt-[4px] ">Invest now</a>
      </div>
      <div className="flex gap-4 pb-10 pt-4">
        <h3 className="text-xl font-bold font-DMSansBold">
          Best Plans - All Organic
        </h3>
        <div className="text-[#FE555D]">See All →</div>
      </div>
      <div className="flex gap-[25px] relative">
        <div className="gold-gradient w-[134px] h-[170px] flex flex-col relative rounded-[20px]">
          <div className="text-white pl-4 pt-4 pb-2">Gold</div>
          <div className="text-white pl-2 text-sm z-10">
            1,000,000 Views
            for $2,500
            &#123;$10,000 as Paid Ads&#125;
            Our CPM is $2.5 vs TikTok $10
          </div>
          <img className="z-1 absolute min-w-[90px] min-h-[90px] right-0 bottom-0" src='../image/gold-package-icon.png' alt="transaction-icon" />
        </div>
        <div className="silver-gradient w-[134px] h-[170px] flex flex-col relative rounded-[20px]">
          <div className="text-white pl-4 pt-4 pb-2">Silver</div>
          <div className="text-white pl-2 text-sm z-10">
            250,000 Views
            for $625
            &#123;$2,500 as Paid Ads&#125;
            Our CPM is $2.5 vs TikTok $10
          </div>
          <img className="z-1 absolute min-w-[90px] min-h-[90px] right-0 bottom-0" src='../image/silver-package-icon.png' alt="transaction-icon" />
        </div>
        <div className="absolute -right-[80px]  platinum-gradient w-[134px] h-[170px] flex flex-col rounded-[20px]">
          <div className="text-white pl-4 pt-4 pb-2">Platinum</div>
          <div className="text-white pl-2 text-sm z-10">
            500,000 Views
            for $1,250
            &#123;$5,000 as Paid Ads&#125;
            Our CPM is $2.5 vs TikTok $10
          </div>
          <img className="absolute min-w-[45px] max-h-[130px] left-[15px] bottom-0" src='../image/platinum-package-icon.png' alt="transaction-icon" />
        </div>
      </div>
      <div className="flex gap-4 pb-10 pt-4">
        <h3 className="text-xl font-bold font-DMSansBold">
          Investment Guide - Must Watch!
        </h3>
      </div>
      <div className="flex justify-between border-b border-[#4A4A4A] ml-3 pb-4 mb-4">
        <div className="pr-3">
          <div className="font-bold font-DMSansBold">How to Invest 100,000 Views</div>
          <div className="text-sm">In summary: Find Product -&gt; Become an Affiliate -&gt; Create Content -&gt; Pump Ad Spend </div>
        </div>
        <div><img className="min-w-[61px] min-h-[61px]" src='../image/invest-img.svg' alt="invest-img-icon" /></div>
      </div>
      <div className="flex justify-between border-b border-[#4A4A4A] ml-3 pb-4 mb-4">
        <div className="pr-3">
          <div className="font-bold font-DMSansBold">Video Link Selection</div>
          <div className="text-sm">Place your videos in this section</div>
          <div className="text-sm">More than 1, Views will be Divided Equally</div>
        </div>
        <div><img className="min-w-[61px] min-h-[61px]" src='../image/video-img.svg' alt="video-img-icon" /></div>
      </div>
      <div className="text-center px-4 pb-5 font-DMSansBold text-xl leading-[22px] text-[#4F4F4F]">
        Welcome to The New NASDAQ
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-[#FFFFFF]">
        <div className="flex justify-between mx-5">
          <a href="/" className="flex flex-col justify-center items-center p-2">
            <div><img src='../image/home-active.svg' alt="home-active-icon" /></div>
            <div className="text-sm pt-1">Home</div>
          </a>
          <a href="/my-assets" className="flex flex-col justify-center items-center p-2">
            <div><img src='../image/search.svg' alt="search-icon" /></div>
            <div className="text-sm pt-1">My Assets</div>
          </a>
          <a href="/video" className="flex flex-col justify-center items-center p-2">
            <div><img src='../image/transaction.svg' alt="transaction-icon" /></div>
            <div className="text-sm pt-1">Upload Video</div>
          </a>
          <a href="/profile" className="flex flex-col justify-center items-center p-2">
            <div><img src='../image/profile.svg' alt="profile-icon" /></div>
            <div className="text-sm pt-1">Account</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home;
