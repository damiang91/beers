import React from 'react';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import 'react-table/react-table.css';
// import './Beers.css';

class Beers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            beers: [],
        }
    }
    componentWillMount() {
        fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
        .then(response => response.json() )
        .then(data => this.setState({beers: data}));
        
}
    onClick(e) {
        if(e.target.classList.toggle('red'));
    }

    render() {
        const columns = [{
            Header: 'Image',
            accessor:'image_url',
            Cell: row => <img src={row.value} style={{height: '100px'}} alt={row.value} onClick={this.onClick}></img>
        },{
            Header: 'Name',
            id: 'name',
            filterable: true,
            filterAll: true,
            filterMethod: (filter,rows) => matchSorter(rows,filter.value, {keys: ['name']}),
            accessor: d => d.name,
        },{
            Header: 'Tagline',
            accessor: 'tagline'
        }]
        

        return (
            <div className="beers">
                <ReactTable data={this.state.beers} columns={columns} defaultPageSize={10} />
            </div>

        )
    }

}
export default Beers;
