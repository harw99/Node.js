import { Router } from "express";
const router = Router()

router.get('/',(req, res) => res.render('index',{ title:'Bienvenido a Nodejs - WebApp'}))
router.get('/somos',(req, res) => res.render('somos',{ title:'Quièn somos'}))
router.get('/servicios',(req, res) => res.render('servicios',{ title:'Servicios'}))
router.get('/portafolio',(req, res) => res.render('portafolio',{ title:'Portafolio'}))
router.get('/testimonio',(req, res) => res.render('testimonio',{ title:'Testimonio'}))
router.get('/contact',(req, res) => res.render('contact',{ title:'Contact me'}))

export default router