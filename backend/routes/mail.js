import { Router } from 'express';
import { contactmail } from '../controllers/mail.js';

const routes = Router();

routes.post("/contactmail", contactmail);

export default routes;
