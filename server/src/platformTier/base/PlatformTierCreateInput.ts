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
import {
  IsInt,
  IsString,
  IsNumber,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { PlatformProviderWhereUniqueInput } from "../../platformProvider/base/PlatformProviderWhereUniqueInput";
import { Type } from "class-transformer";
import { RoomCreateNestedManyWithoutPlatformTiersInput } from "./RoomCreateNestedManyWithoutPlatformTiersInput";
@InputType()
class PlatformTierCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  capcity!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: true,
    type: () => PlatformProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlatformProviderWhereUniqueInput)
  @Field(() => PlatformProviderWhereUniqueInput)
  provider!: PlatformProviderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RoomCreateNestedManyWithoutPlatformTiersInput,
  })
  @ValidateNested()
  @Type(() => RoomCreateNestedManyWithoutPlatformTiersInput)
  @IsOptional()
  @Field(() => RoomCreateNestedManyWithoutPlatformTiersInput, {
    nullable: true,
  })
  rooms?: RoomCreateNestedManyWithoutPlatformTiersInput;
}
export { PlatformTierCreateInput };