// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { AddressModule } from './address/address.module';
import { CommentModule } from './comment/comment.module';
import { FavoriteModule } from './favorite/favorite.module';
import { ChatModule } from './chat/chat.module';
import { ConfigModule } from '@nestjs/config';
import { WxapiModule } from './wxapi/wxapi.module';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionsFilter } from './filter/any-exception.filter';
import { TransformInterceptor } from './filter/transformInterceptor';
import { AuthGuard } from './auth/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { TabListModule } from './tab-list/tab-list.module';
import { SwiperModule } from './swiper/swiper.module';
import { ProductImagesModule } from './product-images/product-images.module';
import { CategoryModule } from './category/category.module';
import { SpecificationModule } from './specification/specification.module';
import { SkuModule } from './sku/sku.module';
import { PriceInfoModule } from './price-info/price-info.module';
import { StockInfoModule } from './stock-info/stock-info.module';
import { LimitInfoModule } from './limit-info/limit-info.module';
import { PcApiModule } from './pc-api/pc-api.module';
import { CosApiModule } from './cos-api/cos-api.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    ProductModule,
    OrderModule,
    AddressModule,
    CommentModule,
    FavoriteModule,
    ChatModule,
    WxapiModule,
    AuthModule,
    CommonModule,
    TabListModule,
    SwiperModule,
    ProductImagesModule,
    CategoryModule,
    SpecificationModule,
    SkuModule,
    PriceInfoModule,
    StockInfoModule,
    LimitInfoModule,
    PcApiModule,
    CosApiModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [],
  exports: [],
  // providers: [AppService, UserService],
})
export class AppModule {}
