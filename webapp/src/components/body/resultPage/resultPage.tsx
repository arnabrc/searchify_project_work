import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISearchifyDetail } from '../../../interfaces/ISearchifyDetail';
import { getUserSearchResult } from '../searchPage/searchPageActions';

import './resultPage.scss';

interface ResultPageProps {
    searchifyDetails?: ISearchifyDetail[];
};

const ResultPage = (props: ResultPageProps) => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        // const searchResultData = async () => {
        //     let res = await getUserSearchResult()
        //     let result = res.slice(0, 4);
        //     setResult(result)
        // }
        // searchResultData()
        getUserSearchResult().then((data: any) => {
            data = data?.slice(0, 4);
            setResults(data)
        }).catch((err) => { throw err });
    }, [])

    return (
        <div className='search-container result-page'>
            <div className='result-container'>
                <div className='row'>
                    {
                        results ? (results.map((data, index) => {
                            return (
                                <div key={index} className='col-md-6 col-lg-3' >
                                    <div className="card card-width" style={{ border: 'none', paddingTop: "15px", paddingBottom: "15px" }}>
                                        <img src={`https://static.vecteezy.com/system/resources/thumbnails/027/190/449/small/panoramic-view-of-stunning-mountain-scenery-generative-with-ai-free-png.png`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <div>
                                                    <h3>Title:</h3>{data.title}
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })) : (<h2>Loading...</h2>)
                    }


                </div>
            </div>
        </div>
    )
};

export default ResultPage;