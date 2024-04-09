import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <section className="w-full flex flex-center justify-between px-20 gap-3  ">
      <div className=" flex flex-col max-w-xl">
        <p className=" font-sans font-bold text-5xl dark:text-white">
          
          Create an Albot that 
          serves your sales teams and your customer support
        </p>
        <p className="mt-5 text-gray-400">Support at every step of the way</p>

        <div className="  flex justify-between relative mt-5 bg-slate-50  border rounded-lg border-black h-72 max-w-lg p-10 mb-5">


        <button className=" h-14 w-48 px-1 ml-1 border rounded-lg  bg-black text-white px-3  mt-2 absolute top-2 left-2 z-10">Hi there, I'm Landbot!</button>
        <Image 
        className=" absolute top-20 left-4"
        src="/circle black.png"
        alt="circle"
        width={20}
        height={20}/>
        <Image 
        className=" absolute top-16 left-10"
        src="/circle black.png"
        alt="circle"
        width={30}
        height={30}/>
              
        <button className=" h-12 px-1 ml-1 border rounded-md bg-purple-600 text-white  mt-2 absolute bottom-1 left-0">What can you do?</button>
        <button className=" h-10 px-1 ml-1 border rounded-md bg-purple-600 text-white  mt-2 absolute bottom-1  left-40">Lorem ipsumLorem ipsum?</button>
        <button className=" h-12 px-1 ml-1 border rounded-md bg-green-600 text-white  mt-2 absolute bottom-1  left-96 mr-1">See it in action</button>
        
        

        </div>
      </div>

      <div className=" flex flex-col gap-1 mb-5 mt-5">
        <form
          action="/submit"
          method="POST"
          className="  w-96 bg-slate-50  rounded-lg shadow-md p-6 mx-auto"
        >
          <div>
            <label className=" relative input-box">
              <input
                className=" transition duration-300 w-full h-10 border border-slate-300 rounded-md bg-slate-50 focus:border-black focus:text-black outline-none px-4"
                type="text"
                name="name"
                required
              
              />

              <span className=" absolute left-0 top-0 mx-2 px-2 transition duration-300  text-slate-400 ">E-mail</span>
            </label>
          </div>

          

          <div className="mt-7">
            <label className=" relative input-box">
              <input
                className=" transition duration-300 w-full h-10 border border-slate-300 rounded-md bg-slate-50 focus:border-black focus:text-black outline-none px-4"
                type="text"
                name="name"
                required
              />

              <span className=" absolute left-0 top-0 mx-2 px-2 transition duration-300  text-slate-400">Phone</span>
            </label>
          </div>
          

          

          <div className="mt-7">
            <label className=" relative input-box">
              <input
                className=" transition duration-300 w-full h-10 border border-slate-300 rounded-md bg-slate-50 focus:border-black focus:text-black outline-none px-4"
                type="text"
                name="name"
                required
              />

              <span className=" absolute left-0 top-0 mx-2 px-2 transition duration-300  text-slate-400">Confirmation code</span>
            </label>
          </div>

          <div className="mt-7">
            <label className=" relative input-box">
              <input
             className=" transition duration-300 w-full h-10 border border-slate-300 rounded-md bg-slate-50 focus:border-black focus:text-black outline-none px-4"

                
                type="text"
                name="name"
                required
              />

              <span className=" absolute left-0 top-0 mx-2 px-2 transition duration-300  text-slate-400">Create a password </span>
            </label>
          </div>

          <div className="mt-7">
            <label className=" relative input-box">
              <input
                className=" transition duration-300 w-full h-10 border border-slate-300 rounded-md bg-slate-50  focus:border-black focus:text-black outline-none px-4"
                type="text"
                name="name"
                required
              />

              <span className=" absolute left-0 top-0 mx-2 px-2 transition duration-300  text-slate-400">Company name</span>
            </label>
          </div>
          <div className="mt-7">
            <label className=" relative input-box">
              <input
                className=" transition duration-300 w-full h-10 border border-slate-300 rounded-md bg-slate-50 focus:border-black focus:text-black outline-none px-4"
                type="text"
                name="name"
                required
              />

              <span className=" absolute left-0 top-0 mx-2 px-2 transition duration-300  text-slate-400">Link for website</span>
            </label>
          </div>
          
          <button className="black_btn2 mt-2">Create an account</button>


          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
           <div className="flex flex-col">
               <p className=" text-slate-400">
            Already have an account</p>
            <Link className="text-blue-600 hover:underline ml-1" href="#">
              Sign in
            </Link>
            
           </div>
         
          <Link className=" text-red-700 hover:underline" href="#">
            Forgot your password?
          </Link>
        </div>
        </form>
      </div>
    </section>
  );
}
