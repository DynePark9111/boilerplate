import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { order, restock } from "../../redux/slices/icecreamSlice";

export default function Icecream() {
  const inputRef = useRef<HTMLInputElement>(null);
  const numOfIcecreams = useAppSelector((state) => state.icecream.icecream);
  const dispatch = useAppDispatch();
  console.log(inputRef.current?.value);

  function returnInput() {
    if (inputRef.current?.value === "") {
      return 1;
    }
    if (typeof inputRef.current?.value === "string") {
      return parseInt(inputRef.current.value);
    }
    return 1;
  }

  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(order())}>Order Ice cream</button>
      <input
        type="number"
        ref={inputRef}
        defaultValue={1}
        min={1}
        placeholder={"1"}
      />
      <button onClick={() => dispatch(restock(returnInput()))}>
        Restock Ice creams
      </button>
    </div>
  );
}
