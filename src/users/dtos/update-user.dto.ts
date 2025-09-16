import { PartialType } from "@nestjs/mapped-types";
import { createUserDto } from "./create-users.dto";


export class UpdateUserDto extends PartialType(createUserDto){

}