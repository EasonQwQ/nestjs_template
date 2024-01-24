import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<CommentEntity> {
    const commentEntity: CommentEntity =
      this.commentRepository.create(createCommentDto);
    return this.commentRepository.save(commentEntity);
  }

  async findAll(): Promise<CommentEntity[]> {
    return this.commentRepository.find();
  }

  async findOne(id: number): Promise<CommentEntity> {
    const comment = await this.commentRepository.findOne({
      where: {
        id,
      },
    });
    if (!comment) {
      throw new Error(`Comment with id ${id} not found`);
    }
    return comment;
  }

  async update(
    id: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<CommentEntity> {
    await this.commentRepository.update(id, updateCommentDto);
    const updatedComment = await this.findOne(id);
    return updatedComment;
  }

  async remove(id: number): Promise<{ message: string }> {
    const commentToRemove = await this.findOne(id);
    await this.commentRepository.remove(commentToRemove);
    return { message: `Comment with id ${id} removed successfully` };
  }
}
