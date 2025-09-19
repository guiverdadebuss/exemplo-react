export default function UserGreeting(props) {
    if (props.user.firstName) {
        return (
            <div style={{ background: "#b62e2eff", color: "#0a0909ff" }}>
                <h1>Nome: {props.user.firstName}</h1>
                <h1>Apelido: {props.user.lastName}</h1>

                <h1>Idade: {props.perfil.idade}</h1>
                <h1>Especie: {props.user.especie}</h1>
                <h1>Apelido: {props.user.apelido}</h1>
            </div>
        )
    } else {
        return (
            <div style={{ background: "#fff", color: "#ff00" }}>
                <h1>Olá bebe!</h1>
            </div>
        )
    }
}



