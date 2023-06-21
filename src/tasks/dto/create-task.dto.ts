/* eslint-disable prettier/prettier */
import { MaxLength } from "class-validator"
export class CreateTaskDTO {
  @MaxLength(10)
  title: string
  description: string
  reminder: boolean
}
