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
import { PaymentGatewayWhereInput } from "./PaymentGatewayWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PaymentGatewayListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PaymentGatewayWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentGatewayWhereInput)
  @IsOptional()
  @Field(() => PaymentGatewayWhereInput, {
    nullable: true,
  })
  every?: PaymentGatewayWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentGatewayWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentGatewayWhereInput)
  @IsOptional()
  @Field(() => PaymentGatewayWhereInput, {
    nullable: true,
  })
  some?: PaymentGatewayWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentGatewayWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentGatewayWhereInput)
  @IsOptional()
  @Field(() => PaymentGatewayWhereInput, {
    nullable: true,
  })
  none?: PaymentGatewayWhereInput;
}
export { PaymentGatewayListRelationFilter };
