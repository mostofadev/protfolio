import HomeTitleContainer from "../../Container/HomeTitleContainer";
import HeaderContactList from "./HeaderContactList";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

function CvHeader() {
  const list = [
    { Icon: <DocumentTextIcon className="w-6 h-6 text-white" />, Text: "0123 4567 890" },
    { Icon: <DocumentTextIcon className="w-6 h-6 text-white" />, Text: "Evans@yourwebsite.com" },
    { Icon: <DocumentTextIcon className="w-6 h-6 text-white" />, Text: "www.yourwebsite.com" },
    { Icon: <DocumentTextIcon className="w-6 h-6 text-white" />, Text: "Dhaka" },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center bg-gray-700 p-6 lg:p-8 space-y-4 lg:space-y-0">
      {/* Title Section */}
      <div className="text-center lg:text-left">
        <HomeTitleContainer
          Title="Mostofa Kamal"
          Description="Senior Software Engineer"
        />
      </div>

      {/* Contact List Section */}
      <div className="w-full lg:w-auto">
        <HeaderContactList list={list} />
      </div>
    </div>
  );
}

export default CvHeader;
