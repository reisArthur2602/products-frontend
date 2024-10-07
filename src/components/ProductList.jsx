import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const ProductList = () => {
  const rows = [
    { id:1,name: "Teclado membrana", price: 100, category: "Informática" },
    { id:2,name: "Mouse", price: 40, category: "Informática" },
    { id:3,name: "Headset", price: 120, category: "Informática" },
  ];

  return (
    <Box component="div" display="flex" flexDirection="column" gap="1rem">
      <Typography variant="h4">Listagem de Produtos</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>

                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductList;
