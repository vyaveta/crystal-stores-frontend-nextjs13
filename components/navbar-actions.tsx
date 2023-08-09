"use client"

import { ShoppingBag } from "lucide-react"
import Button from "./ui/button"
import { useEffect, useState } from "react"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"

const NavbarActions = () => {

    const [isMounted,setIsMounted] = useState(false)

    const cart = useCart()
    const router = useRouter()

    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted) return null

    return (
        <div className="ml-auto flex items-center gap-x-4" >
            <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-2 py-1 md:px-4 md:py-2" >
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-md md:text-xl font-medium text-white">{cart.items.length}</span>
            </Button>
        </div>
    )
}

export default NavbarActions 