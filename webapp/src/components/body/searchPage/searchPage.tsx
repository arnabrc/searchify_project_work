import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { ISearchifyDetail } from '../../../interfaces/ISearchifyDetail';
import { getUserSearch } from '../../../utils/searchResults';
import { Typeahead } from 'react-bootstrap-typeahead';

import './searchPage.scss';

interface SearchPageProps {
    items?: ISearchifyDetail[];
    getSearchifyDetail?: Function;
};

const SearchPage = (props: SearchPageProps) => {

    const {items, getSearchifyDetail} = props;

    const [localItems, setLocalItems] = useState([]);
    const [searchStr, setSearchStr] = useState('');
    
    const navigate = useNavigate();

    useEffect(() => {
        const searchData = async () => {
            let res: any = await getUserSearch(searchStr, items)
            console.log("Result ", res);
            setLocalItems(res)
            console.log(`items: `, items);
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
        // navigate(`/result/${item.name}`)
        getSearchifyDetail?.(item.title);
    }

    const formatResult = (item: any) => {
        console.log(`formatResult `, item)
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>Title: {item.title}</span>
            </>
        )
    }

    return (
        <div className='center search-page'>
            <div className='search-width'>
                <ReactSearchAutocomplete
                    items={localItems}
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