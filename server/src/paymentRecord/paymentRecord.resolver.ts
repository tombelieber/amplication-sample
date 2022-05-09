import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PaymentRecordResolverBase } from "./base/paymentRecord.resolver.base";
import { PaymentRecord } from "./base/PaymentRecord";
import { PaymentRecordService } from "./paymentRecord.service";

@graphql.Resolver(() => PaymentRecord)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PaymentRecordResolver extends PaymentRecordResolverBase {
  constructor(
    protected readonly service: PaymentRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
