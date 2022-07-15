import express from 'express';

import {create, get, deleteImage} from '../controllers/image.controller'

const router = express.Router()

router.post('/', create)

router.get('/', get)

router.delete('/:id', deleteImage)

export default router;