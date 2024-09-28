import {useState} from 'react';

const Search : React.FC<any> = ({onSearchChange}) =>{
    const [search,setSearch] = useState<string>("");

    const onSearchHandler = (event:any) => {
        console.log("Search component: " + event.target.value);
        setSearch(event.target.value);
        onSearchChange(event.target.value);
    }
    return(
        <>
            <div>
                cari artikel: <input onChange={onSearchHandler}></input>
            </div>
            
            <small>ditemukan {0} data dengan pencarian kata "{search}"</small>
        </>
    )
}

export default Search;