import AllPageContainer from "../../Container/AllPageContainer";
import AllPageContainerSkeleton from "../../Skeleton/AllPageContainerSkeleton";
import PMenu from "./PMenu";

function PHeader({ loading }) {
  return (
    <div>
      <div>
        {loading ? (
          <AllPageContainerSkeleton gray={true} />
        ) : (
          <AllPageContainer
            Title="A collection of my best projects"
            Description="With many years in web development, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best creations."
            Button="Hire Me"
          />
        )}

        {/* <PMenu /> */}
      </div>
    </div>
  );
}

export default PHeader;
