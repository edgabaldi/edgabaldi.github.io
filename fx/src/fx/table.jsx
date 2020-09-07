import React from 'react'

export default props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map(quote => {

            const pcp_class = `font-weight-bold text-center pid-${quote.pid}-pcp`
            
            return (
                <tr key={quote.pid}>
                    <td className="text-left"><abbr title="{quote.origem}">{quote.sigla}</abbr></td>
                    <td className={pcp_class}>0,00%</td>
                    <td className={'pid-' + quote.pid + '-last'}>0,00</td>
                    <td className={'pid-' + quote.pid + '-time'}><i className="fa fa-circle"></i> <i className="fa fa-clock-o"></i></td>
                </tr>
            )
        })
    }

    return (
        <table className="table table-dark table-hover table-sm">
            <thead>
                <tr>
                <th scope="col">Moeda</th>
                <th scope="col">Último</th>
                <th scope="col">%</th>
                <th scope="col">Atualizado em</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}