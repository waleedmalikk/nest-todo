import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.tasksService.findAllTasks();
  }

  @Post()
  createTask(@Body() body: CreateTaskDTO): Promise<Task> {
    return this.tasksService.addTask(body);
  }

  @Put(':uuid')
  async updateTask(
    @Param('uuid') uuid: string,
    @Body() body: CreateTaskDTO,
  ): Promise<Task> {
    return await this.tasksService.updateTask(uuid, body);
  }

  @Delete(':uuid')
  async deleteTask(@Param('uuid') uuid: string): Promise<Task> {
    return await this.tasksService.deleteTask(uuid);
  }
}
