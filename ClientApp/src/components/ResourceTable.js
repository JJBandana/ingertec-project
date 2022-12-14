import Table from 'react-bootstrap/Table'
import CountBy from './CountBy'

const ResourceTable = ({ data }) => {
    return (
        <div>
            <CountBy data={data} />
            <Table striped reponsive="true" variant="dark" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripcion</th>
                        <th>Fecha de Creacion</th>
                        <th>ID de recurso</th>
                    </tr>
                </thead>
                <tbody>
                    { ( !data ) ?
                        (<tr>
                            <td colSpan="4"> Sin registros</td>
                        </tr>) :
                        (data.map(item => {
                            return (
                                <tr key={item.idResource}>
                                    <td>{item.idResource}</td>
                                    <td>{item.descrip}</td>
                                    <td>{item.created.substring(0, 10)}</td>
                                    <td>{item.idResourceType}</td>
                                </tr>)
                        })
                        )
                    }
                
                </tbody>
            </Table>
        </div>
        )
}

export default ResourceTable