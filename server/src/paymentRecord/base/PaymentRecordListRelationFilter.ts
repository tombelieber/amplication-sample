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
import { PaymentRecordWhereInput } from "./PaymentRecordWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PaymentRecordListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PaymentRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentRecordWhereInput)
  @IsOptional()
  @Field(() => PaymentRecordWhereInput, {
    nullable: true,
  })
  every?: PaymentRecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentRecordWhereInput)
  @IsOptional()
  @Field(() => PaymentRecordWhereInput, {
    nullable: true,
  })
  some?: PaymentRecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentRecordWhereInput)
  @IsOptional()
  @Field(() => PaymentRecordWhereInput, {
    nullable: true,
  })
  none?: PaymentRecordWhereInput;
}
export { PaymentRecordListRelationFilter };
