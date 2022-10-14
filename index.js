const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res, next) => {
    return res.status(200).json({
        status: true,
        message: 'deploy ke vercel'
    });
});

app.listen(3000, () => console.log('listening on port', PORT));