import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
} from '@mui/material';
import ListProductsProps from './interfaces/ListProductsProps';

// function createData(name: string, price: number, category: string) {
//   return { name, price, category };
// }

const rows = [
  {
    id: 1,
    name: 'Macbook Pro',
    price: 2500,
    category: 'Eletronics',
  },
  {
    id: 2,
    name: 'Macbook Air',
    price: 2000,
    category: 'Eletronics',
  },
  {
    id: 3,
    name: 'Iphone 15 Pro Max',
    price: 999,
    category: 'Eletronics',
  },
];

function ListProduct(props: ListProductsProps) {
  return (
    <Card>
      <CardContent>
        <div className='text-xl font-bold'>{props.text}</div>
      </CardContent>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='caption table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Product ID</TableCell>
              <TableCell align='center'>Product Name</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align='center'>{row.id}</TableCell>
                <TableCell align='center'>{row.name}</TableCell>
                <TableCell align='center'>$ {row.price.toFixed(2)}</TableCell>
                <TableCell align='center'>{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default ListProduct;
