import "../../styles/List.css";

export default function EmptyList() {
    return (
        <ul className="listCon">
            <li className="listItem">
                <div className="emptylist">리스트가 비어있습니다.</div>
            </li>
        </ul>
    );
}
