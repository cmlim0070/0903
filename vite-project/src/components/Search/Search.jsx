import { useState } from "react";
import "../../styles/Search.css";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };

    return (
        <div className="search">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
            />
            <button type="submit" className="search_init_btn">
                전체리스트 보기
            </button>
        </div>
    );
}
