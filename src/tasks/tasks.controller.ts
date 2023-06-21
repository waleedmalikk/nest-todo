import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery } from '@nestjs/swagger/dist';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiQuery({ name: 'title', required: false })
  getAllTasks(@Query('title') title?: string): Task[] {
    return this.tasksService.findAllTasks(title);
  }

  @Get(':title')
  @ApiParam({ name: 'title', required: false })
  getTaskByTitle(
    @Param('title')
    title: string,
  ): Task[] {
    return this.tasksService.findTaskByTitle(title);
  }

  @Post()
  createTask(@Body() body: CreateTaskDTO): Task {
    return this.tasksService.addTask(body);
  }
}
