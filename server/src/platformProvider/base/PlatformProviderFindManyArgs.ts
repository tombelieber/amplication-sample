/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlatformProviderWhereInput } from "./PlatformProviderWhereInput";
import { Type } from "class-transformer";
import { PlatformProviderOrderByInput } from "./PlatformProviderOrderByInput";

@ArgsType()
class PlatformProviderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PlatformProviderWhereInput,
  })
  @Field(() => PlatformProviderWhereInput, { nullable: true })
  @Type(() => PlatformProviderWhereInput)
  where?: PlatformProviderWhereInput;

  @ApiProperty({
    required: false,
    type: [PlatformProviderOrderByInput],
  })
  @Field(() => [PlatformProviderOrderByInput], { nullable: true })
  @Type(() => PlatformProviderOrderByInput)
  orderBy?: Array<PlatformProviderOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PlatformProviderFindManyArgs };