import express from 'express'
// import controllers for events and locations
import EventsController from '../controllers/events'

const router = express.Router()

// define routes to get events and locations

router.get('/', EventsController.getEvents)


export default router