import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const UserImg = ({ src, alt, active }) => {
  alt = "User Image";
  return (
    <div className="relative flex w-[15%] items-center justify-center">
      <img src={src} alt={alt} className="rounded-full object-cover" />
      {active && (
        <RiCheckboxBlankCircleFill className="absolute right-0 bottom-1 rounded-full text-sm text-green-500 ring-2 dark:ring-white" />
      )}
    </div>
  );
};

export default UserImg;
