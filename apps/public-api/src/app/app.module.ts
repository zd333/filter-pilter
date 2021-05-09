import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['libs/gql/src/sdl/**/*.graphql'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
