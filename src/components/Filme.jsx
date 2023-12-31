import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, Link} from '@mui/material'
import React from 'react'

function Filme(props) {
  return (
        <Card sx={{
            maxWidth:345
        }}>
            <CardActionArea>
            <CardMedia 
            component="img"
            height="490"
            image={props.img}
            alt={props.titulo}
            />
            <CardContent>
                <Typography variant='h5' component='div'>
                    {props.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.descricao}
                </Typography>
                <Grid container>
                    <Grid item xs={4}>
                        {props.categoria}
                    </Grid>
                    <Grid item xs={4}>
                        {props.ano}
                    </Grid>
                    <Grid item >
                        {props.duracao}
                    </Grid>
                </Grid>
                <Button variant='text' color='error' onClick={props.excluir}>Excluir</Button>
                <Button variant='text'><Link href={"edita/" + props.id}>Editar</Link></Button>
            </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Filme
