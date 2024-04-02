import { Injectable } from "@nestjs/common";
import { CreateOfferDto } from "./dto/create-offer.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Offer } from "./entities/offer.entity";
import { Repository, FindManyOptions } from "typeorm";

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>
  ) {}

  async create(createOfferDto: CreateOfferDto, userId: string): Promise<Offer> {
    const { itemId, ...newOffer } = createOfferDto;
    newOffer["item"] = itemId;
    newOffer["user"] = userId;
    return this.offerRepository.save(newOffer);
  }

  async findAll(paramsObject: FindManyOptions<Offer>): Promise<Offer[]> {
    return this.offerRepository.find(paramsObject);
  }

  async findOne(id: number): Promise<Offer> {
    return this.offerRepository.findOneBy({ id });
  }
}
