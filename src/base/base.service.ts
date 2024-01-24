import { Repository } from 'typeorm';

export interface FindAllResult<T> {
  list: T[];
  total: number;
  page: number;
  limit: number;
}
export abstract class BaseService<T> {
  constructor(protected readonly repository: Repository<T>) {}

  async findAll({ page = 1, limit = 10 } = {}): Promise<FindAllResult<T>> {
    const list = await this.repository
      .createQueryBuilder('entity')
      .skip((page - 1) * limit)
      .take(limit)
      .getMany();
    return {
      list: list,
      total: await this.repository.count(),
      page,
      limit,
    };
  }
}
