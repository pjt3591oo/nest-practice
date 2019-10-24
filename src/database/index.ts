import {createConnections, Connection, getConnection} from 'typeorm'

const connection = createConnections()

const c = getConnection('test')

c.connect();

export {
    c
}