
function ContactInfo() {
  return (
    <div className="container relative">
      <div className="pt-20 pb-4 flex items-center justify-between">
        <a href="/profile">
          <img src="../image/arrow-back.svg" alt="arrow-back" />
        </a>
        <h1 className="text-lg">
          Contact Info
        </h1>
        <div />
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <img className="w-[150px] h-[150px]" src='../image/profile-img-edit.png' alt="profile-img-icon" />
        <div className="absolute"><img className="w-[24px] h-[24px]" src='../image/edit-pen.svg' alt="profile-img-icon" /></div>
      </div>
      <div className="border-b mt-8">
        <div className="flex justify-between  gap-3 border-[#4A4A4A] ml-3 mb-1 relative">
          <div className="pr-3">
            <div className="">Name</div>
          </div>
          <div className="absolute text-sm right-0 top-0 opacity-60">Change</div>
        </div>
        <div className="ml-3 w-full pb-2"><input value="Warren Buffet" type="text" className="w-full" /></div>
      </div>
      <div className="border-b mt-8">
        <div className="flex justify-between  gap-3 border-[#4A4A4A] ml-3 mb-1 relative">
          <div className="pr-3">
            <div className="">Birthdate</div>
          </div>
          <div className="absolute text-sm right-0 top-0 opacity-60">Change</div>
        </div>
        <div className="ml-3 w-full pb-2"><input value="05 November 1993" type="text" className="w-full" /></div>
      </div>
      <div className="border-b mt-8">
        <div className="flex justify-between  gap-3 border-[#4A4A4A] ml-3 mb-1 relative">
          <div className="pr-3">
            <div className="">Gender</div>
          </div>
          <div className="absolute text-sm right-0 top-0 opacity-60">Change</div>
        </div>
        <div className="ml-3 w-full pb-2"><input value="Male" type="text" className="w-full" /></div>
      </div>
      <div className="border-b mt-8">
        <div className="flex justify-between  gap-3 border-[#4A4A4A] ml-3 mb-1 relative">
          <div className="pr-3">
            <div className="">Email</div>
          </div>
          <div className="absolute text-sm right-0 top-0 opacity-60">Change</div>
        </div>
        <div className="ml-3 w-full pb-2"><input value="warren.buff@invest.ai" type="text" className="w-full" /></div>
      </div>
      <div className="border-b mt-8">
        <div className="flex justify-between  gap-3 border-[#4A4A4A] ml-3 mb-1 relative">
          <div className="pr-3">
            <div className="">Phone Number</div>
          </div>
        </div>
        <div className="ml-3 w-full pb-2"><input value="-" type="text" className="w-full" /></div>
      </div>
      <div className="border-b mt-8">
        <div className="flex justify-between  gap-3 border-[#4A4A4A] ml-3 mb-1 relative">
          <div className="pr-3">
            <div className="">Address</div>
          </div>
        </div>
        <div className="ml-3 w-full pb-2"><input value="-" type="text" className="w-full" /></div>
      </div>


    </div>
  )
}

export default ContactInfo;
