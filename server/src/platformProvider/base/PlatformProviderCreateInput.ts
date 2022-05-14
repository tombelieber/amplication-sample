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
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { TagCreateNestedManyWithoutPlatformProvidersInput } from "./TagCreateNestedManyWithoutPlatformProvidersInput";
import { Type } from "class-transformer";
import { PlatformTierCreateNestedManyWithoutPlatformProvidersInput } from "./PlatformTierCreateNestedManyWithoutPlatformProvidersInput";
@InputType()
class PlatformProviderCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  bannerImage!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  iconImage!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => TagCreateNestedManyWithoutPlatformProvidersInput,
  })
  @ValidateNested()
  @Type(() => TagCreateNestedManyWithoutPlatformProvidersInput)
  @IsOptional()
  @Field(() => TagCreateNestedManyWithoutPlatformProvidersInput, {
    nullable: true,
  })
  tags?: TagCreateNestedManyWithoutPlatformProvidersInput;

  @ApiProperty({
    required: true,
    type: () => PlatformTierCreateNestedManyWithoutPlatformProvidersInput,
  })
  @ValidateNested()
  @Type(() => PlatformTierCreateNestedManyWithoutPlatformProvidersInput)
  @IsOptional()
  @Field(() => PlatformTierCreateNestedManyWithoutPlatformProvidersInput, {
    nullable: true,
  })
  tiers?: PlatformTierCreateNestedManyWithoutPlatformProvidersInput;
}
export { PlatformProviderCreateInput };
