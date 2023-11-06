
function Profile() {
  return (
    <div className="container relative overflow-x-hidden">
      <div className="pt-20 pb-4">
        <a href="/">
          <img src="../image/arrow-back.svg" alt="arrow-back" />
        </a>
      </div>
      <div>
        <div className="flex gap-[120px] items-center pb-10 relative">
          <div><h1 className="text-4xl font-bold font-DMSansBold ">
            Profile
          </h1></div>
          <div className="absolute -right-[50px]"><input className="border rounded-[20px] h-[60px] border-[#828282]" /></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img className="w-[150px] h-[150px]" src='../image/profile-img.png' alt="profile-img-icon" />
        <div className="pt-4">Jonas Macroni</div>
        <div className="pb-2">Expert</div>
      </div>
      <div className="shadow-md shadow-[#b2b2b2] my-4">
        <a href="/contact-info" className="grid grid-cols-4 items-center ml-3 pl-6 py-4 relative justify-center ">
          <div><img className="" src='../image/shape.svg' alt="shape-icon" /></div>
          <div className="pr-3 col-span-2">
            <div className="">Contact Info</div>
          </div>
          <div className="flex justify-end mr-8"><img className="" src='../image/view-arrow.svg' alt="view-arrow-icon" /></div>
        </a>
      </div>
      <div className="shadow-md shadow-[#b2b2b2] my-4">
        <a href="/tracking" className="grid grid-cols-4 items-center ml-3 pl-6 py-4 relative justify-center ">
          <div><img className="" src='../image/funding.svg' alt="funding-icon" /></div>
          <div className="pr-3 col-span-2">
            <div className="">Tracking of Boosts</div>
          </div>
          <div className="flex justify-end mr-8"><img className="" src='../image/view-arrow.svg' alt="view-arrow-icon" /></div>
        </a>
      </div>
      <div className="shadow-md shadow-[#b2b2b2] my-4">
        <a href="/bank" className="grid grid-cols-4 items-center ml-3 pl-6 py-4 relative justify-center ">
          <div><img className="" src='../image/bank.svg' alt="bank-icon" /></div>
          <div className="pr-3 col-span-2">
            <div className="">Bank Account Info</div>
          </div>
          <div className="flex justify-end mr-8"><img className="" src='../image/view-arrow.svg' alt="view-arrow-icon" /></div>
        </a>
      </div>
      <div className="shadow-md shadow-[#b2b2b2] my-4">
        <a href="/404" className="grid grid-cols-4 items-center ml-3 pl-6 py-4 relative justify-center ">
          <div><img className="" src='../image/doc.svg' alt="doc-icon" /></div>
          <div className="pr-3 col-span-2">
            <div className="">Document Info</div>
          </div>
          <div className="flex justify-end mr-8"><img className="" src='../image/view-arrow.svg' alt="view-arrow-icon" /></div>
        </a>
      </div>
      <div className="shadow-md shadow-[#b2b2b2] my-4">
        <a href="/404" className="grid grid-cols-4 items-center ml-3 pl-6 py-4 relative justify-center ">
          <div><img className="" src='../image/setting.svg' alt="setting-icon" /></div>
          <div className="pr-3 col-span-2">
            <div className="">Settings</div>
          </div>
          <div className="flex justify-end mr-8"><img className="" src='../image/view-arrow.svg' alt="view-arrow-icon" /></div>
        </a>
      </div>


      <div className="fixed bottom-0 left-0 w-full bg-[#FFFFFF]">
        <div className="flex justify-between mx-5">
          <a href="/" className="flex flex-col justify-center items-center p-2">
            <div><img src='../image/home.png' alt="home-icon" /></div>
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
            <div><img src='../image/profile-active.svg' alt="profile-active-icon" /></div>
            <div className="text-sm pt-1">Account</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile;
