/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PlatformTierWhereUniqueInput } from "../../platformTier/base/PlatformTierWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class PlatformTierUpdateManyWithoutPlatformProvidersInput {
  @Field(() => [PlatformTierWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlatformTierWhereUniqueInput],
  })
  connect?: Array<PlatformTierWhereUniqueInput>;

  @Field(() => [PlatformTierWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlatformTierWhereUniqueInput],
  })
  disconnect?: Array<PlatformTierWhereUniqueInput>;

  @Field(() => [PlatformTierWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlatformTierWhereUniqueInput],
  })
  set?: Array<PlatformTierWhereUniqueInput>;
}
export { PlatformTierUpdateManyWithoutPlatformProvidersInput };
