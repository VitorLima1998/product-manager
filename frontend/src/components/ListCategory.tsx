import {
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import ListCategoriesProps from './interfaces/ListCategoriesProps';

function ListCategory(props: ListCategoriesProps) {
  const rows = [
    {
      id: 1,
      name: 'Eletronics',
    },
    {
      id: 2,
      name: 'Clothes',
    },
    {
      id: 3,
      name: 'Informatics',
    },
  ];

  return (
    <Card>
      <CardContent>
        <div className='text-xl font-bold'>{props.text}</div>
      </CardContent>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='caption table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Category ID</TableCell>
              <TableCell align='center'>Category Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align='center'>{row.id}</TableCell>
                <TableCell align='center'>{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default ListCategory;
