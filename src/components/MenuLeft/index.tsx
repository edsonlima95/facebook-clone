
type MenuLeftProps = {
  children: React.ReactNode
}

function MenuLeft({children}: MenuLeftProps) {

    return (
        <div className="fixed top-16 px-3 py-6 w-3/12">
            <div className="grid grid-cols-2 gap-2 text-gray-300">
                {children}
            </div>
        </div>
    )

}

export default MenuLeft