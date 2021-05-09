import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

/**
 * Use this to generate TS typings from GraphQL SDL files.
 * !This is not for in production code, it's just infra tool!
 */
const definitionsFactory = new GraphQLDefinitionsFactory();

definitionsFactory.generate({
  typePaths: ['libs/gql/src/sdl/**/*.graphql'],
  path: join(process.cwd(), '/libs/gql/generated/typings.ts'),
  outputAs: 'class',
});
