import { Controller, Get, Param, Post, Put, Body, Patch, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  // @Get('') http://localhost:3000/task http://localhost:3000/task/
  // @Get('all') http://localhost:3000/task/all/
  @Get('all')
  findAll() {
    return this.taskService.findAll();
  }

  @Get('by-id/:id')
  findById(@Param('id') id: string) {
    return this.taskService.findById(Number(id));
  }

  @Post()
  create(@Body() dto: CreateTaskDTO) {
    return this.taskService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDTO) {
    return this.taskService.update(Number(id), dto);
  }

  @Patch(':id')
  patchUpdate(@Param('id') id: string, @Body() dto: Partial<UpdateTaskDTO>) {
    return this.taskService.patchTask(Number(id), dto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(Number(id));
  }
}
