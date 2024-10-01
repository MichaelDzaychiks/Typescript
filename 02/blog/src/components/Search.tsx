import {useState} from 'react';

const Search : React.FC<any> = ({onSearchChange,totalPost}) =>{
    const [search,setSearch] = useState<string>("");
    const [IsSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);

    const onSearchHandler = (event:any) => {
        console.log("Search component: " + event.target.value);
        setSearch(event.target.value);
        onSearchChange(event.target.value);
    };

    const onClickSearchBtnHandler = () =>{
        setIsSearchTriggered(true);
        onSearchChange(search);
    };

    const onKeyDownSearchHandler = (event:any) => {
        if(event.key === 'Enter'){
            onClickSearchBtnHandler();
        }
    }

    return(
        <>
            <div>
                cari artikel: <input 
                    onChange={event => {
                        setIsSearchTriggered(false);
                        setSearch(event.target.value);
                    }}
                    onKeyDown={onKeyDownSearchHandler}>
                </input>

                <button onClick={onClickSearchBtnHandler}>cari</button>
            </div>
            
            {IsSearchTriggered && (
                <small>ditemukan {totalPost} data dengan pencarian kata "{search}"</small>
            )}
        </>
    )
}

export default Search;