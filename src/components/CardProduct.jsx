/**
 * Componente cardProduc.
 *
 * Este componente es una tarjeta que muestra un producto con su imagen, nombre y precio.
 *
 *
 * @component
 * @example
 * return (
 *  <CardProduct />
 * )
 */
import { IconHeart } from "@tabler/icons-react";
import Image from "next/image";

export default function CardProduct() {
  return (
    <div className="max-w-[300px]   rounded-lg shadow bg-slate-800 mt-5">
      <div className="relative rounded-lg ">
        <div className="absolute top-0 right-0 p-2 ">
          <IconHeart size={30} color="red" />
        </div>

        <Image
          className="rounded-t-lg object-contain w-full h-full z-10"
          src="https://picsum.photos/500/300/?image=10"
          alt=""
          width={500}
          height={300}
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          Producto 1
        </h5>

        <p className="mb-3 font-semibold text-white ">Rp. 100.000</p>
      </div>
    </div>
  );
}
