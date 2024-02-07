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
            let res: any = await getUserSearch(searchStr, items);
            setLocalItems(res);
        }
        setTimeout(() => {
            searchData()
        }, 2000);
    }, [searchStr])

    const handleOnSearch = (string: any, results: any) => {
        setSearchStr(string)
    }


    const handleOnSelect = (item: any) => {
        // the item selected
        // navigate(`/result/${item.name}`)
        getSearchifyDetail?.(item.name);
    }

    const formatResult = (item: any) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
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