import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/car.seed';
import { BrandsService } from '../brands/brands.service';
import { BRANDS_SEED } from './data/brand.seed';
import { CarsService } from '../cars/cars.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {}
  
  populateDB() {
    this.carsService.fillCarsWithSeedData( CARS_SEED )

    this.brandsService.fillBrandsWithSeedData( BRANDS_SEED )

    return 'Seed executed successfuly'
  }

}
