import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './entities/task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  tasksArray: Task[] = [
    {
      uuid: '43ab-83rv-2af4-2g47',
      title: 'shopping',
      description: '4:00 PM on 14th July, 2023',
      reminder: true,
    },
    {
      uuid: '5hb2-g631-09g3-e5b4y',
      title: 'interview',
      description: '7:00 AM on 17th September, 2023',
      reminder: false,
    },
  ];

  findAllTasks(title?): Task[] {
    if (title) {
      return this.tasksArray.filter((task) => task.title === title);
    }
    return this.tasksArray;
  }

  findTaskByTitle(title: string): Task[] {
    const filterArr = this.tasksArray.filter((task) => task.title === title);
    if (!filterArr.length) {
      throw new NotFoundException();
    }
    return filterArr;
  }

  addTask(body: CreateTaskDTO): Task {
    const newTask = { uuid: uuidv4(), ...body };
    this.tasksArray.push(newTask);
    return newTask;
  }
}
