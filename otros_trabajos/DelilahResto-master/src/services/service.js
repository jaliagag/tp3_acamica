import {sequelizeConnection} from '../database/database'

export class Service {

    static async getQuery(queryString, params = []) {
        const queryOptions = {
            type: sequelizeConnection.QueryTypes.SELECT
        }

        if(params.length) {
            queryOptions.replacements = params
        }

        return await sequelizeConnection.query(queryString, queryOptions)
    }

    static async setQuery(queryString, params = []) {
        const queryOptions = {}

        if(params.length) {
            queryOptions.replacements = params
        }

        return await sequelizeConnection.query(queryString, queryOptions)
    }
}