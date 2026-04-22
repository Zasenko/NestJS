import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl, IsUUID, Length, Matches, MinLength } from "class-validator";
import { Url } from "url";
import { StartWith } from "../decorator/start-with.decorator";

export enum TaskTag {
    WORK = 'work',
    STUDY = 'study',
    HOME = 'home',
} 

export class CreateTaskDTO {
    @IsNotEmpty()
    @IsString()
    // @MinLength(5)
    @Length(5, 10)
    // @IsString({ message: 'Название задачи должно быть строкой' })
    // @Length(5, 10, { message: 'Название задачи должно быть строкой от 5 до 10 символов' })
    @StartWith('Task:', { message: 'Невалидно имя задания' })
    // @StartWith('Task:')
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    // @IsNumber({}, { message: 'приоритет должен быть числом' })
    @IsInt({ message: 'приоритет должен быть целым числом' })

    @IsOptional()
    @IsPositive({ message: 'приоритет должен быть положительным числом' })
    priority: number;

    @IsOptional()
    @IsArray({ message: 'теги должны быть массивом'})
    // @IsString({ message: 'каждый тег должны быть строкой', each: true })
    // tags: [string];
    @IsEnum(TaskTag, { message: 'недопустимый тип тега', each: true } )
    // @IsString({ message: 'каждый тег должны быть строкой', each: true })
    tags: TaskTag[];

    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d).*$/, { message: 'пароль минимум 1 символ и 1 цифра' })
    @MinLength(6, { message: 'пароль минимум 6 символов' })
    password: string;


    //'http','https','ftp']
    // require_protocol ['http','https','ftp'] wws - sockets
    // require_host require_port require_tld require_valid_protocol : BOOL
    // host_whitelist: ['google.com']
    // host_blacklist: ['youtube.com']
    @IsUrl({ protocols: ['https']}, { message: 'некоректный формат ссылки' })
    webSiteURL: string;

    @IsUUID('4', {message: 'некоректный формат UUID'})
    userID: string;
}