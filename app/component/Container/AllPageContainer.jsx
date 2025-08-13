import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import TButton from "../core/TButton";

// eslint-disable-next-line react/prop-types
function AllPageContainer({ Title, Description, Button = "", icon }) {
  const Icon = icon ? (
    icon
  ) : (
    <PaperAirplaneIcon className="w-5 h-5 rotate-[-45deg]" />
  );
  return (
    <div className="bg-[var(--bg-one)] border-b border-[var(--bg-two)] py-6">
      <div className="w-full text-center mx-auto flex justify-center flex-col items-center px-4">
        
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--text-one)] mb-2 md:mb-3 p-2 break-words">
          {Title}
        </h2>

        {Description ? (
          <p 
            className="lg:text-xl text-sm leading-[130%] text-[var(--text-one)] mb-4 md:mb-8 break-words text-center max-w-4xl w-full"
          >
            {Description}
          </p>
        ) : null}

        {Button ? (
          <TButton Type="link" Icon={Icon} To="#">
            {Button}
          </TButton>
        ) : null}

      </div>
    </div>
  );
}

export default AllPageContainer;
