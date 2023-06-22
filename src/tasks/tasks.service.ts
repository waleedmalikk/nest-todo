import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './entities/task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  findAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  addTask(body: CreateTaskDTO): Promise<Task> {
    const newTask = this.taskRepository.create({ uuid: uuidv4(), ...body });
    return this.taskRepository.save(newTask);
  }

  async updateTask(uuid: string, body: CreateTaskDTO): Promise<any> {
    const findOptions: FindOneOptions<Task> = { where: { uuid } };
    const task = await this.taskRepository.findOne(findOptions);

    if (!task) {
      throw new NotFoundException();
    }
    task.title = body.title;
    task.description = body.description;
    task.reminder = body.reminder;
    return await this.taskRepository.save(task);
  }

  async deleteTask(uuid: string) {
    const findOptions: FindOneOptions<Task> = { where: { uuid } };
    const task = await this.taskRepository.findOne(findOptions);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return await this.taskRepository.remove(task);
  }
}
