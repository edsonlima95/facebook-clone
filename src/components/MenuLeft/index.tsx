
type MenuLeftProps = {
  children: React.ReactNode
}

function MenuLeft({children}: MenuLeftProps) {

    return (
        <div className="fixed top-16 px-3 py-6 w-3/12">
            <div className="flex flex-col text-gray-300">
                {children}
            </div>
        </div>
    )

}

export default MenuLeft