import { useLocalStorage2, useSessionStorage2 } from "../hooks/useStorage";

export default function Storage() {
  const [name, setName, removeName] = useSessionStorage2("name", "Dyne");
  const [age, setAge, removeAge] = useLocalStorage2("age", 30);

  return (
    <div>
      <div>name(session storage):{name}</div>
      <div>age(local):{age}</div>
      <button onClick={() => setName("Danny")}>Set Name</button>
      <button onClick={() => setAge(60)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
}
