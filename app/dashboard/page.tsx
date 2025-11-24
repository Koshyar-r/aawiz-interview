"use client"; // required for client-side hooks

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string; // added image field
};

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <Card key={p.id} className="p-4 flex flex-col items-center">
            <img
              src={p.image}
              alt={p.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="font-semibold mb-2 text-center">{p.title}</h3>
            <p className="text-sm text-center">{p.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}