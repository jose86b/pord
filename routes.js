
const express = require('express')
const routes = express.Router()

var titulo = [];
var contenido = [];


routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM agrointerra.prod', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query("INSERT INTO `agro`.`prods` (`titulo`, `contenido`) VALUES (''')", [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('producto added!')
        })
    })
})
//INSERT INTO `agrointerra`.`prod` (`titulo`, `contenido`) VALUES ('a', 'a');


routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM prod WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('pros excluded!')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE prod set WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('pros updated!')
        })
    })
})

module.exports = routes