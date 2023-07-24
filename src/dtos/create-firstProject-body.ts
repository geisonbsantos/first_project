import { IsNotEmpty, Length } from 'class-validator';

export class CreateFirstProjectBody {
    @IsNotEmpty({
        message: 'O campo name não pode ser null',
    })
    @Length(4, 20, {
        message: 'o nome deve ser maior ou igual a 4 caracteres',
    })
    name: string;

    @IsNotEmpty({
        message: 'O campo function não pode ser null',
    })
    function: string;
}