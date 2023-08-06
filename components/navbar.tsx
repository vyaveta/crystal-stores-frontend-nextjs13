import Link from "next/link"
import Container from "./ui/container"
import MainNav from "./main-nav"
import getCategories from "@/actions/get-categories"
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

interface NavbarProps {
    max_w_600_px: boolean
}

const Navbar: React.FC<NavbarProps> = async ({
    max_w_600_px
}) => {

    const categories = await getCategories()

    return (
        <nav className="border-b">
            <Container>
                <div className="relative px-2 sm:px-4 lg:px-8 flex h-16 items-center" >
                    <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-lg md:text-xl">CrystalInizio</p>
                    </Link>
                    {!max_w_600_px && <MainNav data={categories} />}
                     <NavbarActions />
                </div>
                <div className="relative lg:px-8 flex flex-row w-full justify-around h-16 border-t border-black items-center">
                    {max_w_600_px && <MainNav data={categories} />}
                </div>
            </Container>
        </nav>
    )
}

export default Navbar