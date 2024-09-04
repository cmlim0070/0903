import { useState } from "react";
import "../../styles/Search.css";

export default function Search({ filterList }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        filterList(searchTerm);
    };

    return (
        <div className="search">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleChange}
                placeholder="검색어를 입력하세요"
            />
            <button type="submit" className="search_init_btn">
                전체리스트 보기
            </button>
        </div>
    );
}
