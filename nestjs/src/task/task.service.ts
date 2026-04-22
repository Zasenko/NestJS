import { Injectable, NotFoundException } from '@nestjs/common';
import { randomInt, randomUUID } from 'crypto';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Injectable()
export class TaskService {

    private tasks = [
        {
            id: 1,
            title: 'task 1',
            isComplited: false
        },
        {
            id: 2,
            title: 'task 2',
            isComplited: true
        }
    ]

    findAll() {
        return this.tasks;
    }

    findById(id: number) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            // throw new NotFoundException();
            throw new NotFoundException('Task not found');
        }
        return task;
    }

    create(dto: CreateTaskDTO) {
        const newTask = {
            id: this.tasks.length + 1,
            title: dto.title,
            description: dto.description,
            isComplited: false,
            priority: dto.priority,
            tags: dto.tags
        }

        this.tasks.push(newTask);
        return this.findAll();
    }

    update(id: number, dto: UpdateTaskDTO) {

        const task = this.findById(id);
        // task.title = dto.title;
        // task.isComplited = dto.isComplited;
        const { title, isComplited } = dto;
        task.title = title;
        task.isComplited = isComplited;
        return task;
    }

    patchTask(id: number, dto: Partial<UpdateTaskDTO>) {
        const task = this.findById(id);
        // if (dto.title !== undefined) {
        //     task.title = dto.title;
        // }
        Object.assign(task, dto);
        return task;
    }

    deleteTask(id: number) {
        const task = this.findById(id);
        this.tasks = this.tasks.filter(t => t.id !== task.id);
        return task;
    }


}
