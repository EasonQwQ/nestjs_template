import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { FavoriteEntity } from './entities/favorite.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(FavoriteEntity)
    private readonly favoriteRepository: Repository<FavoriteEntity>,
  ) {}

  async create(createFavoriteDto: CreateFavoriteDto): Promise<FavoriteEntity> {
    const favoriteEntity: FavoriteEntity =
      this.favoriteRepository.create(createFavoriteDto);
    return this.favoriteRepository.save(favoriteEntity);
  }

  async findAll(): Promise<FavoriteEntity[]> {
    return this.favoriteRepository.find();
  }

  async findOne(id: number): Promise<FavoriteEntity> {
    const favorite = await this.favoriteRepository.findOne({
      where: {
        id,
      },
    });
    if (!favorite) {
      throw new Error(`Favorite with id ${id} not found`);
    }
    return favorite;
  }
  // update
  async update(
    id: number,
    updateFavoriteDto: UpdateFavoriteDto,
  ): Promise<FavoriteEntity> {
    const favoriteToUpdate = await this.findOne(id);
    const updatedFavorite = {
      ...favoriteToUpdate,
      ...updateFavoriteDto,
    };
    return this.favoriteRepository.save(updatedFavorite);
  }

  async remove(id: number): Promise<{ message: string }> {
    const favoriteToRemove = await this.findOne(id);
    await this.favoriteRepository.remove(favoriteToRemove);
    return { message: `Favorite with id ${id} removed successfully` };
  }
}
