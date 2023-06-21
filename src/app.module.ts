import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TasksModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
