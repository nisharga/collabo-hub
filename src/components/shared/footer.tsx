 
import Link from "next/link";
const Footer = () => {
    return (
        <div className="container px-4">
            <div className="mt-20 rounded-lg -mx-2 relative">
              {/* footer left image */}
              <div className="footerLeftImage"></div>
              {/* footerArea */}
              <div className="bg-white p-4 rounded-tl-[70px] rounded-tr-lg">
                 
                <hr className="divide-y-1 my-8" />
                <div className="footerContent">
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 lg:col-span-2 my-2">
                      <h3 className="text-xl font-bold">About</h3>
                      <div className="lg:mt-6 mt-4 flex flex-col footerLinkZone">
                        <Link href="/Company">Company</Link>
                        <Link href="/History">History</Link>
                        <Link href="/Careers">Careers</Link>
                      </div>
                    </div>
                    <div className="col-span-6 lg:col-span-2 my-2">
                      <h3 className="text-xl font-bold">Support</h3>
                      <div className="lg:mt-6 mt-4 flex flex-col footerLinkZone">
                        <Link href="/faq">Faq</Link>
                        <Link href="/helpcenter">Help Center</Link>
                        <Link href="/support">Support</Link>
                      </div>
                    </div>
                    <div className="col-span-6 lg:col-span-2 my-2">
                      <h3 className="text-xl font-bold">Budbo Token</h3>
                      <div className="lg:mt-6 mt-4 flex flex-col footerLinkZone">
                        <Link href="/excahnge">Exchanges</Link>
                        <Link href="/coinmarktcap">Coinmarketcap</Link>
                        <Link href="/coingeco">Coingeco</Link>
                      </div>
                    </div>
                    <div className="col-span-6 lg:col-span-3 my-2">
                      <h3 className="text-xl font-bold">
                        Despenssary Solution
                      </h3>
                      <div className="lg:mt-6 mt-4 flex flex-col footerLinkZone">
                        <Link href="/despensary">Add your despensary</Link>
                        <Link href="/ecomamrtce">Ecommerce</Link>
                        <Link href="/feettracking">FeetTracking</Link>
                        <Link href="/block">BlockChain</Link>
                      </div>
                    </div>
                    <hr className="divide-y-1 my-10 col-span-12 lg:hidden" />
                    <div className="col-span-12 lg:col-span-3 my-2">
                      <h3 className="lg:text-xl text-lg font-bold mb-2">
                        Subcribe to the free newsletter
                      </h3>
                      <p className="text-[#736b8e] text-base">
                        Signup and get 20% discount on your first order
                      </p>
                      <div className="lg:mt-6 mt-4 flex flex-col footerLinkZone">
                        <div className="">
                          <form onSubmit={(e) => e.preventDefault()}>
                            <input
                              type="text"
                              className="focus:shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[72%]"
                              placeholder="Your Email Address"
                            />
                            <input
                              type="submit"
                              value="Sign Up"
                              className="bg-[#6E2DFA] py-1.5 text-[#fff] rounded w-[25%] ml-[2%]"
                            />
                          </form>
                          {/* <div className="flex justify-center lg:justify-start mt-3">
                            <Link to="/facebook">
                              <Image
                                className="border rounded-xl w-10 h-10 p-2 "
                                src={logo2}
                                alt=""
                              />
                            </Link>
                            <Link to="/instagram">
                              <Image
                                className="border rounded-xl w-10 h-10 p-2 mx-2"
                                src={logo2}
                                alt=""
                              />
                            </Link>
                            <Link to="/twitter">
                              <Image
                                className="border rounded-xl w-10 h-10 p-2 mx-2"
                                src={logo2}
                                alt=""
                              />
                            </Link>
                            <Link to="/youtube">
                              <Image
                                className="border rounded-xl w-10 h-10 p-2 mx-2"
                                src={logoicon3}
                                alt=""
                              />
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="divide-y-1 my-10 hidden lg:block" />

                <div className="grid grid-cols-12 ">
                  <div className="col-span-12 lg:col-span-5 my-2">
                    <div className="lg:flex">
                      <div className="flex items-center justify-center">
                        <div>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.8244 2.17542C13.742 2.09312 13.6374 2.0366 13.5234 2.01273C13.4094 1.98887 13.291 1.9987 13.1825 2.04102L2.38265 6.24094C2.26944 6.28494 2.17224 6.36227 2.10391 6.4627C2.03559 6.56313 1.99936 6.68193 2.00001 6.8034C2.00066 6.92486 2.03816 7.04327 2.10756 7.14296C2.17695 7.24266 2.27497 7.31894 2.38865 7.36172L6.93417 9.06569L8.63814 13.6112C8.6811 13.7254 8.75787 13.8238 8.85821 13.8933C8.95855 13.9628 9.07769 14 9.19973 14C9.32065 14 9.43875 13.9634 9.53854 13.8951C9.63832 13.8268 9.71514 13.7299 9.75892 13.6172L13.9588 2.81741C14.0012 2.7089 14.011 2.59042 13.9871 2.47642C13.9633 2.36243 13.9067 2.25784 13.8244 2.17542Z"
                              fill="#736B8E"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold ml-2">
                          380 W 62nd Ave, Denver, CO
                        </h3>
                      </div>
                      <div className="lg:col-span-2 col-span-12 md:border text-center lg:py-1 lg:rounded-xl lg:ml-[30%] lg:w-[220px] lg:flex lg:items-center lg:justify-center ">
                        <div className="">
                          <h4 className="uppercase font-bold text-[#736b8e] text-[14px]">
                            Change Location
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-5 my-2">
                    <div className="footerLinkZone flex flex-col text-center lg:text-right lg:flex-row lg:justify-end">
                      <Link className="lg:mr-2" href="/terms">
                        Terms and Conditions
                      </Link>
                      <Link className="lg:mx-3" href="/privacy">
                        Privacy Policy
                      </Link>
                      <Link className="lg:mr-2" href="/cookie">
                        Cookie Poclicy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
        </div>
    );
};

export default Footer;