import { selectors } from "@/store";
import { FormEvent, useState } from "react";

const User = () => {
  const name = selectors.user.name();
  const email = selectors.user.email();
  const products = selectors.market.products();

  const setName = selectors.user.setName();
  const setEmail = selectors.user.setEmail();

  const [newName, setNewName] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");

  const add = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /// Add To Store
    setName(newName);
    setEmail(newEmail);
    /// Rest State
    setNewName("");
    setNewEmail("");
  };
  return (
    <>
      <div className="border-t-8 border-gray-600 flex items-center p-2 flex-col">
        <div className="text-3xl font-bold mb-4">User</div>
        <div>
          <form onSubmit={add} className="flex items-center gap-x-2 mb-2">
            <label className="font-bold">New User : </label>
            <input
              className="bg-gray-200 h-8 placeholder-stone-500"
              type="text"
              placeholder="name"
              required
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
            />
            <input
              className="bg-gray-200 h-8 placeholder-stone-500"
              type="text"
              placeholder="email"
              required
              onChange={(e) => {
                setNewEmail(e.target.value);
              }}
              value={newEmail}
            />
            <button type="submit" className="bg-blue-400 px-4">
              Add
            </button>
          </form>
        </div>
        <div className="text-lg">
          <div> User Name:{name || "--"} </div>
          <div> User Email:{email || "--"} </div>
          products:
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

export default User;
