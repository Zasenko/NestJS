import { IsNotEmpty, IsString} from "class-validator";

export class ActorDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}