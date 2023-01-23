import Cake from "../redux/views/Cake";
import Icecream from "../redux/views/Icecream";
import { User } from "../redux/views/User";

export default function Redux() {
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <Cake />
      <Icecream />
      <User />
    </div>
  );
}
