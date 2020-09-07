import React, { Component } from 'react'

import Table from './table'

export default class Fx extends Component {

    constructor(props){
        super(props)

        this.state = {
            quotes: [
                {sigla: 'SP500 Fut', pid: '8839'},
                {sigla: 'Dow Jones', pid: '8873'}
            ]
        }

        this.refresh()
    }

    refresh() {
        // 
    }

    render() {
        return (
            <div className='row'>
                <div className='col'>
                    <Table list={this.state.quotes}/>
                </div>
                <div className='col'>
                    <Table list={this.state.quotes} />
                </div>
            </div>
        )
    }
}