import "../../styles/List.css";

export default function List() {
    const testData = [
        {
            name: "임채민",
            phone: "010-1234-1234",
            group: "가족",
            desc: "1",
        },
        {
            name: "박진희",
            phone: "010-1234-1234",
            group: "가족",
            desc: "2",
        },
        {
            name: "임재현",
            phone: "010-1234-1234",
            group: "가족",
            desc: "3",
        },
        {
            name: "임세영",
            phone: "010-1234-1234",
            group: "가족",
            desc: "4",
        },
    ];

    return (
        <ul className="listCon">
            {testData.map((item) => (
                <li className="listItem">
                    {item.name} {item.phone} {item.group}
                    <div className="listBtn">
                        <button type="button" className="show_detail_btn">
                            세부사항
                        </button>
                        <button type="button" className="item_delete_btn">
                            삭제
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
