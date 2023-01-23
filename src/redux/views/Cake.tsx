import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { order, restock } from "../../redux/slices/cakeSlice";

export default function Cake() {
  const numOfCakes = useAppSelector((state) => state.cake.cakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(order())}>Order Cake</button>
      <button onClick={() => dispatch(restock(5))}>Restock Cakes</button>
    </div>
  );
}
