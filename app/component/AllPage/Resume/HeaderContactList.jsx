/* eslint-disable react/prop-types */

function HeaderContactList({ list }) {
    return (
      <div className="border-l border-gray-600 p-4">
        <ul>
          {list.map((item, index) => (
            <li key={index} className="flex space-x-2 items-center my-4">
              <p>{item.Icon}</p>
              <p className="text-white">{item.Text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default HeaderContactList;
  