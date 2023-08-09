"use client"

import { MouseEventHandler } from "react"
import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./icon-button"
import { Expand, ShoppingCart } from "lucide-react"
import Currency from "./currency"
import { useRouter } from "next/navigation"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({
    product
}) => {

    const previewModal = usePreviewModal()
    const cart = useCart()
    const router = useRouter()

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        previewModal.onOpen(product)
    }

    const onClick = () => {
        router.push(`/products/${product?.id}`)
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        cart.addItem(product)
    }

    return (
        <div onClick={onClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4" >
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image className="rounded-md object-cover aspect-square" alt="ProductImage" src={product?.images[0]?.url} fill />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center" >
                        <IconButton
                        onClick={onPreview}
                        icon={<Expand  size={20} className="text-gray-600" />}
                        />
                        <IconButton
                        onClick={onAddToCart}
                        icon={<ShoppingCart  size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            {/* description   */}
            <div>
                <p className="font-semibold text-lg" >{product?.name}</p>
                <p className="font-semibold text-sm text-gray-500" >{product?.category?.name}</p>
            </div>
            {/* Price */}
            <div className="flex items-center justify=between">
                <Currency value={product?.price} />
            </div>
        </div>
    )
}

export default ProductCard