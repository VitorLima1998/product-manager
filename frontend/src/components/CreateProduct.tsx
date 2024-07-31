import { Button, Card, CardContent, TextField } from '@mui/material';
import CreateProdudctProps from './interfaces/CreateProductProps';
import '../index.css';

function CreateProduct(props: CreateProdudctProps) {
  return (
    <Card>
      <CardContent>
        <div className='text-xl pb-5'>{props.text}</div>

        <div className='flex flex-col gap-5'>
          <TextField id='outlined-basic' label='Name' variant='outlined' />
          <TextField id='outlined-basic' label='Price' variant='outlined' />
          <TextField id='outlined-basic' label='Category' variant='outlined' />
          <Button variant='contained'>Save</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CreateProduct;
