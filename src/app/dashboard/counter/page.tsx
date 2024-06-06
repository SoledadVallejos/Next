import { CartCounter } from "@/app/shopping-cart";

export const metadata = { // cambio el nombre del title  
 title: 'Shopping Cart',
 description: 'Un simple contador',
};


export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={ 20 } />
      
    </div>
  );
}

// atajo prc --> functional component