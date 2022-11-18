import { RiMore2Fill } from "react-icons/ri";

const Message = ({ children, main }) => {
  return (
    <div className={`mb-2 flex items-center ${main && "justify-end"} gap-2`}>
      <div
        className={` rounded-bl-lg py-2 px-4 ${
          main
            ? "order-1 rounded-tl-lg rounded-br-lg bg-secondary text-white "
            : "rounded-tr-lg rounded-br-lg bg-gray-100 dark:bg-[#292A30] dark:text-gray-100"
        }`}
      >
        {children}
      </div>
      <button className="text-gray-500">
        <RiMore2Fill />
      </button>
    </div>
  );
};

export default Message;
