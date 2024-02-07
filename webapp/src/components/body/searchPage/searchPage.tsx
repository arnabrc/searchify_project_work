import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { getUserSearch } from '../../../utils/searchResults';

import './searchPage.scss';

interface SearchPageProps {
    titles?: any[];
};

const SearchPage = (props: SearchPageProps) => {

    const {titles} = props;

    const [items, setItems] = useState([]);
    const [searchStr, setSearchStr] = useState('');
    
    const navigate = useNavigate();

    useEffect(() => {
        const searchData = async () => {
            let res: any = await getUserSearch(searchStr, titles)
            console.log("Result ", res);
            setItems(res)
        }
        setTimeout(() => {
            searchData()
        }, 2000);
    }, [searchStr])

    const handleOnSearch = (string: any, results: any) => {
        console.log(string, results)

        setSearchStr(string)
    }


    const handleOnSelect = (item: any) => {
        // the item selected
        navigate(`/result/${item.name}`)
    }

    const formatResult = (item: any) => {
        console.log(`formatResult `, item)
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.title}</span>
            </>
        )
    }

    return (
        <div className='center searchPage'>
            <div className='search-width'>
                <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                    autoFocus
                    formatResult={formatResult}
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