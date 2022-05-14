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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { PlatformProviderUpdateManyWithoutTagsInput } from "./PlatformProviderUpdateManyWithoutTagsInput";
import { Type } from "class-transformer";
@InputType()
class TagUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => PlatformProviderUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => PlatformProviderUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => PlatformProviderUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  platformProvider?: PlatformProviderUpdateManyWithoutTagsInput;
}
export { TagUpdateInput };