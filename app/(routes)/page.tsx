import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"
import { Billboard as BillboardType, Product } from "@/types";

export const revalidate = 0;

const HomePage = async () => {

    const billboard: BillboardType = await getBillboard("e0854ccd-3352-4120-9c51-56f5dc1415c2")
    const products: Product[] = await getProducts({ isFeatured: true })

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8" >
                <ProductList title="Featured Products" items={products} />
            </div>
            </div>
        </Container>
    )
}

export default HomePage