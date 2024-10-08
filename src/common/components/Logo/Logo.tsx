import logo from "@/common/assets/logo.svg";

export const Logo = () => (
  <div>
    <a href="/" className="flex items-center">
      <img src={logo} alt="" className="mr-1 w-[40px] h-[40px]"/>
      <span className="text-black font-bold">MonkeyMoney</span>
    </a>
  </div>
);


