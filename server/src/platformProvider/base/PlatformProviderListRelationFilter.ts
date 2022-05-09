/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlatformProviderWhereInput } from "./PlatformProviderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlatformProviderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PlatformProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => PlatformProviderWhereInput)
  @IsOptional()
  @Field(() => PlatformProviderWhereInput, {
    nullable: true,
  })
  every?: PlatformProviderWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlatformProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => PlatformProviderWhereInput)
  @IsOptional()
  @Field(() => PlatformProviderWhereInput, {
    nullable: true,
  })
  some?: PlatformProviderWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlatformProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => PlatformProviderWhereInput)
  @IsOptional()
  @Field(() => PlatformProviderWhereInput, {
    nullable: true,
  })
  none?: PlatformProviderWhereInput;
}
export { PlatformProviderListRelationFilter };
