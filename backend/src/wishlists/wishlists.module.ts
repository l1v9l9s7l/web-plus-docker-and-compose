import { Module } from "@nestjs/common";
import { WishlistsService } from "./wishlists.service";
import { WishlistsController } from "./wishlists.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Wishlist } from "./entities/wishlist.entity";
import { UsersService } from "src/users/users.service";
import { User } from "src/users/entities/user.entity";
import { Wish } from "src/wishes/entities/wish.entity";
import { WishesService } from "src/wishes/wishes.service";

@Module({
  imports: [TypeOrmModule.forFeature([Wishlist, User, Wish])],
  controllers: [WishlistsController],
  providers: [WishlistsService, UsersService, WishesService],
  exports: [WishlistsService],
})
export class WishlistsModule {}
