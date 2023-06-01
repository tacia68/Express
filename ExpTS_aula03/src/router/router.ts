
import { Router} from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.send('Página principal do site');
});

router.get('/sobre', (req, res) => {
    res.send('Página sobre');
 });

export default router;

/*
app.get("/", (req, res) => {
    res.end("Bem-vindo ao meu site!");
    
});
app.get("/sobre", (req, res) => {
    res.end("Bem-vindo à página sobre!");
 });

app.use((req, res) => {
    res.statusCode = 404;
    res.end("404!");
});



router.get('/hb1', (req, res) => {
    res.render('hb1', {
    mensagem: 'Olá, você está aprendendo Express + HBS!',
    layout: false,
    });
});


router.get('/hb2', (req, res) => {
    const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('hb2', { profes, layout: false });
 });

 app.get('/hb3', (req, res) => {
    res.render('hb3', {
    poweredByNodejs: true,
    name: 'Express',
    type: 'Framework',
    layout: false,
    });
 });

 */