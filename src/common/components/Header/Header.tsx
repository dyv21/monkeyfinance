import {Login, Logo, Menu} from "@/common/components";

export const Header = () => {
  return (
    <header className="flex items-center justify-around pt-2">

      <Logo/>
      <Menu/>
      <Login/>
    </header>
  )
}