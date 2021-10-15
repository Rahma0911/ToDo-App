import React from 'react';
import { Button } from 'react-bootstrap';

const Filter = ({setFilter}) => {
    return (
        <div>
            <Button variant="outline-secondary" onClick={() => setFilter(1)}>Show All</Button>
            <Button variant="outline-secondary" onClick={() => setFilter(2)}>Show Done</Button>
            <Button variant="outline-secondary" onClick={() => setFilter(3)}>Show Undone</Button>
            <br/><br/>
        </div>
    )
}

export default Filter;
