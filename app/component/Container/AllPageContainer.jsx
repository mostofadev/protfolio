import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import TButton from "../core/TButton"

// eslint-disable-next-line react/prop-types
function AllPageContainer({Title,Description,Button='',icon}) {
  const Icon = icon ? (
    icon
  ) : (
    <PaperAirplaneIcon className="w-5 h-5 rotate-[-45deg]" />
  );
  return (
    <div className="bg-[var(--bg-one)] border-b  border-[var(--bg-two)] py-6">
        <div className="w-100 text-center  mx-auto flex justify-center flex-col items-center ">
      <h2 className="text-4xl font-bold text-[var(--text-one)] mb-2 md:mb-3  p-6">{Title}</h2>

              { Description ? (
                <p 
                    className="text-xl leading-[130%] text-[var(--text-one)] mb-4 md:mb-8 "
                    >
                    {Description}
                    </p>
              ) : ''}
      

             {Button ? ( <TButton
              Type="link"
              Icon={Icon}
              To="#"
              >
              {Button}
            </TButton>) : ''}
    </div>
    </div>
  )
}

export default AllPageContainer
