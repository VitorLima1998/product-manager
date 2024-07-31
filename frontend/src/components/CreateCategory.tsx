import { Button, Card, CardContent, TextField } from '@mui/material';
import CreateCategoryProps from './interfaces/CreateCategoryProps';

function CreateCategory(props: CreateCategoryProps) {
  return (
    <Card>
      <CardContent>
        <div className='text-xl pb-5'>{props.text}</div>

        <div className='flex flex-col gap-5'>
          <TextField id='outlined-basic' label='Name' variant='outlined' />
          <Button variant='contained'>Save</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CreateCategory;
