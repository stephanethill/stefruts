"use client";
import { useEffect, useState } from "react";
import { getSheetData } from "./StockParser";

interface FruitsStockProps {
  index: number;
  fruit: string;
  stock: string;
  price: string;
}

const FruitsStock = () => {
  const [stockInfo, setStockInfo] = useState([] as FruitsStockProps[]);

  useEffect(() => {
    setStockInfo([] as FruitsStockProps[]);
    for (let i = 2; i < 10; i++) {
      getStockInfo(i);
    }
  }, []);

  const getStockInfo = async (index: number) => {
    const response = await getSheetData(index);
    if (response.data) {
      const fruit: string = response.data[0][0];
      const stock: string = response.data[0][1];
      const price: string = response.data[0][2];
      if (!fruit || !stock || !price) return;

      setStockInfo((prev) => {
        if (prev.some((item) => item.index === index)) {
          return prev;
        }
        return [...prev, { index, fruit, stock, price }];
      });
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-1">
      {stockInfo &&
        stockInfo.map((fruitInfo: FruitsStockProps) => (
          <div
            key={fruitInfo.fruit + fruitInfo.index}
            className="w-full flex justify-start items-center bg-secondary-100 p-2 gap-1 rounded-xl"
          >
            <p>{fruitInfo.stock}</p>
            <p>{fruitInfo.fruit}</p>
            <div className="flex-grow" />
            <p>{fruitInfo.price} / unité</p>
          </div>
        ))}
    </div>
  );
};

export default FruitsStock;
