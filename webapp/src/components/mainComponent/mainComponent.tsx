import React, { useEffect } from 'react';
import { ISearchifyDetail } from '../../interfaces/ISearchifyDetail';
import ResultPage from '../body/resultPage/resultPageContainer';
import SearchPage from '../body/searchPage/searchPageContainer';
import Footer from '../footer/footer';
import Header from '../header/header';

interface MainComponentProps {
    loading: boolean;
    searchAllSearchifyDetails: Function;
    userSearch: ISearchifyDetail;
};

const MainComponent = (props: MainComponentProps) => {
    const { loading, searchAllSearchifyDetails, userSearch } = props;

    useEffect(() => {
        searchAllSearchifyDetails();
    }, []);

    return (
        <>
            <Header />
            <div id="page-content">
                {loading ? (
                    <div className='center loading-class'>{'Loading.....'}</div>
                ) : (!loading && !userSearch) ? (
                    <SearchPage />
                ) : (!loading && userSearch) ? (
                    <ResultPage />
                ) : (
                    <>ERROR!!! NOT FOUND</>
                )}
            </div>
            <Footer />
        </>
    )
};

export default MainComponent;