import Link from "next/link"

const NavMenu = () => {
    return (
        <nav className="flex justify-center w-full">
        <ul className="flex justify-between w-64">
            <li>
            <Link href="/">About T-CAD</Link>
            </li>
            <li>
            <Link href="/about">GitHub</Link>
            </li>
            <li>
            <Link href="/contact">Docs</Link>
            </li>
        </ul>
        </nav>
    )
}

export default NavMenu