import {pool} from '../config/database'

const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events')
        res.statuc(200).json(results.rows)
    }   catch (error) {
        res.status(409).json( {error: error.message})
    }
}

export default {
    getEvents
}