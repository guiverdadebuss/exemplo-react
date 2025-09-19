import UserGreeting from "./components/UserGreeting";
import Soma from "./components/Soma"

const user = {
  firstName: "Guilherme",
  lastName: "Buss",
};

const perfil = {
  idade: "33",
  especie: "bigDog",
  apelido: "papi"
};


function App() {
  return (
    <div className="App">
      <UserGreeting user = {user} perfil = {perfil} />
      <Soma a = {1} b = {2} />

    </div>
  );
}

export default App;
