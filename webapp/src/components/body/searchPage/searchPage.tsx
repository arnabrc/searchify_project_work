import React, { useEffect } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

import './searchPage.scss';

interface SearchPageProps {
    titles?: any;
};

const SearchPage = (props: SearchPageProps) => {

    const {titles} = props;
    console.log(`titles: `, titles)


    // const handleOnSearch = (string, results) => {
    //     console.log(string, results)

    //     setSearchStr(str => string)
    // }


    // const handleOnSelect = (item) => {
    //     // the item selected
    //     navigate(`/result/${item.name}`)
    // }

    // const formatResult = (item) => {
    //     return (
    //         <>
    //             <span style={{ display: 'block', textAlign: 'left' }}>Name: {item.name}</span>
    //         </>
    //     )
    // }


    return (
        <div className='center searchPage'>
            <div className='search-width'>
                <ReactSearchAutocomplete
                    items={titles}
                    // onSearch={handleOnSearch}
                    // onSelect={handleOnSelect}
                    autoFocus
                    // formatResult={formatResult}
                    styling={{
                        borderRadius:"0px",
                        backgroundColor:"#0d6efd",
                        color:"#fff",
                        iconColor:"#fff"
                    }}
                />
            </div>
        </div>
    )
};

export default SearchPage;