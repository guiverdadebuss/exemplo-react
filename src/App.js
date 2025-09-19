import UserGreeting from "./components/UserGreeting";
import Soma from "./components/Soma"
import CheckList from "./components/CheckList";

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
      <UserGreeting user={user} perfil={perfil} />
      <Soma a={1} b={2} />
      <ul>
        <CheckList items={[
          { text: 'Tarefa um', done: true },
          { text: 'Tarefa dois', done: false },
        ]}
        />
      </ul>
    </div>
  );
}

export default App;