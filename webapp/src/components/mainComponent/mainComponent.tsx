import React, { useEffect } from 'react';
import ResultPage from '../body/resultPage/resultPage';
import SearchPage from '../body/searchPage/searchPageContainer';
import Footer from '../footer/footer';
import Header from '../header/header';

interface MainComponentProps {
    loading: boolean;
    searchAllSearchifyDetails: Function;
};

const MainComponent = (props: MainComponentProps) => {
    const { loading, searchAllSearchifyDetails } = props;

    useEffect(() => {
        console.log(`useEffect`,)
        searchAllSearchifyDetails();
    }, []);

    return (
        <>
            <Header />
            <div id="page-content">
                {loading ? (
                    <p>{'Loading.....'}</p>
                ) : (
                    <SearchPage />
                )}
            </div>
            <ResultPage />
            <Footer />
        </>
    )
};

export default MainComponent;