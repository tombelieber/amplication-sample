/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PaymentRecordWhereUniqueInput } from "../../paymentRecord/base/PaymentRecordWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class PaymentRecordUpdateManyWithoutRoomEnrollmentsInput {
  @Field(() => [PaymentRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentRecordWhereUniqueInput],
  })
  connect?: Array<PaymentRecordWhereUniqueInput>;

  @Field(() => [PaymentRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentRecordWhereUniqueInput],
  })
  disconnect?: Array<PaymentRecordWhereUniqueInput>;

  @Field(() => [PaymentRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentRecordWhereUniqueInput],
  })
  set?: Array<PaymentRecordWhereUniqueInput>;
}
export { PaymentRecordUpdateManyWithoutRoomEnrollmentsInput };
