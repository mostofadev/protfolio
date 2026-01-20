
import TButton from "../core/TButton"
import { ArrowLongRightIcon } from "@heroicons/react/20/solid"

// eslint-disable-next-line react/prop-types
function HomeTitleContainer({Description='',Title='',Button='',To='',Gray=true}) {
  return (
    <div>
       <div className={`${Gray ? 'bg-[var(--bg-two)]' : 'bg-[var(--bg-one)]'} py-12 px-2`}>
      <h2 className="text-[var(--text-one)] pl-8 border-green-500 border-l-4 text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 mx-4 sm:mx-20">
        {Title}
      </h2>

      <div className="flex flex-col lg:flex-row lg:items-start justify-center lg:justify-between items-center gap-6 mx-4 sm:mx-20">
        <p className="text-[var(--text-one)] text-base sm:text-lg md:text-xl lg:w-1/2 text-center lg:text-left leading-relaxed w-full">
        {Description}
        </p>
        {Button ? (<TButton
          Type="link"
          className="py-3 px-6 bg-green-500 text-[var(--text-one)] font-medium rounded-lg text-lg hover:bg-green-300 transform transition-all duration-500 hover:scale-105 hover:shadow-xl mt-4 lg:mt-0"
          Icon={<ArrowLongRightIcon className="w-5 h-5 ml-2" />}
          to={To}
        >
          {Button}
        </TButton>) : ''}
      </div>
    </div>
    </div>
  )
}

export default HomeTitleContainer
