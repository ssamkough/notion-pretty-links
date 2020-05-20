import React, { useState, useEffect } from 'react';

import PathList from '../components/List/PathList';

const List = () => {
    const [pathData, setPathData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const mockData = [
        { replaced_path: 'replacedpath1', new_path: 'newpath1' },
        { replaced_path: 'replacedpath2', new_path: 'newpath2' },
        { replaced_path: 'replacedpath3', new_path: 'newpath3' },
        { replaced_path: 'replacedpath4', new_path: 'newpath4' },
        { replaced_path: 'replacedpath5', new_path: 'newpath5' },
        { replaced_path: 'replacedpath6', new_path: 'newpath6' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                await chrome.storage.sync.get(null, function (items: any) {
                    console.log(items);
                    setPathData(items);
                    console.log(pathData);
                });
            } catch (error) {
                setIsError(true);
                console.log('Error:\n', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="list-page">
            {isError ? (
                <div>Something went wrong...</div>
            ) : Object.keys(pathData).length === 0 ? (
                <div>Loading...</div>
            ) : (
                <PathList pathItems={pathData} />
            )}
        </div>
    );
};

export default List;
