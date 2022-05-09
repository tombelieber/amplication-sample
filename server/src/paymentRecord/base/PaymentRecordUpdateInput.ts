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
import { IsNumber, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumPaymentRecordFrequency } from "./EnumPaymentRecordFrequency";
import { PaymentGatewayWhereUniqueInput } from "../../paymentGateway/base/PaymentGatewayWhereUniqueInput";
import { Type } from "class-transformer";
import { RoomEnrollmentWhereUniqueInput } from "../../roomEnrollment/base/RoomEnrollmentWhereUniqueInput";
import { EnumPaymentRecordStatus } from "./EnumPaymentRecordStatus";
@InputType()
class PaymentRecordUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number;

  @ApiProperty({
    required: false,
    enum: EnumPaymentRecordFrequency,
  })
  @IsEnum(EnumPaymentRecordFrequency)
  @IsOptional()
  @Field(() => EnumPaymentRecordFrequency, {
    nullable: true,
  })
  frequency?: "OneOff" | "Monthly" | "Yearly";

  @ApiProperty({
    required: false,
    type: () => PaymentGatewayWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentGatewayWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentGatewayWhereUniqueInput, {
    nullable: true,
  })
  paymentGateway?: PaymentGatewayWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => RoomEnrollmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoomEnrollmentWhereUniqueInput)
  @IsOptional()
  @Field(() => RoomEnrollmentWhereUniqueInput, {
    nullable: true,
  })
  roomEnrollment?: RoomEnrollmentWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumPaymentRecordStatus,
  })
  @IsEnum(EnumPaymentRecordStatus)
  @IsOptional()
  @Field(() => EnumPaymentRecordStatus, {
    nullable: true,
  })
  status?: "Success" | "Failed" | "Pending";
}
export { PaymentRecordUpdateInput };