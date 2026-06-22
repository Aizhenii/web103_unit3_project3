import express from 'express'
// import controllers for events and locations
import LocationsController from '../controllers/locations'

const router = express.Router()

// define routes to get events and locations
router.get('/', LocationsController.getLocations)


export default router