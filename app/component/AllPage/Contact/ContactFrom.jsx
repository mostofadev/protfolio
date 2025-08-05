import TButton from "../../core/TButton"
import TFrom from "../../core/TFrom"
import TInput from "../../core/TInput"
import TRadio from "../../core/TRadio"
import TTextarea from "../../core/TTextarea"

function ContactFrom() {
  return (
    <div className="border border-[var(--bg-two)] mt-6 mx-6 sm:mx-20 md:mx-20 rounded-xl p-4 ">
      <TFrom>
        <div className="md:flex md:justify-center w-full">
            <TInput
            Type="text"
            Placeholder="Enter Name*"
            
            />
            <TInput
            Type="email"
            Placeholder="Email Address*"
            
            />
        </div>
        <div className="md:flex md:justify-center w-full">
            <TInput
            Type="text"
            Placeholder="Phone*"
            
            />
            <TInput
            Type="text"
            Placeholder="Location*"
            
            />
        </div>
        <div className="md:flex md:justify-center w-full">
           <TTextarea
             Placeholder="Your Message"
           />
            
        </div>
        <div className=" mx-2 w-full">
           <TRadio
             label="Save my name, email, and website in this browser for the next time."
             
           />
            
        </div>
        <div className=" my-6 mx-2 w-full">
           <TButton>
            Sent Message
           </TButton>
            
        </div>
        
      </TFrom>

        
     
    </div>
  )
}

export default ContactFrom
