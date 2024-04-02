import { Module } from "@nestjs/common";
import { OffersService } from "./offers.service";
import { OffersController } from "./offers.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Offer } from "./entities/offer.entity";
import { WishesService } from "src/wishes/wishes.service";
import { Wish } from "src/wishes/entities/wish.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Offer, Wish])],
  controllers: [OffersController],
  providers: [OffersService, WishesService],
  exports: [OffersService],
})
export class OffersModule {}
