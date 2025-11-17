export function ContactMe() {
  return (
    <section id="contactMe" className="section ml-12">
      <form action="">
        <div className="">
          <h2 className="text-9xl mb-15">Contact me</h2>
          <div className="mb-24 text-center">
            <h3 className=" text-7xl mb-1 ">Get in touch</h3>
            <p className="text-gray-300">
              If you have any questions or need assistance, feel free to reach
              out.
              <br /> If you're interested in collaborating on a project or just
              want to chat, I'd love to hear from you!
            </p>
          </div>
          <div className="container-4xl glass-card">
            <form
              action="#"
              method="POST"
              className="mx-auto max-w-xl sm:mt-3 "
            >
                      
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                          
                <div>
                              
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-white"
                  >
                                  First name             
                  </label>
                              
                  <div className="mt-2.5">
                                  
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                    />
                                
                  </div>
                            
                </div>
                          
                <div>
                              
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-white"
                  >
                                  Last name             
                  </label>
                              
                  <div className="mt-2.5">
                                  
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                    />
                                
                  </div>
                            
                </div>
                                     
                <div className="sm:col-span-2">
                              
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-white"
                  >
                                  Email             
                  </label>
                              
                  <div className="mt-2.5">
                                  
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                    />
                                
                  </div>
                            
                </div>
                          
                <div className="sm:col-span-2">
                              
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-white"
                  >
                                  Phone number             
                  </label>
                              
                  <div className="mt-2.5">
                                  
                    <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-white">
                                      
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                                                              
                      </div>
                                      
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="+32 482-914-78"
                        className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                      />
                                    
                    </div>
                                
                  </div>
                            
                </div>
                          
                <div className="sm:col-span-2">
                              
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-white"
                  >
                                  Message             
                  </label>
                              
                  <div className="mt-2.5">
                                  
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block resize-none w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                      defaultValue={""}
                    />
                                
                  </div>
                            
                </div>
                                   
              </div>
                      
              <div className="mt-10">
                          
                <button
                  type="submit"
                  className="block w-full cursor-pointer rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-xs hover:bg-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                              Let's talk           
                </button>
                        
              </div>
                    
            </form>
          </div>
        </div>
      </form>
    </section>
  );
}
