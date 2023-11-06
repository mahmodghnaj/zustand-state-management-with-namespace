import { selectors } from "@/store";
import { FormEvent, useState } from "react";

const Market = () => {
  const name = selectors.user.name();
  const email = selectors.user.email();
  const products = selectors.market.products();
  const addProduct = selectors.market.addProducts();

  const [newName, setNewName] = useState<string>("");
  const [newPrice, setNewPrice] = useState<number>(0);

  const add = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /// Add To Store
    addProduct({
      name: newName,
      price: newPrice,
    });
    /// Rest State
    setNewName("");
    setNewPrice(0);
  };

  return (
    <>
      <div className="flex items-center p-2 flex-col">
        <div className="text-3xl font-bold mb-4">Market</div>
        <div>
          <form onSubmit={add} className="flex items-center gap-x-2 mb-2">
            <label className="font-bold">New Product : </label>
            <input
              className="bg-gray-200 h-8 px-2 placeholder-stone-500"
              type="text"
              placeholder="name"
              required
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
            />
            <input
              className="bg-gray-200 h-8 px-2 placeholder-stone-500"
              type="number"
              placeholder="Price"
              required
              onChange={(e) => {
                setNewPrice(parseFloat(e.target.value));
              }}
              value={newPrice}
            />

            <button type="submit" className="bg-blue-400 px-4">
              Add
            </button>
          </form>
        </div>
        <div className="text-lg">
          <div> User Name:{name || "--"} </div>
          <div> User Email:{email || "--"} </div>
          <div> products:</div>
          {products.map((item, index) => (
            <div key={index}>
              <div>
                {index + 1}: {item.name} - Price {item.price} $
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Market;
