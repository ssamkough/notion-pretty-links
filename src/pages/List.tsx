import React from 'react';

import PathList from '../components/List/PathList';

const List = () => {
    const mockData = [
        { replaced_path: 'replacedpath1', new_path: 'newpath1' },
        { replaced_path: 'replacedpath2', new_path: 'newpath2' },
        { replaced_path: 'replacedpath3', new_path: 'newpath3' },
        { replaced_path: 'replacedpath4', new_path: 'newpath4' },
        { replaced_path: 'replacedpath5', new_path: 'newpath5' },
        { replaced_path: 'replacedpath6', new_path: 'newpath6' },
    ];

    return (
        <div className="list-page">
            <PathList pathItems={mockData} />
        </div>
    );
};

export default List;
