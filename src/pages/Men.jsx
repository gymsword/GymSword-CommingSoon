import {products} from "../data/data";
import React from "react";
import ProductCard from "../components/ProductCard";

export default function Men(){
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {products.filter(p=>p.category==="men").map(p=><ProductCard key={p.id} product={p}/>)}
    </div>
  )
}
