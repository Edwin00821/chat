import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="bg-[#282c34] w-full p-8 ">
      <Header />
      {children}
    </div>
  );
}
