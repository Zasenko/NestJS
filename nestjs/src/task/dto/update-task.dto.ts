import { IsBoolean, IsNotEmpty, IsString, Length } from "class-validator";

export class UpdateTaskDTO {
    @IsNotEmpty({ message: 'Название задачи не должно быть пустой' })
    @IsString({ message: 'Название задачи должно быть строкой' })
    @Length(5, 10, { message: 'Название задачи должно быть строкой от 5 до 10 символов' })
    title: string;

    @IsBoolean({message: 'Статус должен быть будеан'})
    isComplited: boolean;
}