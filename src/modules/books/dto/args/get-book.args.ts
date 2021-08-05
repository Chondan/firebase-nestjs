import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GetBookArgs {
  @Field(() => Int)
  id: number;
}
