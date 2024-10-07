import { Button, Card, CardContent, TextField, Typography } from "@mui/material"

const CategoryRegister = () => {
  return (
    <Card>
      <CardContent>
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography variant="h4">Cadastro de Categorias</Typography>
          <TextField label="Nome" variant="outlined" />
          <Button variant="contained" sx={{width:"10%"}}>Cadastrar</Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default CategoryRegister