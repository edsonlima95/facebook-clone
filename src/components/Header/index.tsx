import { BellSimpleRinging, DiceFive, DiceFour, GameController, HouseLine, HouseSimple, MessengerLogo, MonitorPlay, Storefront, UserCircle, UserCirclePlus, UsersThree } from "phosphor-react"




function Header() {

    return (
        <header className="bg-zinc-900 flex h-16 px-3 fixed z-10 w-full">
            <div className="w-3/12 flex items-center">
                <img src="/images/facebook.svg" alt="" width={50} height={40} />
                <form action="" className="w-full ml-2 mr-6">
                    <input type="text" className="bg-zinc-800 px-4 h-11 rounded-2xl w-full" placeholder="Pesquisar no facebook" />
                </form>
            </div>
            <ul className="w-6/12 flex items-center justify-around">
                <li className="hover:bg-zinc-800 px-8 py-2 rounded-lg"><HouseLine size={28} className="text-gray-500" /></li>
                <li className="hover:bg-zinc-800 px-8 py-2 rounded-lg"><MonitorPlay size={28} className="text-gray-500" /></li>
                <li className="hover:bg-zinc-800 px-8 py-2 rounded-lg"><Storefront size={28} className="text-gray-500" /></li>
                <li className="hover:bg-zinc-800 px-8 py-2 rounded-lg"><UsersThree size={28} className="text-gray-500" /></li>
                <li className="hover:bg-zinc-800 px-8 py-2 rounded-lg"><GameController size={28} className="text-gray-500" /></li>
            </ul>
            <ul className="w-3/12 gap-2 flex items-center justify-end">
                <li className="bg-zinc-700 rounded-full p-2 hover:bg-zinc-800"><DiceFive className="text-gray-300" size={26} weight="fill" /></li>
                <li className="bg-zinc-700 rounded-full p-2 hover:bg-zinc-800"><MessengerLogo className="text-gray-300" weight="fill" size={26} /></li>
                <li className="bg-zinc-700 rounded-full p-2 hover:bg-zinc-800"><BellSimpleRinging className="text-gray-300" weight="fill" size={26} /></li>
                <li className="w-12 h-12"><img className="rounded-full" src="/images/perfil.jpg" alt="Rounded avatar" /></li>
            </ul>

        </header>
    )

}

export default Header