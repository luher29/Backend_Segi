import express from 'express';
import morgan from 'morgan';
// import ejs from 'ejs';  <-- ELIMINA ESTA LÍNEA (causará error porque no está instalado)
import usersRoutes from './routes/users.routes.js';
// import users from './models/users.js'; <-- OJO: Generalmente no importas el modelo en app.js, solo en el controlador, a menos que lo uses aquí.


const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

// Las siguientes líneas ya no son necesarias si no vas a renderizar HTML
// app.set('view engine', 'ejs'); 
// app.set('views', './src/views');

//Middlewares
app.use(express.json()); // Vital para recibir JSON en las pruebas
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/users", usersRoutes);

export default app;