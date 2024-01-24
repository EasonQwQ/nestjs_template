// src/common/decorators/pagination.decorator.ts

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Pagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    let current = parseInt(request.query.current, 10);
    let pageSize = parseInt(request.query.pageSize, 10);

    // Check if current and pageSize are numbers
    if (isNaN(current) || current < 1) {
      current = 1;
    }

    if (isNaN(pageSize) || pageSize < 1) {
      pageSize = 10;
    }

    return { current, pageSize };
  },
);
export interface PaginationParams {
  current: number;
  pageSize: number;
}
