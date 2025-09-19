export default function Soma(props) {
    return (

            <div style = {{background: "rgba(10, 10, 10, 0.33)", color: "rgba(7, 7, 7, 0.53)"}}>
                    <h1>Soma: {props.a + props.b}</h1>
            </div>
    );
}