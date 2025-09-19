export default function CheckList(props) {
    return (
        <>
            {props.items.map((item) => (
                    <li className={item.done && "checklist"} key={item}>
                        <label>
                            {item.text}
                        </label>
                    </li>
                ))
            }
        </>
    );
}