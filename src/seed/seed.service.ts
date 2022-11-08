import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

import { PokeResponse } from './interfaces/poke-response.interfaces';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private http: HttpService,
    private http1: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const pokemonToInsert: { name: string; no: number }[] = [];

    // const data = await this.http1
    //   .get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')
    //   .then(
    //     (data) => {
    // data.results.forEach(async ({ name, url }) => {
    //   const segments = url.split('/');
    //   const no = +segments[segments.length - 2];
    //   pokemonToInsert.push({ name, no });
    // });
    // this.pokemonModel.insertMany(pokemonToInsert);
    // console.log('data: ', pokemonToInsert);
    //   },
    //   (error) => console.log(error),
    // );
    await this.http
      .get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')
      .subscribe(
        (response) => {
          response.data.results.forEach(async ({ name, url }) => {
            const segments = url.split('/');
            const no = +segments[segments.length - 2];
            pokemonToInsert.push({ name, no });
          });
          this.pokemonModel.insertMany(pokemonToInsert);
        },
        (error) => console.log(error),
      );
    return 'seeds executed';
  }
}
