import { useRef, useState } from "react";

const Search = () => {
    const searchInput = useRef('' );

    const [ strSearch, setStrSearch ] = useState( '' );

    const handleSearch = () => {
        console.log( strSearch );
    }

    const handleClear = () => {
        setStrSearch( '' );
    }

    const handleSearchChange = event => {
        setStrSearch( event.target.value );
    }

    return (
        <div className="col-12 mt-1">
            <div className="input-group">
                <input type="text" value = { strSearch } onChange = { (e) => handleSearchChange(e) } className="form-control form-control-sm" placeholder="Search for..." />
                <span className="input-group-btn">
                    <button onClick = { () => handleSearch() } className="btn btn-info btn-sm" style={{borderRadius: 0 + 'px'}} type="button">Go!</button>
                    <button  onClick = { () => handleClear() } className="btn btn-warning btn-sm" style={{borderRadius: 0 + 'px'}} type="button">Clear</button>
                </span>
            </div>
        </div>
    );
}
export default Search;
