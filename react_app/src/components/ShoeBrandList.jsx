
import { List } from "./List"

export function ShoeBrandsPrice() {

    const shoeBrandsList = [{ id: 1, name: "Nike",price: 500},
                        {id: 2, name: "Adidas",      price: 900},
                        {id: 3, name: "Puma",        price: 80},
                        {id: 4, name: "Reebok",      price: 70},
                        {id: 5, name: "New Balance", price: 600},
                        {id: 6, name: "Asics",       price: 50},
    ] 

         const Shirts = [{id: 7, name: "Coziest",      price: 500},
                        {id: 8, name: "Ghetto Dreams", price: 900},
                        {id: 9, name: "G Hood",        price: 80},
                        {id: 10, name: "DBTK",         price: 70},
                        {id: 11, name: "Undrafted",    price: 600},
                        {id: 12, name: "AirBinay",     price: 50},
    ] 


return(
        <>
         <List item={shoeBrandsList} category = "Shoe Brands" />
         <List item={Shirts} category = "Local Brands" />
        </>
    )

}