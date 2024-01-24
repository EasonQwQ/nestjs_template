import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { ChatEntity } from './entities/chat.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateChatDto } from './dto/update-chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepository: Repository<ChatEntity>,
  ) {}

  async create(createChatDto: CreateChatDto): Promise<ChatEntity> {
    const chatEntity: ChatEntity = this.chatRepository.create(createChatDto);
    return this.chatRepository.save(chatEntity);
  }

  async findAll(): Promise<ChatEntity[]> {
    return this.chatRepository.find();
  }

  async findOne(id: number): Promise<ChatEntity> {
    const chat = await this.chatRepository.findOne({
      where: {
        id,
      },
    });
    if (!chat) {
      throw new Error(`Chat with id ${id} not found`);
    }
    return chat;
  }

  //update
  async update(id: number, updateChatDto: UpdateChatDto): Promise<ChatEntity> {
    const chatToUpdate = await this.findOne(id);
    const updatedChat = {
      ...chatToUpdate,
      ...updateChatDto,
    };
    return this.chatRepository.save(updatedChat);
  }

  async remove(id: number): Promise<{ message: string }> {
    const chatToRemove = await this.findOne(id);
    await this.chatRepository.remove(chatToRemove);
    return { message: `Chat with id ${id} removed successfully` };
  }
}
