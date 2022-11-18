import { Link } from "react-router-dom";
import UserImg from "./UserImg";

const User = ({
  name,
  img,
  active,
  lastMessage,
  time,
  isTyping,
  unreadMessage,
}) => {
  return (
    <a className="mb-8 flex w-full gap-2 rounded ring-8 ring-white dark:bg-[#1E1F24] dark:ring-[#1E1F24]">
      <UserImg src={img} width={40} height={40} active={active} />
      <div className="flex w-[85%] justify-between">
        <div>
          <h3 className=" font-semibold dark:text-gray-200">{name}</h3>
          <p className={`w-44 ${isTyping ? "text-green-300" : "truncate dark:text-gray-200"}`}>
            {isTyping ? "Typing..." : lastMessage}
          </p>
        </div>
        <div>
          <h3 className="dark:text-gray-400">{time}</h3>
          {unreadMessage && (
            <span className="float-right rounded-full bg-green-500 py-1 px-2 text-xs text-gray-800 dark:text-gray-300">
              {unreadMessage}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default User;
