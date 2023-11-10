const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
require('dotenv').config();
const User = require('./models/user');
const Conversation = require('./models/conversation');
const authRoutes = require('./routes/auth');
const conversationsRoutes = require('./routes/conversations');


const MONGODB_URI = process.env.MONGODB_URI;
const app = express();
const httpServer = require("http").createServer(app);
const io = require('socket.io')(httpServer, {
    cors: {
        origin: 'https://mitreadoru.github.io/live-chat/'
    }
});

io.on('connection', socket => {
    socket.on('conversations', (onScreen, data) => {
        io.emit('new-data', onScreen, data);
    })
    socket.on('leave-conversation', (conv) => {
        io.emit('leave', conv);
    })
    socket.on('change-image', conversations => {
        io.emit('image', conversations)
    })

})

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (

        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        console.log(file)
        cb(null, true);
    } else {
        console.log('huha', file)
        cb(null, false);

    }
};
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.get('/users', (req, res, next) => {
    User.find()
        .then(users => {
            if (!users) {
                const error = new Error('No user found');
                error.statusCode = 401;
                throw error;
            }
            const usersInfo = [];
            users.map(user => {
                usersInfo.push({ name: user.name, userId: user._id.toString(), image: user.image })
            });
            res.json({ users: usersInfo });
        })
})
app.post('/conversation', (req, res, next) => {
    const userId = req.body.id;
    Conversation.find({ "conversationUsers.id": { "$in": userId } }).sort({ updatedAt: -1 })
        .then(conversations => {
            if (!conversations) {
                const error = new Error('No conversation found');
                error.statusCode = 401;
                throw error;
            }
            return conversations;
        })
        .then(conversations => {
            res.json({ conversations: conversations });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
})

app.use(authRoutes);
app.use(conversationsRoutes);

app.use((error, req, res, next) => {
    console.log(error);
});
mongoose.connect(MONGODB_URI)
    .then(result => {
        httpServer.listen();
    }).catch(err => console.log(err))