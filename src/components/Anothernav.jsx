function Anothernav(){
    return(
        <>
        <nav className="bg-gray-700 h-[80px] w-full">
            <input type="checkbox" id="check" className=" hidden"/>
            <label htmlFor="check" className="max-[858px]:block text-[30px] text-white float-right leading-[80px] mr-[40px] cursor-pointer hidden max-[768px]:pl-[50px]  ">
                <i className="fa fa-bars"></i>
            </label>
            <label htmlFor="logo" className="max-[952px]:text-[30px] max-[952px]:pl-[50px] pl-[100px] pr-[100px] font-bold text-white text-[35px] leading-[80px]">UK Tech Build</label>
            <ul className="float-right mr-[20px] max-[858px]:fixed max-[858px]:w-[100%] max-[858px]:h-[900px] max-[858px]:top-[80px] max-[858px]:top-[100%] transition-all max-[858px]:text-center max-[858px]:bg-gray-500">
              <li className="d-inline-block leading-[80px] ml-[10px] mr-[10px] max-[858px]:block max-[858px]:mt-[50px] max-[858px]:mb-[50px] max-[858px]:ml-0 max-[858px]:mr-0 max-[858px]:leading-30px"><a href="" className="max-[952px]:text-[20px] text-white hover:no-underline hover:bg-gray-500 uppercase py-[7px] px-[13px] rounded bg-gray-500 text-[16px]  ">Home</a></li>
              <li className="d-inline-block leading-[80px] ml-[10px] mr-[10px] max-[858px]:block max-[858px]:mt-[50px] max-[858px]:mb-[50px] max-[858px]:ml-0 max-[858px]:mr-0 max-[858px]:leading-30px"><a href="" className="max-[952px]:text-[20px] text-white hover:no-underline hover:bg-gray-500 uppercase py-[7px] px-[13px] rounded text-[16px]  ">About Us</a></li>
              <li className="d-inline-block leading-[80px] ml-[10px] mr-[10px] max-[858px]:block max-[858px]:mt-[50px] max-[858px]:mb-[50px] max-[858px]:ml-0 max-[858px]:mr-0 max-[858px]:leading-30px"><a href="" className="max-[952px]:text-[20px] text-white hover:no-underline hover:bg-gray-500 uppercase py-[7px] px-[13px] rounded text-[16px]  ">Digital Marketing</a></li>
              <li className="d-inline-block leading-[80px] ml-[10px] mr-[10px] max-[858px]:block max-[858px]:mt-[50px] max-[858px]:mb-[50px] max-[858px]:ml-0 max-[858px]:mr-0 max-[858px]:leading-30px"><a href="" className="max-[952px]:text-[20px] text-white hover:no-underline hover:bg-gray-500 uppercase py-[7px] px-[13px] rounded text-[16px]  ">Our Blogs</a></li>
              <li className="d-inline-block leading-[80px] ml-[10px] mr-[10px] max-[858px]:block max-[858px]:mt-[50px] max-[858px]:mb-[50px] max-[858px]:ml-0 max-[858px]:mr-0 max-[858px]:leading-30px"><a href="" className="max-[952px]:text-[20px] text-white hover:no-underline hover:bg-gray-500 uppercase py-[7px] px-[13px] rounded text-[16px]  ">FAQs</a></li>
            </ul>
          </nav>
        </>
    )
}